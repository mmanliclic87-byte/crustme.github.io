import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend';

const EnquirySchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(30),
  message: z.string().trim().min(1).max(2000),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export const Route = createFileRoute('/api/public/send-enquiry')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        return new Response(JSON.stringify({ error: 'Enquiries are temporarily closed. Please contact us directly via email or phone.' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
      },
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY) return new Response(JSON.stringify({ error: 'LOVABLE_API_KEY not configured' }), { status: 500 });
        if (!RESEND_API_KEY) return new Response(JSON.stringify({ error: 'RESEND_API_KEY not configured' }), { status: 500 });

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
        }
        const parsed = EnquirySchema.safeParse(body);
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: 'Invalid input', details: parsed.error.flatten() }), { status: 400 });
        }
        const { name, email, phone, message } = parsed.data;

        const html = `
          <h2>New enquiry from ${escapeHtml(name)}</h2>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
        `;

        const res = await fetch(`${GATEWAY_URL}/emails`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            'X-Connection-Api-Key': RESEND_API_KEY,
          },
          body: JSON.stringify({
            from: 'Crust Me Enquiries <onboarding@resend.dev>',
            to: ['events@crustme.com.au'],
            reply_to: email,
            subject: `New enquiry from ${name}`,
            html,
          }),
        });

        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          console.error('Resend error', res.status, data);
          return new Response(JSON.stringify({ error: 'Failed to send email', details: data }), { status: 502 });
        }
        return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
      },
    },
  },
});
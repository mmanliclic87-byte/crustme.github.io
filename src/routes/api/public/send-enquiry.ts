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
      POST: async () => {
        return new Response(JSON.stringify({ error: 'Enquiries are temporarily closed. Please contact us directly via email or phone.' }), { status: 503, headers: { 'Content-Type': 'application/json' } });
      },
    },
  },
});
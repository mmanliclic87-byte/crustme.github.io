import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import heroPizza from "@/assets/hero-pizza.webp";
import heroWordmark from "@/assets/crust-me-wordmark.png";
import pizza1 from "@/assets/pizza-1.jpg";
import pizza2 from "@/assets/pizza-2.jpg";
import pizza3 from "@/assets/pizza-3.jpg";
import currentMenu from "@/assets/current-menu.jpeg";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crust Me Pizza — It's Good" },
      { name: "description", content: "Crust Me — wood-fired pizza trailer bringing authentic, hand-crafted pizza to your events." },
      { property: "og:title", content: "Crust Me Pizza — It's Good" },
      { property: "og:description", content: "Wood-fired pizza trailer for events, parties, and gatherings." },
    ],
  }),
  component: Index,
});

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg py-2" : "bg-black/40 backdrop-blur-sm py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Crust Me logo" className="h-12 w-12 sm:h-14 sm:w-14 object-contain" />
          <span className="hidden sm:inline text-xl sm:text-2xl font-bold tracking-tight text-white">Crust Me</span>
        </div>
        <nav className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => scrollToId("our-story")}
            className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Our Story
          </button>
          <button
            onClick={() => scrollToId("current-menu")}
            className="rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToId("enquiries")}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-white/90 transition"
          >
            Enquiries
          </button>
          <a
            href="https://www.instagram.com/crustmeofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Crust Me on Instagram"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-2 text-white shadow hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2M12 0C8.74 0 8.33 0 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-11.84a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/crustmeofficial/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Crust Me on Facebook"
            className="inline-flex items-center justify-center rounded-full bg-[#1877F2] p-2 text-white shadow hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.408 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@crust.me.official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Crust Me on TikTok"
            className="inline-flex items-center justify-center rounded-full bg-black p-2 text-white shadow hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04z"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      <img src={heroPizza} alt="Wood-fired pizza" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      <div className="relative z-10 h-full mx-auto max-w-7xl pl-10 sm:pl-20 lg:pl-32 pr-4 flex flex-col justify-center">
        <h1 className="text-left">
          <span className="sr-only">Crust Me — It's Good.</span>
          <img
            src={heroWordmark}
            alt="Crust Me"
            className="w-[min(90%,640px)] h-auto drop-shadow-2xl"
          />
        </h1>
        <div className="mt-6 max-w-full flex flex-col gap-2 text-sm sm:text-base lg:text-lg italic text-white/90 drop-shadow animate-slide-in-right break-words">
          <p>
            Phone:{" "}
            <a href="tel:+61416436036" className="text-white hover:text-white/80 transition">
              0416 436 036
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:events@crustme.com.au" className="text-white hover:text-white/80 transition">
              events@crustme.com.au
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  const storyRef = useRevealOnScroll<HTMLDivElement>();
  const img1Ref = useRevealOnScroll<HTMLDivElement>();
  const img2Ref = useRevealOnScroll<HTMLDivElement>();
  const img3Ref = useRevealOnScroll<HTMLDivElement>();
  return (
    <section id="our-story" className="bg-black py-24 pl-10 sm:pl-20 lg:pl-32 pr-4 sm:pr-6 overflow-hidden">
      <div className="mx-auto max-w-7xl mb-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div ref={img1Ref} className="reveal-from-left aspect-square overflow-hidden rounded-lg" style={{ transitionDelay: "0ms" }}>
          <img src={pizza1} alt="Margherita pizza with parmesan" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div ref={img2Ref} className="reveal-from-left aspect-square overflow-hidden rounded-lg" style={{ transitionDelay: "150ms" }}>
          <img src={pizza2} alt="Wood-fired pizza with leopard crust" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div ref={img3Ref} className="reveal-from-left aspect-square overflow-hidden rounded-lg" style={{ transitionDelay: "300ms" }}>
          <img src={pizza3} alt="Pizza with prosciutto and parmesan" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
      <div ref={storyRef} className="reveal-from-right mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Story</h2>
          <div className="h-1 w-20 bg-white/30 mb-8" />
          <div className="space-y-5 text-lg text-white/80 leading-relaxed">
            <p>We're a small, family-run pizza trailer with a big passion for great food.</p>
            <p>We fell in love with Neapolitan pizza — but wanted to bring you a fresh, modern take on this classic favourite. Every pizza begins with our special dough: hand-stretched and slow-fermented for 72 hours to create a crust that's light, fluffy, and full of flavour.</p>
            <p>We never cut corners — only the highest quality ingredients make it onto our menu. Cooked Hot and Fast, every pizza comes out with that perfect char and taste you'll come back for.</p>
            <p>More than just pizza — it's food made with heart, shared with friends and family, and served straight from our trailer to your plate.</p>
            <p>Come say hello and taste the difference today!</p>
          </div>
        </div>
        <div aria-hidden className="hidden lg:block" />
      </div>
    </section>
  );
}

function CurrentMenu() {
  const menuRef = useRevealOnScroll<HTMLDivElement>();
  return (
    <section id="current-menu" className="bg-black py-24 pl-10 sm:pl-20 lg:pl-32 pr-4 sm:pr-6">
      <div ref={menuRef} className="reveal-from-bottom mx-auto max-w-7xl">
        <h2 className="text-left text-4xl sm:text-5xl font-bold text-white mb-4">Current Menu</h2>
        <div className="h-1 w-20 bg-white/30 mb-10" />
        <div className="max-w-3xl">
          <img
            src={currentMenu}
            alt="Crust Me current menu with pizza prices and ingredients"
            className="w-full h-auto rounded-xl border border-white/10 shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Enquiries() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: 'ok' | 'err'; msg: string }>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      message: String(fd.get('message') || ''),
    };
    setSubmitting(true);
    setStatus(null);
    try {
      // On Lovable preview/published domains, the API is same-origin.
      // On GitHub Pages (or any other host), call the Lovable backend directly.
      const isLovable =
        typeof window !== 'undefined' &&
        (window.location.hostname === 'localhost' || window.location.hostname.endsWith('lovable.app'));
      const endpoint = isLovable
        ? '/api/public/send-enquiry'
        : 'https://project--5079be97-7af2-4cee-9a20-26b08d8a9c02.lovable.app/api/public/send-enquiry';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const detail =
          (data?.details && (data.details.message || JSON.stringify(data.details))) ||
          data?.error ||
          `Request failed (${res.status})`;
        throw new Error(detail);
      }
      setStatus({ type: 'ok', msg: "Thanks! We'll be in touch soon." });
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong.';
      console.error('Enquiry submit failed:', err);
      setStatus({ type: 'err', msg });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="enquiries" className="bg-neutral-950 py-24 pl-10 sm:pl-20 lg:pl-32 pr-4 sm:pr-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-left text-4xl sm:text-5xl font-bold text-white mb-4">Enquiries</h2>
        <p className="text-left text-white/60 mb-10">Book us for your next event. We'll get back to you shortly.</p>
        <div className="max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
            <input
              name="name"
              type="text"
              required
              maxLength={100}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
            <input
              name="email"
              type="email"
              required
              maxLength={255}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none transition"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Contact Number</label>
            <input
              name="phone"
              type="tel"
              required
              maxLength={30}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none transition"
              placeholder="+1 (555) 000-0000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              maxLength={1000}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none transition resize-none"
              placeholder="Tell us about your event..."
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-lg bg-white px-6 py-3 font-semibold text-black hover:bg-white/90 transition disabled:opacity-60"
          >
            {submitting ? 'Sending…' : 'Send Enquiry'}
          </button>
          {status && (
            <p className={`text-sm ${status.type === 'ok' ? 'text-emerald-400' : 'text-red-400'}`}>
              {status.msg}
            </p>
          )}
        </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col items-start gap-2">
          <a
            href="https://www.instagram.com/crustmeofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.64.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2M12 0C8.74 0 8.33 0 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.73 1.46 1.38 2.13a5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-11.84a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z"/>
            </svg>
            Follow us on Instagram
          </a>
          <a
            href="https://www.facebook.com/crustmeofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.408 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
            </svg>
            Follow us on Facebook
          </a>
          <a
            href="https://www.tiktok.com/@crust.me.official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04z"/>
            </svg>
            Follow us on TikTok
          </a>
          <p className="text-xs text-white/40">Website by Matthew Manliclic - <span className="text-white">mmanliclic87@gmail.com</span></p>
        </div>
        <div className="text-left sm:text-right text-sm text-white/70 space-y-1">
          <p>
            Phone:{" "}
            <a href="tel:+61416436036" className="text-white hover:text-white/80 transition">
              0416 436 036
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:events@crustme.com.au" className="text-white hover:text-white/80 transition">
              events@crustme.com.au
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <CurrentMenu />
        <Enquiries />
      </main>
      <Footer />
    </div>
  );
}
import { useState } from "react";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";

const BUDGET_OPTIONS = [
  "Under €20k",
  "€20k – €50k",
  "€50k – €100k",
  "€100k – €250k",
  "€250k+",
  "Not sure yet",
];

const SERVICE_OPTIONS = [
  "Brand Identity",
  "Digital Product",
  "Motion & Film",
  "Art Direction",
  "Print & Editorial",
  "Something else",
];

const OFFICES = [
  {
    city: "Berlin",
    address: "Kastanienallee 82\n10435 Prenzlauer Berg",
    email: "berlin@forma.studioten",
    phone: "+49 30 1234 5678",
    img: "https://images.unsplash.com/photo-1552329901-a0b0dfe8a4e6?w=600&h=400&fit=crop&auto=format",
    tz: "CET",
    label: "Primary",
  },
  {
    city: "New York",
    address: "147 Grand Street, 4F\nNew York, NY 10013",
    email: "ny@forma.studio",
    phone: "+1 212 555 0192",
    img: "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?w=600&h=400&fit=crop&auto=format",
    tz: "EST",
    label: "Office",
  },
  {
    city: "Tokyo",
    address: "2-12-4 Daikanyama\nShibuya-ku, Tokyo 150-0034",
    email: "tokyo@forma.studio",
    phone: "+81 3 1234 5678",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop&auto=format",
    tz: "JST",
    label: "Office",
  },
];

type FormState = {
  name: string;
  email: string;
  company: string;
  services: string[];
  budget: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    services: [],
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (s: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-8 md:px-16 border-b border-border">
        <div className="grid md:grid-cols-12 items-end gap-8">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              Get in touch
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Let&apos;s make
              <br />
              <span className="italic font-normal">something together.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              We respond to all enquiries within two business days. For urgent matters, email berlin@forma.studio directly.
            </p>
          </div>
        </div>
      </section>

      <div className="px-8 md:px-16 py-20 grid md:grid-cols-12 gap-16">
        {/* FORM */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="flex flex-col gap-6 py-16">
              <div className="w-12 h-px bg-accent" />
              <h2 className="text-3xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                We&apos;ve received your message.
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Thank you, {form.name.split(" ")[0]}. Someone from the studio will be in touch within two business days. In the meantime, feel free to explore our work.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors w-fit"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <label className="flex flex-col gap-2">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Full name *
                  </span>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors text-sm"
                    placeholder="Noa Bergström"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Email *
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors text-sm"
                    placeholder="noa@company.com"
                  />
                </label>
              </div>

              {/* Company */}
              <label className="flex flex-col gap-2">
                <span className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Company / Organisation
                </span>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors text-sm"
                  placeholder="Vela Spirits"
                />
              </label>

              {/* Services */}
              <div className="flex flex-col gap-3">
                <span className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  I&apos;m interested in
                </span>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleService(s)}
                      className={`text-xs px-4 py-2 border transition-all duration-200 ${form.services.includes(s)
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-3">
                <span className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Approximate budget
                </span>
                <div className="flex flex-wrap gap-2">
                  {BUDGET_OPTIONS.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setForm({ ...form, budget: b })}
                      className={`text-xs px-4 py-2 border transition-all duration-200 ${form.budget === b
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                        }`}
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <label className="flex flex-col gap-2">
                <span className="text-xs tracking-widest uppercase text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Tell us about your project *
                </span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors text-sm resize-none"
                  placeholder="What are you working on? What problem are you trying to solve? The more context, the better."
                />
              </label>

              <button
                type="submit"
                className="flex items-center justify-between bg-accent text-accent-foreground px-6 py-4 font-medium hover:bg-accent/90 transition-colors group w-full md:w-auto"
              >
                <span>Send your enquiry</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="md:col-span-5 flex flex-col gap-12">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              Direct contact
            </p>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@forma.studio" className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors group">
                <Mail size={14} className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
                hello@forma.studio
              </a>
              <a href="tel:+493012345678" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                <Phone size={14} className="flex-shrink-0" />
                +49 30 1234 5678
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              Response time
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We reply to all project enquiries within <span className="text-foreground">two business days</span>. During intensive project phases, it may take a little longer — we&apos;ll always acknowledge receipt.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
              New business intake
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We&apos;re currently accepting projects beginning <span className="text-foreground">Q4 2026</span>. Our intake calendar fills 6–8 weeks in advance.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-accent" style={{ fontFamily: "'DM Mono', monospace" }}>Taking enquiries now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Offices */}
      <section className="px-8 md:px-16 py-16 border-t border-border bg-card">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12" style={{ fontFamily: "'DM Mono', monospace" }}>
          Our offices
        </p>
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {OFFICES.map((office) => (
            <div key={office.city} className="bg-card flex flex-col">
              <div className="h-48 overflow-hidden bg-muted relative">
                <img
                  src={office.img}
                  alt={`${office.city} office`}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-background/80 text-foreground px-2 py-1 backdrop-blur-sm" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {office.label}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {office.city}
                  </h3>
                  <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {office.tz}
                  </span>
                </div>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={12} className="mt-1 flex-shrink-0" />
                  <span className="whitespace-pre-line">{office.address}</span>
                </div>
                <a href={`mailto:${office.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail size={12} className="flex-shrink-0" />
                  {office.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

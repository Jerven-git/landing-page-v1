import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { NavLink } from "react-router";

const SERVICES = [
  {
    id: "brand",
    number: "01",
    title: "Brand Identity",
    tagline: "From mark to meaning.",
    description:
      "We build brand systems that hold together across time, media, and context. A brand is not a logo — it's a set of decisions that govern how a company looks, sounds, and behaves. We define those decisions and document them so teams can execute confidently long after we've left the room.",
    deliverables: [
      "Strategic positioning & naming",
      "Visual identity & mark system",
      "Typography & colour architecture",
      "Brand voice & messaging",
      "Usage guidelines & brand book",
      "Stationery, signage & packaging",
    ],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format",
    accent: "#E8C547",
    projects: ["Vela Spirits", "Halo Architecture", "Drift Coffee"],
  },
  {
    id: "digital",
    number: "02",
    title: "Digital Product",
    tagline: "Designed to be used, not admired.",
    description:
      "We design digital products that are structurally sound, visually coherent, and genuinely pleasurable to use. Our process is collaborative by necessity — we embed with product and engineering teams to understand constraints before proposing solutions.",
    deliverables: [
      "UX research & discovery",
      "Information architecture",
      "Interface design & prototyping",
      "Design system & component library",
      "Handoff & engineering support",
      "Usability testing",
    ],
    img: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop&auto=format",
    accent: "#E8C547",
    projects: ["Meridian OS", "Vantage Capital"],
  },
  {
    id: "motion",
    number: "03",
    title: "Motion & Film",
    tagline: "Time as a design material.",
    description:
      "Motion is not decoration — it's a language. We use it to explain, to set pace, to create atmosphere. From title sequences and brand films to micro-interactions and animated identities, we bring temporal craft to every moving image we produce.",
    deliverables: [
      "Brand film & manifesto video",
      "Title sequence design",
      "Motion identity system",
      "Social & digital content",
      "Interactive animation (Lottie/web)",
      "Sound direction",
    ],
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop&auto=format",
    accent: "#E8C547",
    projects: ["Pale Fire — Title Sequence"],
  },
  {
    id: "art-direction",
    number: "04",
    title: "Art Direction",
    tagline: "Every frame is a decision.",
    description:
      "We art-direct photography, video, and campaign shoots — defining visual language, guiding talent, and ensuring every asset coheres. This is the discipline that bridges strategy and image, translating a brand's position into pictures.",
    deliverables: [
      "Campaign concept & moodboard",
      "Photography direction",
      "Set and prop styling brief",
      "Talent and location selection",
      "Post-production direction",
      "Asset roll-out planning",
    ],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
    accent: "#E8C547",
    projects: ["Maison Lune", "Basalt Hotel"],
  },
  {
    id: "editorial",
    number: "05",
    title: "Print & Editorial",
    tagline: "The weight of the page still matters.",
    description:
      "Print rewards patience. We design books, catalogues, journals, and annual reports that hold up to sustained reading — and look exceptional on a shelf. We manage the full process from concept through press check.",
    deliverables: [
      "Publication concept & architecture",
      "Typographic system design",
      "Grid and layout system",
      "Production & paper specification",
      "Printer liaison & press supervision",
      "Distribution & packaging design",
    ],
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=600&fit=crop&auto=format",
    accent: "#E8C547",
    projects: ["Quarry Journal"],
  },
];

const PROCESS = [
  { step: "01", title: "Intake", body: "A focused call to understand what you're trying to solve, who you're solving it for, and why now. We'll tell you honestly if we're the right fit." },
  { step: "02", title: "Discovery", body: "Two to three weeks of research, stakeholder interviews, competitive audit, and strategic synthesis. Everything before the first sketch." },
  { step: "03", title: "Direction", body: "We present two or three distinct creative directions — not variations of the same idea. You choose the direction that fits. We commit to it fully." },
  { step: "04", title: "Development", body: "The chosen direction is built out across all touchpoints. Iterative rounds with clear feedback cycles. No design by committee." },
  { step: "05", title: "Delivery", body: "Final assets, documentation, guidelines, and a handoff session. We're available for launch support and QA across the first 30 days." },
];

export default function Services() {
  const [openService, setOpenService] = useState<string | null>("brand");

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-20 px-8 md:px-16 border-b border-border">
        <div className="grid md:grid-cols-12 items-end gap-8">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              What we do
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Five ways
              <br />
              <span className="italic font-normal">we can help.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              We work across brand, product, motion, and editorial — often in combination. Every engagement is scoped to the actual problem, not a service menu.
            </p>
          </div>
        </div>
      </section>

      {/* Services accordion */}
      <section className="px-8 md:px-16 py-16 border-b border-border">
        <div className="flex flex-col divide-y divide-border">
          {SERVICES.map((service) => {
            const isOpen = openService === service.id;
            return (
              <div key={service.id}>
                <button
                  className="w-full flex items-center justify-between py-8 text-left group"
                  onClick={() => setOpenService(isOpen ? null : service.id)}
                >
                  <div className="flex items-baseline gap-6">
                    <span className="text-accent text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>{service.number}</span>
                    <span
                      className={`text-2xl md:text-4xl font-black transition-colors ${isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {service.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="hidden md:block text-sm text-muted-foreground italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.tagline}
                    </span>
                    {isOpen ? <Minus size={18} className="text-accent flex-shrink-0" /> : <Plus size={18} className="text-muted-foreground group-hover:text-foreground flex-shrink-0 transition-colors" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-12 grid md:grid-cols-12 gap-8">
                    <div className="md:col-span-7 flex flex-col gap-6">
                      <p className="text-foreground text-lg leading-relaxed font-light">{service.description}</p>
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                          Deliverables
                        </p>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                          {service.deliverables.map((d) => (
                            <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span className="w-3 h-px bg-accent flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
                          Recent work
                        </p>
                        <div className="flex gap-2 flex-wrap">
                          {service.projects.map((p) => (
                            <span key={p} className="text-xs border border-border px-3 py-1.5 text-muted-foreground">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-5">
                      <div className="h-64 md:h-80 overflow-hidden bg-card">
                        <img src={service.img} alt={service.title} className="w-full h-full object-cover opacity-70" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="px-8 md:px-16 py-24 border-b border-border bg-card">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16" style={{ fontFamily: "'DM Mono', monospace" }}>
          Our process
        </p>
        <div className="grid md:grid-cols-5 gap-px bg-border">
          {PROCESS.map((p) => (
            <div key={p.step} className="bg-card p-8 flex flex-col gap-4">
              <span className="text-accent text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>{p.step}</span>
              <h3 className="text-xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Not sure what you need?
            </h2>
            <p className="text-muted-foreground max-w-lg">
              Most of our best projects started with a phone call where the client wasn&apos;t sure what to ask for. That&apos;s fine. That&apos;s what discovery is for.
            </p>
          </div>
          <NavLink
            to="/contact"
            className="flex-shrink-0 flex items-center gap-2 bg-accent text-accent-foreground px-6 py-4 font-medium hover:bg-accent/90 transition-colors"
          >
            Talk to us <ArrowUpRight size={16} />
          </NavLink>
        </div>
      </section>
    </>
  );
}

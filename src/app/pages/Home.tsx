import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { NavLink } from "react-router";

const SERVICES = [
  "Brand Identity",
  "Digital Product",
  "Motion & Film",
  "Art Direction",
  "Web Design",
  "Print & Editorial",
];

const WORK = [
  {
    title: "Vela Spirits",
    category: "Brand Identity",
    year: "2025",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop&auto=format",
    span: "col-span-2 row-span-2",
  },
  {
    title: "Meridian OS",
    category: "Digital Product",
    year: "2025",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&auto=format",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Maison Lune",
    category: "Art Direction",
    year: "2024",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Quarry Journal",
    category: "Print & Editorial",
    year: "2024",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=700&h=500&fit=crop&auto=format",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Halo Architecture",
    category: "Brand Identity",
    year: "2024",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=500&fit=crop&auto=format",
    span: "col-span-1 row-span-1",
  },
];

const TESTIMONIALS = [
  {
    quote: "Forma reshaped how we think about our brand entirely. The work was rigorous, surprising, and exactly right.",
    author: "Celia Marsh",
    role: "CEO, Vela Spirits",
  },
  {
    quote: "Every decision was intentional. We shipped a product that felt finished from day one — something we'd never experienced before.",
    author: "Dom Okafor",
    role: "Founder, Meridian",
  },
  {
    quote: "The team brings a discipline that's rare. They ask hard questions and don't accept easy answers.",
    author: "Sabine Hardt",
    role: "Creative Director, Maison Lune",
  },
];

const STATS = [
  { value: "12", label: "Years practice" },
  { value: "340+", label: "Projects shipped" },
  { value: "3", label: "Continents" },
  { value: "94%", label: "Repeat clients" },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const tickerRef = useRef<number>(0);
  const [tickerX, setTickerX] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      tickerRef.current -= 0.4;
      setTickerX(tickerRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const serviceWidth = 220;
  const totalWidth = SERVICES.length * serviceWidth;
  const wrappedX = ((tickerRef.current % totalWidth) + totalWidth) % totalWidth;

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-0 px-8 md:px-16 relative min-h-screen flex flex-col justify-between">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8" style={{ fontFamily: "'DM Mono', monospace" }}>
              Studio — Est. 2013
            </p>
            <h1
              className="text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.92] tracking-tight text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Design
              <br />
              <span className="italic font-normal">that earns</span>
              <br />
              attention.
            </h1>
          </div>

          <div className="md:col-span-4 md:pt-20 flex flex-col gap-6">
            <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
              Forma is an independent creative studio building brands, products, and experiences for companies that refuse to be ordinary.
            </p>
            <div className="flex flex-col gap-3">
              <NavLink
                to="/work"
                className="flex items-center justify-between text-sm border border-border px-5 py-4 hover:border-accent hover:text-accent transition-all duration-200 group"
              >
                <span>See our work</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </NavLink>
              <NavLink
                to="/contact"
                className="flex items-center justify-between text-sm bg-accent text-accent-foreground px-5 py-4 hover:bg-accent/90 transition-colors font-medium group"
              >
                <span>Start a project</span>
                <ArrowUpRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mt-16 -mx-8 md:-mx-16 h-[45vh] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1600&h=700&fit=crop&auto=format"
            alt="Forma studio team at work on a brand project"
            className="w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 md:grid-cols-4 border-t border-border">
            {STATS.map((s) => (
              <div key={s.label} className="px-8 py-5 border-r border-border last:border-r-0 bg-background/60 backdrop-blur-sm">
                <div className="text-3xl font-black text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-border py-4 overflow-hidden bg-card mt-0">
        <div className="flex gap-0 whitespace-nowrap" style={{ transform: `translateX(${-wrappedX}px)` }}>
          {[...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-4 pr-12"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em" }}
            >
              <span className="text-accent">✦</span>
              <span className="text-muted-foreground uppercase">{s}</span>
            </span>
          ))}
        </div>
      </div>

      {/* SELECTED WORK */}
      <section className="px-8 md:px-16 py-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Selected <span className="italic font-normal">work</span>
          </h2>
          <NavLink to="/work" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            All projects <ChevronRight size={14} />
          </NavLink>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px] md:auto-rows-[260px]">
          {WORK.map((item, i) => (
            <div key={i} className={`${item.span} relative overflow-hidden group cursor-pointer bg-card`}>
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-accent tracking-widest uppercase mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {item.category} — {item.year}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {item.title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border border-foreground/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-8 md:px-16 py-24 border-t border-border">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              Our philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Form follows
              <br />
              <span className="italic font-normal text-accent">feeling.</span>
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-8 md:pt-16">
            <p className="text-foreground text-lg leading-relaxed font-light">
              We believe the best design is not neutral. It takes a position, holds a point of view, and makes people feel something before they read a word.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              Forma was founded on the premise that a studio could be both deeply strategic and uncompromisingly aesthetic — that rigor and beauty are not in tension, but inseparable.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {["Brand Strategy", "Visual Identity", "Web & Digital", "Packaging & Print"].map((s) => (
                <div key={s} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group cursor-default">
                  <span className="w-4 h-px bg-border group-hover:bg-accent group-hover:w-6 transition-all duration-300" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mt-16">
          <div className="col-span-2 h-64 md:h-80 overflow-hidden bg-card">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=500&fit=crop&auto=format" alt="Forma studio interior" className="w-full h-full object-cover opacity-75" />
          </div>
          <div className="col-span-1 h-64 md:h-80 overflow-hidden bg-card">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=500&fit=crop&auto=format" alt="Design team in conversation" className="w-full h-full object-cover opacity-75" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-8 md:px-16 py-24 border-t border-border bg-card">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16" style={{ fontFamily: "'DM Mono', monospace" }}>
          Client voice
        </p>
        <div className="md:max-w-3xl">
          <blockquote
            key={activeTestimonial}
            className="text-2xl md:text-3xl font-light leading-relaxed text-foreground mb-10"
            style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
          </blockquote>
          <div>
            <p className="text-sm font-medium text-foreground">{TESTIMONIALS[activeTestimonial].author}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{TESTIMONIALS[activeTestimonial].role}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              className={`h-px transition-all duration-300 ${i === activeTestimonial ? "w-10 bg-accent" : "w-4 bg-border hover:bg-muted-foreground"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-28 border-t border-border">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-7xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to make
              <br />
              <span className="italic font-normal text-accent">something real?</span>
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              We take on a limited number of projects each year to maintain the depth our clients deserve.
            </p>
            <NavLink
              to="/contact"
              className="flex items-center justify-between bg-accent text-accent-foreground px-6 py-4 font-medium hover:bg-accent/90 transition-colors group"
            >
              <span>Begin the conversation</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </NavLink>
            <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
              hello@forma.studio
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

import { ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router";

const TEAM = [
  {
    name: "Noa Bergström",
    role: "Founding Partner, Creative Director",
    bio: "Noa founded Forma after a decade leading identity at Pentagram Berlin and Wolff Olins. She is obsessed with the point where language and image become inseparable.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&auto=format&facepad=3&faces=1",
  },
  {
    name: "Kenji Harada",
    role: "Partner, Digital & Product",
    bio: "Kenji leads product design engagements, bringing a background in human-computer interaction from Carnegie Mellon and six years at IDEO Tokyo.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Amara Diallo",
    role: "Senior Designer, Brand",
    bio: "Amara works across identity, packaging, and print. She spent three years at Base Design Brussels before joining Forma in 2022.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Tomáš Novák",
    role: "Senior Designer, Motion",
    bio: "Tomáš brings kinetics to the studio — title sequences, brand films, and interactive motion. He studied under Kyle Cooper at Art Center.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Isla McPherson",
    role: "Strategy Director",
    bio: "Isla translates research and positioning into visual briefs. Her background spans brand consultancy at Wolff Olins and in-house at Airbnb.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&auto=format",
  },
  {
    name: "Riku Saito",
    role: "Frontend Engineer",
    bio: "Riku bridges design and engineering, building the production-quality digital systems our clients actually ship. TypeScript zealot, darkroom hobbyist.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&auto=format",
  },
];

const VALUES = [
  {
    number: "01",
    title: "Position or perish",
    body: "We don't make things for everyone. The most effective design takes a clear position and commits — even when that means excluding some audiences.",
  },
  {
    number: "02",
    title: "Rigor before craft",
    body: "Beautiful work built on soft strategy falls apart. We spend real time understanding what we're solving before we pick up a pen.",
  },
  {
    number: "03",
    title: "The brief is a hypothesis",
    body: "What clients ask for and what they need are often different things. We treat every brief as a starting point for investigation.",
  },
  {
    number: "04",
    title: "Details compound",
    body: "The kerning, the paper weight, the hover state — nobody notices when they're right. Everyone notices when they're wrong.",
  },
];

const CLIENTS = [
  "Vela Spirits", "Meridian Labs", "Maison Lune", "A24 Films", "Basalt Group",
  "Halo Architecture", "Drift Coffee", "Vantage Capital", "Quarry Press", "Aurum Watches",
  "Nord Collective", "Pale Fire Productions", "Sable & Co.", "Fern Studio",
];

export default function Studio() {
  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-0 px-8 md:px-16 border-b border-border">
        <div className="grid md:grid-cols-12 items-end gap-8 pb-20">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              About us
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Small on purpose.
              <br />
              <span className="italic font-normal">Deep by design.</span>
            </h1>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="text-muted-foreground leading-relaxed">
              Forma is a studio of eight people. We keep it that way deliberately — every client gets senior attention from day one to delivery.
            </p>
          </div>
        </div>

        {/* Full-width image */}
        <div className="-mx-8 md:-mx-16 h-[60vh] relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=800&fit=crop&auto=format"
            alt="Forma studio — open floor, Berlin"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-8 left-8 md:left-16">
            <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
              Studio — Prenzlauer Berg, Berlin
            </p>
          </div>
        </div>
      </section>

      {/* Origin story */}
      <section className="px-8 md:px-16 py-24 border-b border-border">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              Origin
            </p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Founded in 2013.
              <br />
              <span className="italic font-normal">Restless since.</span>
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-col gap-6 md:pt-2">
            <p className="text-foreground text-lg leading-relaxed font-light">
              Noa Bergström started Forma in a shared workspace in Kreuzberg with a single client, a broken Risograph, and the conviction that design consultancies were too focused on deliverables and not enough on decisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Twelve years later, the studio has grown to eight people across Berlin, New York, and Tokyo — but the premise hasn't changed. We still take a limited number of projects per year. We still insist on starting every engagement with a strategic sprint before anything visual is touched. And we still believe the best work comes from long relationships, not one-off commissions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our clients span independent spirits producers and fashion houses to venture-backed software companies and cultural institutions. What they share is an appetite for work that's genuinely surprising.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-8 md:px-16 py-24 border-b border-border bg-card">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16" style={{ fontFamily: "'DM Mono', monospace" }}>
          How we work
        </p>
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {VALUES.map((v) => (
            <div key={v.number} className="bg-card p-10 flex flex-col gap-4">
              <p className="text-accent text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>{v.number}</p>
              <h3 className="text-xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-8 md:px-16 py-24 border-b border-border">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16" style={{ fontFamily: "'DM Mono', monospace" }}>
          The team
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {TEAM.map((member) => (
            <div key={member.name} className="bg-background group cursor-default">
              <div className="relative h-72 overflow-hidden bg-card">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-foreground mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>{member.name}</h3>
                <p className="text-xs text-accent mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="px-8 md:px-16 py-24 border-b border-border bg-card">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12" style={{ fontFamily: "'DM Mono', monospace" }}>
          Clients & collaborators
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-border">
          {CLIENTS.map((c) => (
            <div key={c} className="bg-card px-6 py-6 flex items-center justify-center text-center">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default leading-snug">
                {c}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-16 py-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Join the studio.
          </h2>
          <div className="flex flex-col gap-3 max-w-xs">
            <p className="text-muted-foreground text-sm leading-relaxed">
              We occasionally open positions for senior designers and strategists who want to work on fewer, better things.
            </p>
            <NavLink
              to="/contact"
              className="flex items-center gap-2 text-sm bg-accent text-accent-foreground px-5 py-3 font-medium hover:bg-accent/90 transition-colors w-fit"
            >
              Get in touch <ArrowUpRight size={14} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

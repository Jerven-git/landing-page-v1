import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const FILTERS = ["All", "Brand Identity", "Digital Product", "Art Direction", "Print & Editorial", "Motion & Film"];

const PROJECTS = [
  {
    title: "Vela Spirits",
    category: "Brand Identity",
    year: "2025",
    client: "Vela Distilleries, Barcelona",
    description: "Full brand system for an independent agave spirits producer entering the European market — wordmark, label system, and campaign identity.",
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&h=600&fit=crop&auto=format",
    size: "large",
  },
  {
    title: "Meridian OS",
    category: "Digital Product",
    year: "2025",
    client: "Meridian Labs, New York",
    description: "Product design for an AI-assisted operating environment. Navigation architecture, design system, and interactive prototypes.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&h=500&fit=crop&auto=format",
    size: "medium",
  },
  {
    title: "Maison Lune",
    category: "Art Direction",
    year: "2024",
    client: "Maison Lune, Paris",
    description: "Art direction for seasonal lookbook campaign. Photography direction, retouching brief, and editorial layout system.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&auto=format",
    size: "medium",
  },
  {
    title: "Quarry Journal",
    category: "Print & Editorial",
    year: "2024",
    client: "Quarry Press, Berlin",
    description: "Masthead redesign and full typographic system overhaul for a bi-annual arts and culture publication.",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=700&h=500&fit=crop&auto=format",
    size: "medium",
  },
  {
    title: "Halo Architecture",
    category: "Brand Identity",
    year: "2024",
    client: "Halo Studio, Tokyo",
    description: "Identity for a Tokyo-based architecture practice. Mark, stationery suite, signage system, and website.",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&h=500&fit=crop&auto=format",
    size: "medium",
  },
  {
    title: "Drift Coffee",
    category: "Brand Identity",
    year: "2024",
    client: "Drift Co., Melbourne",
    description: "Brand from scratch for a specialty roastery with retail and wholesale channels. Packaging, signage, and digital presence.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&h=500&fit=crop&auto=format",
    size: "medium",
  },
  {
    title: "Vantage Capital",
    category: "Digital Product",
    year: "2023",
    client: "Vantage, Singapore",
    description: "Investor dashboard redesign — data visualization framework, component library, and interaction design for complex financial workflows.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&h=500&fit=crop&auto=format",
    size: "medium",
  },
  {
    title: "Pale Fire — Title Sequence",
    category: "Motion & Film",
    year: "2023",
    client: "A24 Films, Los Angeles",
    description: "Opening title sequence for a feature documentary. Kinetic typography, archival photo treatment, and original sound collaboration.",
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=700&h=500&fit=crop&auto=format",
    size: "large",
  },
  {
    title: "Basalt Hotel",
    category: "Art Direction",
    year: "2023",
    client: "Basalt Group, Reykjavik",
    description: "Visual identity and photography direction for a boutique hotel collection in Iceland and the Faroe Islands.",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&h=500&fit=crop&auto=format",
    size: "medium",
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-8 md:px-16 border-b border-border">
        <div className="grid md:grid-cols-12 items-end gap-8">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              Selected projects
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Work that
              <br />
              <span className="italic font-normal">speaks first.</span>
            </h1>
          </div>
          <div className="md:col-span-5 md:pb-2">
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              A curated selection from twelve years of independent practice — brand systems, digital products, and art-directed campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="px-8 md:px-16 py-6 border-b border-border flex gap-2 flex-wrap bg-card">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`text-xs px-4 py-2 border transition-all duration-200 ${
              activeFilter === f
                ? "border-accent text-accent-foreground bg-accent"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
            style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="px-8 md:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`relative overflow-hidden group cursor-pointer bg-background ${project.size === "large" ? "md:col-span-2" : ""}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className={`relative overflow-hidden ${project.size === "large" ? "h-[55vh]" : "h-[40vh]"}`}>
                <img
                  src={project.img}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${hovered === i ? "scale-105 opacity-90" : "opacity-60"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-accent tracking-widest uppercase mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {project.category} — {project.year}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-black mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {project.title}
                    </h2>
                    <p className="text-xs text-muted-foreground mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {project.client}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{project.description}</p>
                  </div>
                  <button className="flex-shrink-0 w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center text-muted-foreground">
            No projects in this category yet.
          </div>
        )}
      </section>
    </>
  );
}

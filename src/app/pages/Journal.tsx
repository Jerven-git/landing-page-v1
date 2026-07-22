import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = ["All", "Process", "Industry", "Craft", "Opinion"];

const POSTS = [
  {
    slug: "why-briefs-fail",
    category: "Process",
    date: "14 July 2026",
    readTime: "8 min",
    title: "Why creative briefs fail — and what to write instead",
    excerpt:
      "Most briefs are written by people who know what they want but haven't yet decided what they need. The distinction is everything. After twelve years of intake briefs, we've developed a sharper format.",
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=500&fit=crop&auto=format",
    featured: true,
    author: "Isla McPherson",
  },
  {
    slug: "typography-dark-backgrounds",
    category: "Craft",
    date: "2 June 2026",
    readTime: "6 min",
    title: "The particular discipline of type on dark grounds",
    excerpt:
      "Light type on dark backgrounds behaves differently at every weight and size. Optical corrections that feel invisible on white become glaringly necessary in reverse. A working guide from our type practice.",
    img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&h=500&fit=crop&auto=format",
    featured: false,
    author: "Noa Bergström",
  },
  {
    slug: "logo-as-system",
    category: "Industry",
    date: "18 May 2026",
    readTime: "10 min",
    title: "The logo is dead. Long live the mark system.",
    excerpt:
      "Brands no longer live on letterhead and signage — they live in feeds, on screens, and at three sizes simultaneously. A fixed logomark was always the wrong tool. Here's what we use instead.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&auto=format",
    featured: false,
    author: "Noa Bergström",
  },
  {
    slug: "product-design-process",
    category: "Process",
    date: "3 April 2026",
    readTime: "12 min",
    title: "What a product design sprint actually looks like from the inside",
    excerpt:
      "The word 'sprint' implies speed. But real product design work is slower, more iterative, and less tidy than the frameworks suggest. Kenji documents our actual process across a recent engagement.",
    img: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=800&h=500&fit=crop&auto=format",
    featured: false,
    author: "Kenji Harada",
  },
  {
    slug: "print-is-not-dead",
    category: "Opinion",
    date: "19 February 2026",
    readTime: "5 min",
    title: "Print is not dead. It's just become more meaningful.",
    excerpt:
      "In a world of infinite digital content, the weight of a book matters. We've noticed clients returning to print not as nostalgia but as a deliberate statement about attention and permanence.",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=500&fit=crop&auto=format",
    featured: false,
    author: "Amara Diallo",
  },
  {
    slug: "motion-brand",
    category: "Craft",
    date: "8 January 2026",
    readTime: "7 min",
    title: "How motion became the most honest part of a brand",
    excerpt:
      "You can fake a beautiful static brand. You cannot fake a beautiful brand in motion. Animation reveals the decisions underneath — the easing, the timing, the physicality. A reflection from our motion practice.",
    img: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop&auto=format",
    featured: false,
    author: "Tomáš Novák",
  },
  {
    slug: "client-feedback-culture",
    category: "Industry",
    date: "11 November 2025",
    readTime: "9 min",
    title: "Building a feedback culture that actually improves the work",
    excerpt:
      "Bad feedback is not a client problem — it's a framing problem. When we take responsibility for how feedback is invited, the quality of what we receive changes entirely.",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop&auto=format",
    featured: false,
    author: "Isla McPherson",
  },
];

export default function Journal() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory);

  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p !== featured);

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-16 px-8 md:px-16 border-b border-border">
        <div className="grid md:grid-cols-12 items-end gap-8">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
              Writing & thinking
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Forma
              <br />
              <span className="italic font-normal">Journal.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Essays, process notes, and opinions from the studio — on craft, industry, and the work of making things people remember.
            </p>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <div className="px-8 md:px-16 py-6 border-b border-border flex gap-2 flex-wrap bg-card">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActiveCategory(c)}
            className={`text-xs px-4 py-2 border transition-all duration-200 ${
              activeCategory === c
                ? "border-accent text-accent-foreground bg-accent"
                : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
            }`}
            style={{ fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em" }}
          >
            {c}
          </button>
        ))}
      </div>

      <section className="px-8 md:px-16 py-16">
        {/* Featured post */}
        {featured && (
          <div className="grid md:grid-cols-12 gap-8 mb-16 pb-16 border-b border-border group cursor-pointer">
            <div className="md:col-span-7 relative overflow-hidden h-80 md:h-[50vh] bg-card">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="md:col-span-5 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs bg-accent text-accent-foreground px-2 py-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {featured.category}
                </span>
                <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {featured.date} — {featured.readTime} read
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-black leading-tight group-hover:text-accent transition-colors"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {featured.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">{featured.excerpt}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-muted-foreground">{featured.author}</span>
                <button className="flex items-center gap-2 text-sm text-foreground group/btn">
                  Read essay
                  <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Post grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {rest.map((post) => (
            <article key={post.slug} className="bg-background group cursor-pointer flex flex-col">
              <div className="relative h-52 overflow-hidden bg-card">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-85 transition-all duration-600"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs text-accent"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {post.readTime}
                  </span>
                </div>
                <h3
                  className="text-lg font-black leading-snug group-hover:text-accent transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">{post.author} — {post.date}</span>
                  <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-32 text-center text-muted-foreground">No posts in this category.</div>
        )}
      </section>
    </>
  );
}

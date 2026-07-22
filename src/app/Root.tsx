import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Work", to: "/work" },
  { label: "Studio", to: "/studio" },
  { label: "Services", to: "/services" },
  { label: "Journal", to: "/journal" },
  { label: "Contact", to: "/contact" },
];

export default function Root() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b transition-all duration-300 ${
          scrolled
            ? "border-border backdrop-blur-sm bg-background/90"
            : "border-transparent bg-transparent"
        }`}
      >
        <NavLink
          to="/"
          className="text-foreground tracking-[0.2em] text-sm font-medium uppercase"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Forma
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm transition-colors duration-200 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden md:flex items-center gap-1.5 text-sm bg-accent text-accent-foreground px-4 py-2 hover:bg-accent/90 transition-colors duration-200 font-medium"
          style={{ borderRadius: 0 }}
        >
          Start a project <ArrowUpRight size={14} />
        </NavLink>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-8 flex flex-col gap-6">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className="text-3xl font-light border-b border-border pb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="mt-4 flex items-center gap-2 text-sm bg-accent text-accent-foreground px-5 py-3 font-medium w-fit"
          >
            Start a project <ArrowUpRight size={14} />
          </NavLink>
        </div>
      )}

      {/* PAGE CONTENT */}
      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="px-8 md:px-16 py-10 border-t border-border bg-card">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="text-foreground tracking-[0.2em] text-sm font-medium uppercase mb-1"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Forma
            </p>
            <p className="text-xs text-muted-foreground">
              Independent creative studio. Berlin — New York — Tokyo.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </NavLink>
            ))}
          </div>

          <p
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            © 2026 Forma Studio
          </p>
        </div>
      </footer>
    </div>
  );
}

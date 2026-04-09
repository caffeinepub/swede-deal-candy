import { Link, useLocation } from "@tanstack/react-router";
import { LayoutDashboard, ShoppingBag } from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <Link
              to="/"
              className="flex items-center gap-2 group transition-smooth"
              data-ocid="nav-brand"
            >
              <span className="text-2xl select-none">🍬</span>
              <span className="font-display font-black text-xl text-primary tracking-tight group-hover:text-secondary transition-colors duration-200">
                Sweet Deal Candy
              </span>
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-1" data-ocid="nav-links">
              <Link
                to="/"
                className={[
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-smooth",
                  !isAdmin
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                ].join(" ")}
                data-ocid="nav-home"
              >
                <ShoppingBag size={15} />
                Shop
              </Link>
              <Link
                to="/admin"
                className={[
                  "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-smooth",
                  isAdmin
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                ].join(" ")}
                data-ocid="nav-admin"
              >
                <LayoutDashboard size={15} />
                Admin
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-background">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-lg select-none">🍬</span>
              <span className="font-display font-bold text-primary text-sm">
                Sweet Deal Candy
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              © {year}.{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors duration-200"
              >
                Built with love using caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

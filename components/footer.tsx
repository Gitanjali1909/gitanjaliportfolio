"use client"

import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold glow-text mb-2">REY.</h3>
            <p className="text-muted-foreground text-sm">Developer & Designer creating digital experiences</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://github.com" className="hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-primary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {currentYear} Revanshu. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

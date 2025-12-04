"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold glow-text">
            GITANJALI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex gap-3 items-center">
            <a
              href="/Gitanjali-Resume.pdf"
              download="Gitanjali-Resume.pdf"
              className="rounded-lg font-bold text-sm transition-all duration-300 px-6 py-3 bg-primary text-black hover:shadow-lg hover:shadow-primary/50"
            >
              RESUME
            </a>
            <Link
              href="#contact"
              className="rounded-lg font-bold text-sm transition-all duration-300 px-6 py-3 bg-secondary text-white hover:shadow-lg hover:shadow-secondary/50"
            >
              CONTACT ME
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-foreground transition-transform ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span className={`h-0.5 w-full bg-foreground transition-opacity ${isOpen ? "opacity-0" : ""}`} />
              <span
                className={`h-0.5 w-full bg-foreground transition-transform ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors ${
                  pathname === link.href ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Gitanjali-Resume.pdf"
              download="Gitanjali-Resume.pdf"
              className="rounded-lg font-bold text-sm transition-all duration-300 px-6 py-3 bg-primary text-black hover:shadow-lg hover:shadow-primary/50 text-center"
            >
              DOWNLOAD RESUME
            </a>
            <Link
              href="#contact"
              className="rounded-lg font-bold text-sm transition-all duration-300 px-6 py-3 bg-secondary text-white hover:shadow-lg hover:shadow-secondary/50"
              onClick={() => setIsOpen(false)}
            >
              CONTACT ME
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

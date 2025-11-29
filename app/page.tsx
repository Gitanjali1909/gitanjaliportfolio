"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="tech-grid relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-secondary text-lg mb-2">I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                  <span className="glow-text">GITANJALI</span>
                </h1>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground">
                  FRONTEND DEVELOPER
                  <br />& DATA ANALYTICS
                </h2>
              </div>

              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                I build smooth, fast, and clean interfaces with a mix of frontend skills and data brainpower. 
  Turning ideas into actual, usable products is kinda my thing.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="rounded-lg font-bold text-sm transition-all duration-300 px-6 py-3 bg-secondary text-white hover:shadow-lg hover:shadow-secondary/50 text-center"
                >
                  About Me
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-lg font-bold text-sm transition-all duration-300 px-6 py-3 bg-primary text-black hover:shadow-lg hover:shadow-primary/50 text-center"
                >
                  Portfolio
                </Link>
                <a
                  href="/Gitanjali-Resume.pdf"
                  download="Gitanjali-Resume.pdf"
                  className="rounded-lg font-bold text-sm transition-all duration-300 px-6 py-3 border-2 border-primary text-primary hover:bg-primary/10 text-center"
                >
                  Get Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-4">
                <a
                  href="https://github.com/gitanjali1909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors text-sm font-semibold"
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/gitanjalihihi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors text-sm font-semibold"
                >
                  Twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/gitanjali-soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-secondary transition-colors text-sm font-semibold"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right - Avatar */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              <div className="relative w-80 h-96 flex items-center justify-center">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-2xl" />

                {/* Avatar Image */}
                <div className="relative z-10 w-72 h-80 bg-gradient-to-br from-secondary to-primary/30 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl">
                  <Image
                    src="/phool.jpg"
                    alt="Gitanjali"
                    width={288}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg blur-xl animate-bounce"
                  style={{ animationDelay: "0s" }}
                />
                <div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </main>
  )
}

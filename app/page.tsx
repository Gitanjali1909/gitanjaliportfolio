"use client"

import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-24 pb-10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-3">
                <p className="text-muted-foreground text-xs sm:text-sm font-semibold tracking-wide">
                  I'm
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  GITANJALI
                </h1>

                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground leading-tight">
                  Frontend Developer & Data Analyst
                </h2>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
                I build interfaces that look clean, feel smooth, and actually work the way users expect.
                I mix frontend dev with data intuition so everything I ship isn't just pretty — it's smart.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4 w-full sm:w-auto">
                <Link
                  href="/about"
                  className="rounded-lg font-semibold text-sm transition-all duration-300 px-5 py-3 bg-foreground text-background hover:shadow-sm hover:scale-[1.03] text-center"
                >
                  About Me
                </Link>
                <Link
                  href="/projects"
                  className="rounded-lg font-semibold text-sm transition-all duration-300 px-5 py-3 border border-foreground text-foreground hover:bg-foreground/5 hover:scale-[1.03] text-center"
                >
                  Projects
                </Link>
                <a
                  href="/Gitanjali-Resume.pdf"
                  download="Gitanjali-Resume.pdf"
                  className="rounded-lg font-semibold text-sm transition-all duration-300 px-5 py-3 text-muted-foreground border border-border hover:border-foreground/30 hover:text-foreground hover:scale-[1.03] text-center"
                >
                  Get Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-5 sm:gap-6 pt-1 sm:pt-3 flex-wrap">
                <a
                  href="https://github.com/gitanjali1909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  GitHub
                </a>

                <a
                  href="https://x.com/gitanjalihihi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  Twitter
                </a>

                <a
                  href="https://www.linkedin.com/in/gitanjali-soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Right - Avatar */}
            <div className="relative h-72 sm:h-80 md:h-96 lg:h-full flex items-center justify-center mt-4 sm:mt-0">
              <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96">
                <div className="relative z-10 w-full h-full bg-muted rounded-2xl overflow-hidden flex items-center justify-center shadow-sm border border-border">
                  <Image
                    src="/phool.jpg"
                    alt="Gitanjali"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  )
}

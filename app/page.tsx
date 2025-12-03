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
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-muted-foreground text-sm font-semibold tracking-wide">I'm</p>
                <h1 className="text-6xl lg:text-7xl font-bold tracking-tighter">GITANJALI</h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  Frontend Developer & Data Analytics
                </h2>
              </div>

              <p className="text-muted-foreground text-base max-w-md leading-relaxed">
                I build interfaces that look clean, feel smooth, and actually work the way users expect.
                I mix frontend dev with data intuition so everything I ship isn't just pretty — it's smart.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href="/about"
                  className="rounded-lg font-semibold text-sm transition-all duration-300 px-6 py-3 bg-foreground text-background hover:shadow-sm hover:scale-105 text-center"
                >
                  About Me
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-lg font-semibold text-sm transition-all duration-300 px-6 py-3 border border-foreground text-foreground hover:bg-foreground/5 hover:scale-105 text-center"
                >
                  Portfolio
                </Link>
                <a
                  href="/Gitanjali-Resume.pdf"
                  download="Gitanjali-Resume.pdf"
                  className="rounded-lg font-semibold text-sm transition-all duration-300 px-6 py-3 text-muted-foreground border border-border hover:border-foreground/30 hover:text-foreground hover:scale-105 text-center"
                >
                  Get Resume
                </a>
              </div>

              {/* Social + Coding Profiles */}
              <div className="flex gap-6 pt-2 flex-wrap">
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

                {/* Subtle LeetCode Link */}
                <a
                  href="https://leetcode.com/u/Gitanjalisoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  LeetCode
                </a>

                {/* Subtle Kaggle Link */}
                <a
                  href="https://www.kaggle.com/gitanjalisoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
                >
                  Kaggle
                </a>
              </div>
            </div>

            {/* Right - Avatar */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              <div className="relative w-80 h-96">
                <div className="relative z-10 w-72 h-80 bg-muted rounded-2xl overflow-hidden flex items-center justify-center shadow-sm border border-border">
                  <Image
                    src="/phool.jpg"
                    alt="Gitanjali"
                    width={288}
                    height={320}
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

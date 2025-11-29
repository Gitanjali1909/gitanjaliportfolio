"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function About() {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    tools: ["Git", "VS Code", "Vercel"],
  }

  const experience = [
    {
      title: "Senior Developer",
      company: "Tech Innovations Co.",
      period: "2022 - Present",
      description: "Leading frontend development and mentoring junior developers",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Built scalable web applications and optimized performance",
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description: "Started my journey in web development and design",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* About Hero */}
      <section className="tech-grid relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              <span className="glow-text">About Me</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm a passionate developer and designer who loves creating beautiful, functional digital experiences.
            </p>
          </div>

          {/* Main About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Who I Am</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm Gitanjali, a creative developer and designer based in India with a passion for building innovative
                digital solutions. With over 5 years of experience in web development, I've worked with startups and
                established companies to bring their ideas to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech started with a curiosity about how things work. Over time, I've developed a deep
                understanding of both frontend and backend technologies, combined with a strong eye for design and user
                experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
                or mentoring aspiring developers. I believe in continuous learning and pushing the boundaries of what's
                possible on the web.
              </p>
            </div>

            <div className="relative">
              <div className="relative w-full h-96 bg-gradient-to-br from-secondary to-primary/30 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?key=about"
                  alt="About Gitanjali"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="glow-text">My Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-secondary transition-colors">
              <h3 className="text-xl font-bold text-secondary mb-6">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-secondary transition-colors">
              <h3 className="text-xl font-bold text-secondary mb-6">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-card border border-border rounded-xl p-8 hover:border-secondary transition-colors">
              <h3 className="text-xl font-bold text-secondary mb-6">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="glow-text">Experience</span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-xl p-8 hover:border-secondary transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-secondary font-semibold">{exp.company}</p>
                  </div>
                  <p className="text-muted-foreground mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

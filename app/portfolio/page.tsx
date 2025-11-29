"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Full-stack e-commerce solution with payment integration",
      image: "/ecommerce-dashboard.png",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "AI Chat Application",
      category: "web",
      description: "Real-time chat app with AI-powered responses",
      image: "/ai-chat-interface.png",
      tags: ["Next.js", "WebSocket", "Python", "OpenAI"],
      link: "#",
    },
    {
      id: 3,
      title: "Design System",
      category: "design",
      description: "Comprehensive component library and design system",
      image: "/design-system-components.png",
      tags: ["Figma", "React", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 4,
      title: "Mobile App - Task Manager",
      category: "mobile",
      description: "Cross-platform task management application",
      image: "/mobile-task-manager-app.jpg",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
    {
      id: 5,
      title: "Dashboard Analytics",
      category: "web",
      description: "Real-time analytics dashboard with data visualization",
      image: "/analytics-dashboard-charts.png",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 6,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete branding solution for startup",
      image: "/brand-identity-logo-design.jpg",
      tags: ["Figma", "Branding", "UI/UX"],
      link: "#",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "design", label: "Design" },
    { id: "mobile", label: "Mobile" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Portfolio Hero */}
      <section className="tech-grid relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              <span className="glow-text">My Work</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in development and design.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-black shadow-lg shadow-primary/50"
                    : "bg-card text-foreground border border-border hover:border-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-secondary transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 group-hover:to-background/70 transition-colors" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    View Project
                    <span>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

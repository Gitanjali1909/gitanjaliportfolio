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
      title: "Sales Prediction Model",
      category: "data",
      description: "Machine learning model for predicting sales trends",
      image: "/analytics-dashboard-charts.png",
      tags: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      link: "#",
    },
    {
      id: 4,
      title: "Mobile App - Task Manager",
      category: "web",
      description: "Cross-platform task management application",
      image: "/mobile-task-manager-app.jpg",
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
    },
    {
      id: 5,
      title: "Customer Analytics Dashboard",
      category: "data",
      description: "Advanced data visualization for customer insights",
      image: "/analytics-dashboard-charts.png",
      tags: ["Python", "Plotly", "SQL", "Apache Spark"],
      link: "#",
    },
    {
      id: 6,
      title: "Real-time Analytics Platform",
      category: "web",
      description: "Real-time analytics dashboard with data visualization",
      image: "/analytics-dashboard-charts.png",
      tags: ["React", "D3.js", "Node.js", "MongoDB"],
      link: "#",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "data", label: "Data Analytics" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Portfolio Hero */}
      <section className="tech-grid relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Selected <span className="gradient-text">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects showcasing my expertise in full-stack development and data science.
            </p>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-3 font-semibold transition-all whitespace-nowrap text-sm uppercase tracking-wider rounded-full ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/50"
                    : "border border-primary/30 text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                className="group overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col h-full"
                style={{
                  border: `1px solid rgba(59, 130, 246, 0.2)`,
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)",
                }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-card/50">
                  <Image
                    src={project.image || "/placeholder.svg?height=300&width=400&query=project"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white text-xs font-bold rounded-full">
                      {project.category === "data" ? "Data" : "Web"}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 p-6 flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all"
                        style={{
                          background: "rgba(59, 130, 246, 0.1)",
                          color: "rgb(59, 130, 246)",
                          border: "1px solid rgba(59, 130, 246, 0.3)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center gap-2 text-blue-500 font-semibold group-hover:gap-3 transition-all w-fit mt-4 text-sm">
                    View Project
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
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

"use client"

import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { useState } from "react"

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const projects = [
    {
      id: 1,
      title: "SkillSync – AI Quiz Platform",
      category: "web",
      description: "Level-based quiz app with real-time AI support, smooth animations, and fully responsive UI.",
      image: "/skillsync.png",
      tags: ["Next.js", "Zustand", "Tailwind", "Framer Motion", "OpenRouter API"],
      link: "https://skill-sync--eight.vercel.app/",
    },
    {
      id: 2,
      title: "Petrol Pump Ratings Dashboard",
      category: "data",
      description: "Interactive dashboard with geo-maps, filters, review submissions, and rating analysis.",
      image: "/petrol.jpg",
      tags: ["Python", "Streamlit", "Pandas", "Geo Maps"],
      link: "https://github.com/Gitanjali1909/Petrol-station",
    },
    {
      id: 3,
      title: "NextRead – Book Recommendation Engine",
      category: "data",
      description: "Recommender system using TF-IDF + Cosine Similarity with clean, interactive output.",
      image: "/nextread.jpg",
      tags: ["Python", "TF-IDF", "Cosine Similarity", "Pandas"],
      link: "https://github.com/Gitanjali1909/Book-Recommendation-system",
    },
    {
      id: 4,
      title: "Live Translate – Real-Time Language Translator",
      category: "web",
      description: "Speech-to-text, instant translation, dark UI, and smooth animations.",
      image: "/live-translate.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      link: "https://live-translation-blond.vercel.app/",
    },
    {
      id: 5,
      title: "Music Streaming Analytics Dashboard",
      category: "data",
      description: "Analytics platform showing user patterns, playlists, trends & listening behavior.",
      image: "/music.png",
      tags: ["Python", "Streamlit", "PostgreSQL", "Pandas"],
      link: "https://github.com/Gitanjali1909/music-streaming",
    },
    {
      id: 6,
      title: "Social Media Trends Analyzer",
      category: "data",
      description: "Trend tracker with hashtag patterns, visualizations, heatmaps, and engagement insights.",
      image: "/trends.jpg",
      tags: ["Python", "Pandas", "Seaborn", "WordCloud"],
      link: "https://github.com/Gitanjali1909/Social-Media-Trends-Analyzer",
    },
    {
      id: 7,
      title: "Student Stress Analyzer",
      category: "data",
      description: "EDA project analyzing stress factors using correlations and visualization patterns.",
      image: "/stress.jpg",
      tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      link: "https://github.com/Gitanjali1909/Student-Stress-Analyzer",
    },
    {
      id: 8,
      title: "Plan It Grand – Event Manager Finder",
      category: "web",
      description: "React-based platform to explore and connect with event managers effortlessly.",
      image: "/plan.jpg",
      tags: ["React.js", "Tailwind CSS"],
      link: "https://gilded-raindrop-09e1a8.netlify.app/",
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

      <section className="relative pt-20 pb-10 sm:pt-32 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 sm:mb-16">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-foreground">
              Work
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A showcase of my work in frontend development, interactive UI, and data-driven solutions.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex gap-2 overflow-x-auto pb-3 sm:pb-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium transition-all whitespace-nowrap rounded-lg ${
                  selectedCategory === cat.id
                    ? "bg-foreground text-background"
                    : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="pb-10 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full transition-all duration-300 hover:translate-y-[-3px]"
              >
                <div className="border border-border rounded-xl overflow-hidden flex flex-col h-full hover:border-foreground/50 transition-colors">
                  
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex-1 p-5 sm:p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-muted-foreground transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded bg-muted text-muted-foreground group-hover:bg-foreground group-hover:text-background transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 text-foreground text-sm font-medium group-hover:gap-2 transition-all w-fit">
                      View →
                    </div>

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

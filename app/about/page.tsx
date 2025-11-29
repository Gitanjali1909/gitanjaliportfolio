"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function About() {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", icon: "💻" },
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "HTML/CSS", icon: "🌐" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Python", icon: "🐍" },
        { name: "PostgreSQL", icon: "🗄️" },
        { name: "MongoDB", icon: "🍃" },
        { name: "REST APIs", icon: "🔌" },
      ],
    },
    {
      category: "Development Tools",
      skills: [
        { name: "Git", icon: "📦" },
        { name: "GitHub", icon: "🐙" },
        { name: "Vercel", icon: "⚪" },
        { name: "Docker", icon: "🐳" },
        { name: "VS Code", icon: "💜" },
      ],
    },
    {
      category: "Design & CMS",
      skills: [
        { name: "Figma", icon: "🎭" },
        { name: "Photoshop", icon: "🖼️" },
        { name: "WordPress", icon: "📝" },
      ],
    },
  ]

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/Revanshu-Resume.pdf"
    link.download = "Revanshu-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGithubClick = () => {
    window.open("https://github.com/Rey004", "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="tech-grid relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left Side - Profile Section */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 via-pink-500 to-white rounded-2xl p-1 shadow-2xl">
                  <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-blue-400 to-pink-400 text-white">
                    GS
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">
                  👨‍💻
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 via-pink-500 to-white bg-clip-text text-transparent mb-2">
                  Gitanjali
                </h1>
                <p className="text-xl text-muted-foreground font-semibold">Developer, Designer, Techgeek</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <button
                  onClick={handleResumeDownload}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  📥 Download Resume
                </button>
                <button
                  onClick={handleGithubClick}
                  className="px-8 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  🐙 GitHub
                </button>
              </div>
            </div>

            {/* Right Side - Bio Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">About Me</h2>
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <strong>Gitanjali</strong> — a <strong>creative</strong> and <strong>curious</strong> mind who
                  enjoys working on side projects, fun ideas, and tools that actually <strong>solve problems</strong>.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  I like building things that <strong>look good</strong>, <strong>feel smooth</strong>, and{" "}
                  <strong>make sense</strong>. I care about <strong>design</strong>, <strong>clean code</strong>, and
                  making the most of every <strong>experience</strong>.
                </p>
              </div>

              {/* Interests */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">In my free time, I enjoy:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { emoji: "⚽", text: "Football" },
                    { emoji: "✈️", text: "Traveling" },
                    { emoji: "🎮", text: "Gaming" },
                    { emoji: "🎧", text: "Music" },
                    { emoji: "🎬", text: "Movies" },
                    { emoji: "🏋️", text: "Fitness" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-base text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      <span className="text-2xl">{item.emoji}</span>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-20 bg-gradient-to-r from-blue-500 via-pink-500 to-white bg-clip-text text-transparent text-center">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {skillsData.map((category, idx) => (
              <div
                key={idx}
                className="glowing-card p-8 space-y-6"
                style={{
                  border: `1px solid rgba(59, 130, 246, 0.2)`,
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)",
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full" />
                  <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="group p-4 bg-background/50 border border-blue-500/20 rounded-lg flex flex-col items-center gap-3 hover:border-pink-500/50 hover:bg-background/80 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-3xl group-hover:scale-125 transition-transform">{skill.icon}</span>
                      <span className="text-xs font-semibold text-center text-muted-foreground group-hover:text-blue-500 transition-colors line-clamp-2">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"
import { Navigation } from "@/components/navigation"

export default function About() {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Python", "SQL", "JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand", "HTML/CSS"],
    },
    {
      category: "Data & Visualization",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Streamlit"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Netlify", "Vercel", "Jupyter Notebook"],
    },
  ]

  const workExperience = [
    {
      company: "Pennyflo",
      role: "Frontend Engineer Intern",
      period: "Oct 2024 – Mar 2025",
      achievements: [
        "Developed and deployed the company website from Figma designs using Next.js, TypeScript, and Tailwind CSS.",
        "Built interactive dashboards with charts and graphs, improving data accessibility for users.",
        "Implemented smooth, modern animations with Framer Motion to enhance UX.",
        "Resolved 50+ frontend bugs and boosted performance by 15%, reducing issue reports by 40%.",
        "Created dynamic, user-friendly forms using React Hook Form, lowering submission errors by 30%.",
      ],
    },
    {
      company: "Aimed Labs",
      role: "React Developer Intern",
      period: "June 2023 – Sept 2023",
      achievements: [
        "Developed responsive user interfaces using React.js, JavaScript, HTML, and CSS.",
        "Helped achieve a 30% increase in user engagement and 20% faster load times.",
        "Collaborated with UI/UX and backend teams to speed up delivery by 25%.",
        "Debugged critical frontend issues, improving performance by 15% and reducing bug reports by 40%.",
        "Used React Hook Form to enhance validation and cut form errors by 30%.",
        "Explored Flutter to understand mobile development workflows.",
      ],
    },
  ]

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/Gitanjali-Soni-Resume.pdf"
    link.download = "Gitanjali-Soni-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleGithubClick = () => {
    window.open("https://github.com/Gitanjali1909", "_blank")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 border-b border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Profile */}
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <div className="relative">
                <div className="w-40 h-40 rounded-lg overflow-hidden bg-muted border border-border/40">
                  <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/phool.jpg')" }} />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">Gitanjali</h1>
                <p className="text-lg text-muted-foreground font-medium">Frontend Developer</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <button
                  onClick={handleResumeDownload}
                  className="px-6 py-2.5 bg-foreground text-background font-medium rounded-md hover:bg-foreground/90 transition-colors"
                >
                  Resume
                </button>
                <button
                  onClick={handleGithubClick}
                  className="px-6 py-2.5 border border-border/50 text-foreground font-medium rounded-md hover:bg-muted transition-colors"
                >
                  GitHub
                </button>
              </div>
            </div>

            {/* About */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-foreground">About</h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Gitanjali</span> — a frontend developer who loves
                building clean, smooth, and functional interfaces that solve real problems.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I mix modern frontend stacks with data-driven thinking, creating experiences that look good, feel right,
                and perform beautifully.
              </p>
              <div className="space-y-4 pt-4">
                <h3 className="font-medium text-foreground">Interests</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {["Reading", "Writing", "Music", "Aesthetic Design", "Side Projects", "Cafe Hunting"].map(
                    (item, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-24 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-2">Experience</h2>
            <p className="text-muted-foreground">A timeline of my professional work.</p>
          </div>

          <div className="space-y-12">
            {workExperience.map((job, idx) => (
              <div
                key={idx}
                className="group pb-12 border-b border-border/40 last:border-b-0 last:pb-0 hover:bg-muted/30 -mx-4 px-4 py-4 rounded-lg transition-colors"
              >
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{job.company}</h3>
                    <span className="text-sm text-muted-foreground">{job.role}</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{job.period}</p>
                </div>

                <ul className="space-y-2">
                  {job.achievements.map((achievement, aidx) => (
                    <li key={aidx} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                      <span className="text-muted-foreground/50 mt-1 flex-shrink-0">→</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-2">Skills</h2>
            <p className="text-muted-foreground">Technologies and tools I work with.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {skillsData.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="font-semibold text-foreground text-sm uppercase tracking-wider">{category.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, sidx) => (
                    <div
                      key={sidx}
                      className="px-3 py-2 rounded-md bg-muted/40 border border-border/40 text-sm text-muted-foreground hover:border-border/80 hover:bg-muted/60 transition-all cursor-default"
                    >
                      {skill}
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

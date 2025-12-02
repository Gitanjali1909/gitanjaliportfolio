"use client"

import type React from "react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactMethods = [
    {
      icon: "✉️",
      title: "Email",
      value: "Gitanjalisoni2003@gmail.com",
      link: "mailto:Gitanjalisoni2003@gmail.com",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/gitanjali-soni",
      link: "https://www.linkedin.com/in/gitanjali-soni",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/gitanjali1909",
      link: "https://github.com/gitanjali1909",
    },
  ]

  return (
    <section id="contact" className="tech-grid relative py-20 border-t border-border overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="glow-text">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got something cool in mind? Hit me up. I love building clean, modern stuff and I’m always down to 
            collaborate on projects that actually make sense.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                  placeholder="Let's Build Something"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                  placeholder="Drop the details—I'm listening."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg font-bold text-sm transition-all duration-300 px-6 py-3 bg-primary text-black hover:shadow-lg hover:shadow-primary/50"
              >
                {isSubmitted ? "Message Sent! ✓" : "Send Message"}
              </button>

              {isSubmitted && (
                <p className="text-center text-primary text-sm font-semibold">
                  Thank you! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Methods */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you’re planning a project or just vibing with my work, reach out. I’m always open to new ideas, 
                freelance gigs, internships, collabs—anything that’s actually fun and meaningful.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <a
                  key={idx}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-border rounded-lg p-4 hover:border-secondary transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <h4 className="text-foreground font-semibold group-hover:text-secondary transition-colors">
                        {method.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">{method.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://x.com/gitanjalihihi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-colors text-lg"
                >
                  𝕏
                </a>
                <a
                  href="https://github.com/gitanjali1909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-colors text-lg"
                >
                  🐙
                </a>
                <a
                  href="https://www.linkedin.com/in/gitanjali-soni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-colors text-lg"
                >
                  💼
                </a>
                <a
                  href="https://medium.com/@gitanjalisoni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-secondary hover:bg-secondary/10 transition-colors text-lg"
                >
                  ✍️
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Akuna E-commerce Skinkare",
    role: "Front End Developer",
    period: "Aug 2025 - Dec 2025",
    description: "Architected a high-performance, component-based front-end using React and TypeScript for a local skincare online store. Implemented dynamic product discovery, cart management, and a multi-step checkout process.",
    tags: ["React", "TypeScript", "REST API", "E-commerce"],
    link: "https://github.com/nadznaf" 
  },
  {
    title: "LSP UGM Website Portal",
    role: "Front End Developer",
    period: "Jan 2025 - July 2025",
    description: "Refactored and enhanced the existing monolithic front-end codebase to improve maintainability. Revitalized the UI with a modern design and integrated REST APIs for dynamic data display.",
    tags: ["Laravel Blade", "TailwindCSS", "REST API"],
    link: "https://github.com/nadznaf"
  },
  {
    title: "ASSETS Student Association System",
    role: "Front End Developer",
    period: "Aug 2024 - Jan 2025",
    description: "Developed and maintained the official information system for the ASSETS student association. Engineered responsive interfaces for member management, event broadcasting, and article publication.",
    tags: ["Laravel", "Blade", "Monolithic"],
    link: "https://github.com/nadznaf"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-secondary/5 dark:bg-black/20">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-primary dark:text-secondary">Projects</span></h2>
          <p className="text-muted-foreground text-center max-w-2xl">
            Here are some of the key projects I've worked on, ranging from organizational systems to e-commerce platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} hoverEffect className="flex flex-col h-full">
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-xl font-bold line-clamp-2">{project.title}</h3>
                </div>
                
                <p className="text-sm font-semibold text-secondary mb-2">{project.role}</p>
                <p className="text-xs text-muted-foreground mb-4">{project.period}</p>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary dark:text-secondary-foreground dark:bg-secondary/20 hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href={project.link} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

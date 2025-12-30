"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Code2, Users, Award, Database, Layout, GitBranch } from "lucide-react";

const hardSkills = [
  "Javascript", "Typescript", "Python", "SQL", "PHP", 
  "React", "Next.js", "Laravel", "Git", "Figma"
];

const softSkills = [
  "Team Management", "Mentorship", "Collaboration", 
  "Communication", "Public Speaking", "Adaptive", 
  "Growth Mindset", "Fast Learner"
];

const certifications = [
  {
    name: "Huawei ICT Academy - HCIA-AI V3.5",
    year: "2025",
    issuer: "Huawei"
  },
  {
    name: "Oracle Database Programming with SQL",
    year: "2024",
    issuer: "Oracle Academy"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & <span className="text-secondary">Certifications</span></h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Hard Skills */}
          <GlassCard>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg text-primary dark:text-secondary">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-bold">Hard Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {hardSkills.map(skill => (
                <Badge key={skill} className="text-base py-1 px-3 bg-primary text-primary-foreground dark:bg-white dark:text-primary-foreground hover:bg-primary/90">
                  {skill}
                </Badge>
              ))}
            </div>
          </GlassCard>

          {/* Soft Skills */}
          <GlassCard>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/20 rounded-lg text-secondary dark:text-secondary-foreground">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold">Soft Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-base py-1 px-3 bg-secondary/20 text-foreground hover:bg-secondary/30">
                  {skill}
                </Badge>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <GlassCard key={index} hoverEffect className="flex items-center gap-4">
                 <div className="p-3 bg-yellow-500/10 rounded-full text-yellow-600 dark:text-yellow-400">
                    <Award size={28} />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg leading-tight">{cert.name}</h4>
                   <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                 </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

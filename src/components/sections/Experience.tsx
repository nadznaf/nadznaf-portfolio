"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

const workExperience = [
  {
    role: "Assistant Lecturer - Proyek Aplikasi Dasar",
    company: "Universitas Gadjah Mada",
    period: "July 2025 - December 2025",
    description: [
      "Achieved a 90% project completion rate by mentoring 3 student developer teams through the full project lifecycle.",
      "Evaluated and provided continuous feedback on 3 student projects, ensuring consistent progress."
    ]
  },
  {
    role: "Assistant Lecturer - Praktikum Pemrograman Web",
    company: "Universitas Gadjah Mada",
    period: "Jan 2025 - July 2025",
    description: [
      "Mentored 24+ Software Engineering students in mastering 5 core web technologies (HTML, CSS, JS, Bootstrap, Figma).",
      "Managed grading for 24+ students, correcting over 100+ practicum reports.",
      "Pioneered a gamification approach by implementing interactive quizzes to increase engagement."
    ]
  }
];

const orgExperience = [
  {
    role: "Second Vice President",
    org: "KOMATIK UGM (Komunitas Mahasiswa TIK)",
    period: "Nov 2024 - Nov 2025",
    description: [
      "Managed 3 Managerial divisions (Public Relations, Media & Info, Secretariat) with 25+ members.",
      "Acted as primary strategic partner to the Leader for the 150+ member community."
    ]
  },
  {
    role: "Vice Leader of Public Relation Division",
    org: "KMTEDI UGM",
    period: "Oct 2023 - Dec 2025",
    description: [
      "Successfully executed 8+ work programs and managed a team of 10+ staff.",
      "Oversaw key administrative and financial processes for the division."
    ]
  },
  {
    role: "Staff of Human Resource Development Division",
    org: "ASSETS UGM",
    period: "Mar 2024 - Jan 2026",
    description: [
      "Contributed to the execution of 7+ work programs for student development.",
      "Co-managed orientation for 100+ new students.",
      "Acted as Master of Ceremonies (MC) for multiple events."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
       {/* Decorative */}
       <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold mb-12 text-center">My <span className="text-secondary">Experience</span></h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"/> Work Experience
            </h3>
            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <GlassCard key={index} hoverEffect className="border-l-4 border-l-primary">
                  <h4 className="text-xl font-bold">{job.role}</h4>
                  <div className="flex justify-between items-center mt-2 mb-4 text-sm">
                    <span className="font-semibold text-primary dark:text-secondary">{job.company}</span>
                    <span className="text-muted-foreground bg-secondary/10 px-2 py-1 rounded">{job.period}</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground text-sm">
                    {job.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Organizational Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-8 bg-secondary rounded-full"/> Organization
            </h3>
             <div className="space-y-6">
              {orgExperience.map((org, index) => (
                <GlassCard key={index} hoverEffect className="border-l-4 border-l-secondary">
                  <h4 className="text-xl font-bold">{org.role}</h4>
                   <div className="flex justify-between items-center mt-2 mb-4 text-sm">
                    <span className="font-semibold text-primary dark:text-secondary">{org.org}</span>
                    <span className="text-muted-foreground bg-secondary/10 px-2 py-1 rounded">{org.period}</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-muted-foreground text-sm">
                    {org.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

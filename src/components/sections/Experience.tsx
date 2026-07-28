"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

const workExperience = [
  {
    role: "Full Stack Developer Intern - Purchasing Management System",
    company: "PT. Tempopress International Delivery",
    period: "February 2026 - June 2026",
    description: [
      "Engineered a comprehensive Purchasing Management System using React and Golang, facilitating seamless procurement workflows between the internal purchasing department and external vendors.",
      "Enhanced the internal HR Information System (HRIS) and synchronized its backend with a newly developed public-facing Career Portal, streamlining the end-to-end recruitment pipeline.",
      "Spearheaded the UI/UX design processes across all three enterprise applications using Figma, successfully translating complex business requirements into intuitive interfaces.",
      "Delivered a 100% completion rate across enterprise-level applications, effectively managing both the visual architecture and the underlying technical implementation."
    ]
  },
  {
    role: "Assistant Lecturer - Proyek Aplikasi Dasar",
    company: "Universitas Gadjah Mada",
    period: "July 2025 - December 2025",
    description: [
      "Mentored 3 student developer teams through the full Software Development Life Cycle (SDLC), resulting in a 90% project completion rate.",
      "Conducted code reviews and evaluated project milestones, providing continuous technical feedback to ensure architecture and code quality standards were met."
    ]
  },
  {
    role: "Assistant Lecturer - Praktikum Pemrograman Web",
    company: "Universitas Gadjah Mada",
    period: "January 2025 - July 2025",
    description: [
      "Mentored 24+ Software Engineering students in core web technologies (HTML, CSS, JavaScript, Bootstrap, Figma).",
      "Managed the full grading lifecycle for 24+ students, correcting and providing detailed feedback on over 100+ practicum reports.",
      "Pioneered a gamification approach via interactive quizzes, significantly boosting student engagement."
    ]
  }
];

const orgExperience = [
  {
    role: "Second Vice President",
    org: "KOMATIK UGM (Komunitas Mahasiswa TIK)",
    period: "Nov 2024 - Nov 2025",
    description: [
      "Directed 3 managerial divisions (Public Relations, Media & Info, Secretariat) comprising 25+ staff members, optimizing internal communication and administrative workflows.",
      "Acted as a strategic partner to the executive leadership, overseeing daily operations and cross-functional decision-making for a 150+ member IT community to drive participation in national competitions (GEMASTIK)."
    ]
  },
  {
    role: "Vice Leader of Public Relation Division",
    org: "KMTEDI UGM (Keluarga Mahasiswa Teknik Elektro dan Informatika UGM)",
    period: "Oct 2023 - Dec 2025",
    description: [
      "Mentored and directed internal workflows for a 10+ member division team, ensuring highly efficient execution of public relations and engagement strategies.",
      "Led the end-to-end execution of 8+ work programs, taking full ownership of project timelines, resource allocation, and financial budget accountability."
    ]
  },
  {
    role: "Staff of Human Resource Development Division",
    org: "ASSETS UGM (Association of Software Engineering Technology Students UGM)",
    period: "Mar 2024 - Jan 2026",
    description: [
      "Co-managed key student development initiatives, including the official study program orientation for 100+ new students and academic preparation sessions (\"Belajar Bareng\").",
      "Oversaw the end-to-end production and distribution of official association apparel for 145+ members, managing vendor relations and logistical operations.",
      "Facilitated multiple association events as Master of Ceremonies, effectively managing event rundowns and engaging audiences of 50-100+ participants."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
       {/* Decorative */}
       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
       <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold mb-16 text-center">My <span className="text-secondary">Experience</span></h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full"/>
              <span>Work Experience</span>
            </h3>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <GlassCard key={index} hoverEffect className="border-l-4 border-l-primary p-7">
                  <h4 className="text-lg font-bold leading-snug">{job.role}</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 mb-5 gap-2 text-sm">
                    <span className="font-semibold text-primary dark:text-secondary">{job.company}</span>
                    <span className="text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full text-xs w-fit">{job.period}</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-muted-foreground text-sm leading-relaxed">
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
            <h3 className="text-2xl font-bold mb-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-secondary rounded-full"/>
              <span>Organization</span>
            </h3>
            <div className="space-y-8">
              {orgExperience.map((org, index) => (
                <GlassCard key={index} hoverEffect className="border-l-4 border-l-secondary p-7">
                  <h4 className="text-lg font-bold leading-snug">{org.role}</h4>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-3 mb-5 gap-2 text-sm">
                    <span className="font-semibold text-primary dark:text-secondary">{org.org}</span>
                    <span className="text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full text-xs w-fit">{org.period}</span>
                  </div>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-muted-foreground text-sm leading-relaxed">
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

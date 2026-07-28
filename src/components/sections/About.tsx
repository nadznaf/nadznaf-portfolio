"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/5 dark:bg-black/20">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold mb-6"> <span className="text-primary dark:text-secondary">About</span> Me</h2>
            <div className="prose dark:prose-invert text-lg text-muted-foreground leading-relaxed">
              <p>
                Final-year Software Engineering Technology undergraduate at UGM with strong proficiency in
                Front-End development (React, Next.js, TypeScript) and Full-Stack experience (Laravel),
                coupled with a proven talent for UI/UX design.
              </p>
              <p>
                I have a proven track record in developing web applications, e-commerce platforms, and mentoring developer teams.
                Highly adaptable and eager to leverage technical skills in a challenging front-end or full-stack engineering role.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/20 rounded-lg text-primary dark:text-secondary-foreground">
                   <BookOpen size={24} />
                </div>
                <div>
                  <h4 className="font-bold">GPA</h4>
                  <p className="text-sm text-muted-foreground">3.78 / 4.00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="p-3 bg-secondary/20 rounded-lg text-primary dark:text-secondary-foreground">
                   <Calendar size={24} />
                 </div>
                 <div>
                   <h4 className="font-bold">Status</h4>
                   <p className="text-sm text-muted-foreground">Final-Year Student</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <GlassCard className="h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full dark:bg-white/10">
                  <GraduationCap className="w-8 h-8 text-primary dark:text-white" />
                </div>
                <div>
                   <h3 className="text-xl font-bold">Education</h3>
                   <p className="text-muted-foreground">Bachelor of Applied Science</p>
                </div>
              </div>
              
              <div className="relative border-l-2 border-primary/20 ml-4 pb-12 pl-8 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <h4 className="text-lg font-bold">Universitas Gadjah Mada (UGM)</h4>
                <p className="text-sm text-secondary font-medium mb-2">July 2023 - July 2027 (Expected)</p>
                <p className="text-muted-foreground">
                  Software Engineering Technology (S.Tr.Kom)<br/>
                  Sleman, DI Yogyakarta
                </p>
              </div>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}

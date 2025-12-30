"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/images/hero-bg.png" 
          alt="Abstract 3D Background" 
          fill 
          priority
          quality={100}
          className="object-cover opacity-90 dark:opacity-60"
        />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 font-semibold tracking-wider uppercase text-sm">
            <span className="text-secondary">Frontend Developer</span>
            <span className="text-muted-foreground">&</span>
            <span className="text-primary">Software Engineer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-secondary">nadznaf</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Passionate Software Engineering student at UGM, crafting modern and responsive web experiences with Next.js, React, and Tailwind CSS.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-white dark:text-primary-foreground dark:hover:bg-white/90">
              <Link href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-secondary/10">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-12">
            <Link href="https://github.com/nadznaf" target="_blank" className="text-muted-foreground hover:text-primary dark:hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary dark:hover:text-white transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:nadzirafarahiya@gmail.com" className="text-muted-foreground hover:text-primary dark:hover:text-white transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
             <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-primary rounded-[2rem] rotate-6 opacity-20 blur-xl animate-blob" />
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src="/images/nadznaf-bondee.png"
                alt="Nadznaf"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

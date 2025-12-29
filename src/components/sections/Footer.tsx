"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
        {/* Background Overlay for Glassy Consistency if needed, but solid works well for footer */}
        
      <div className="container mx-auto px-8 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">Nadznaf.</h2>
          <p className="text-primary-foreground/70">
            Building digital experiences with passion and precision.
          </p>
        </div>

        <div className="flex gap-6">
            <Link href="https://github.com/nadznaf" target="_blank" className="hover:text-secondary transition-colors">
              <Github />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-secondary transition-colors">
              <Linkedin />
            </Link>
            <Link href="mailto:nadzirafarahiya@gmail.com" className="hover:text-secondary transition-colors">
              <Mail />
            </Link>
        </div>
      </div>
      
      <div className="container mx-auto px-8 md:px-12 lg:px-20 mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Nadzira Azhani Farahiya. All rights reserved.
      </div>
    </footer>
  );
}

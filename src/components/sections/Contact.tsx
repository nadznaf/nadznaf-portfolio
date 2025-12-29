"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const mailtoLink = `mailto:nadzirafarahiya@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
        {/* Decorative */}
       <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/5 to-transparent -z-10" />

      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row gap-12">
          
          {/* Contact Info */}
          <div className="md:w-1/3 space-y-8">
            <div>
               <h2 className="text-4xl font-bold mb-4">Get in <span className="text-secondary">Touch</span></h2>
               <p className="text-muted-foreground">
                 Have a project in mind or just want to say hi? I'd love to hear from you.
               </p>
            </div>

            <div className="space-y-6">
              <GlassCard className="flex items-center gap-4 p-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary dark:text-secondary">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-sm text-muted-foreground">nadzirafarahiya@gmail.com</p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4 p-4">
                <div className="p-3 bg-primary/10 rounded-full text-primary dark:text-secondary">
                  <Phone />
                </div>
                <div>
                   <h4 className="font-bold">Phone</h4>
                   <p className="text-sm text-muted-foreground">+62 812-2978-1433</p>
                </div>
              </GlassCard>

              <GlassCard className="flex items-center gap-4 p-4">
                 <div className="p-3 bg-primary/10 rounded-full text-primary dark:text-secondary">
                    <MapPin />
                 </div>
                 <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-sm text-muted-foreground">Yogyakarta, Indonesia</p>
                 </div>
              </GlassCard>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <GlassCard className="h-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Your email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 focus:border-primary/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="What is this regarding?" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 focus:border-primary/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Your message here..." 
                    className="min-h-[150px] bg-white/5 border-white/10 focus:border-primary/50"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-white dark:text-primary dark:hover:bg-white/90">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </GlassCard>
          </div>

        </div>
      </div>
    </section>
  );
}

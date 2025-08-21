"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      {/* Global floating elements */}
      <FloatingElements />

      {/* Hero Section - Sticky */}
      <Hero />

      {/* Content Sections */}
      <div className="relative">
        <Stats />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

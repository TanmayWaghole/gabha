"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Sparkles, ArrowRight, Star, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Video,
  Palette,
  PenTool,
  Mic,
  FileText,
  Camera,
  Monitor,
  Globe,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    id: "video-editing",
    icon: Video,
    title: "Reel/Video Editing",
    description: "Professional video editing and post-production services",
    features: [
      "4K/Ultra HD Editing",
      "Advanced Sound Design",
      "Motion Graphics & Effects",
      "Multi-Platform Optimization",
    ],
    color: "from-[#0c807c] to-[#014948]",
    category: "video",
  },
  {
    id: "color-grading",
    icon: Palette,
    title: "Color Grading",
    description: "Expert color correction and cinematic grading",
    features: [
      "Cinematic Color Looks",
      "HDR & Wide Color Gamut",
      "Advanced Color Theory",
      "Technical Color Accuracy",
    ],
    color: "from-[#0c807c] to-[#014948]",
    category: "video",
  },
  {
    id: "graphic-design",
    icon: PenTool,
    title: "Graphic Designing",
    description: "Creative and modern graphic design solutions",
    features: [
      "Logo & Brand Identity",
      "Print & Digital Materials",
      "Marketing Collateral",
      "UI/UX Design Elements",
    ],
    color: "from-[#0c807c] to-[#014948]",
    category: "design",
  },
  {
    id: "voice-overs",
    icon: Mic,
    title: "Voice Overs",
    description: "Professional voice over and audio production",
    features: [
      "Professional Voice Actors",
      "Multi-Language Support",
      "Advanced Audio Editing",
      "Background Music Integration",
    ],
    color: "from-[#0c807c] to-[#014948]",
    category: "audio",
  },
  {
    id: "content-writing",
    icon: FileText,
    title: "Content Writing",
    description: "Engaging and SEO-optimized content creation",
    features: [
      "SEO-Optimized Content",
      "Professional Copywriting",
      "Social Media Content",
      "Email Marketing Campaigns",
    ],
    color: "from-[#0c807c] to-[#014948]",
    category: "content",
  },
  {
    id: "product-photography",
    icon: Camera,
    title: "Product Photography",
    description: "High-quality product photography and editing",
    features: [
      "Studio & Natural Lighting",
      "360° Product Views",
      "Lifestyle Photography",
      "E-commerce Optimization",
    ],
    color: "from-[#0c807c] to-[#014948]",
    category: "photography",
  },
  {
    id: "videography",
    icon: Video,
    title: "Videography",
    description: "Professional video production and cinematography",
    features: [
      "Pre-Production Planning",
      "Professional Equipment",
      "Cinematic Footage",
      "Complete Post-Production",
    ],
    color: "from-[#0c807c] to-[#014948]",
    category: "video",
  },
  {
    id: "web-development",
    icon: Monitor,
    title: "Website Design & Development",
    description: "Modern, responsive websites and web applications",
    features: [
      "Responsive Web Design",
      "SEO Optimization",
      "E-commerce Integration",
      "Performance Optimization",
    ],
    color: "from-[#0c807c] to-[#014948]",
    category: "web",
  },
  {
    id: "social-media-marketing",
    icon: Globe,
    title: "Social Media Marketing",
    description: "Strategic social media marketing and management",
    features: [
      "Paid Social Advertising",
      "Trend Monitoring & Adaptation",
      "Content Strategy Development",
      "Analytics & Reporting",
    ],
    color: "from-[#0c807c] to-[#014948]",
    category: "marketing",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");
  const router = useRouter();

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((service) => service.category === activeTab);

  const handleLearnMore = (serviceId: string) => {
    router.push(`/services/${serviceId}`);
  };

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-[#0c807c]/20 to-[#014948]/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-[#0c807c]/15 to-[#014948]/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0c807c]/5 to-[#014948]/5 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Creative Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative"
        >
          {/* Floating Icons Around Title */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full flex items-center justify-center shadow-lg"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#014948] to-[#0c807c] rounded-full flex items-center justify-center shadow-lg"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            <Zap className="w-6 h-6 text-white" />
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-8 h-8 text-[#0c807c]" />
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#0c807c] to-[#014948] bg-clip-text text-transparent">
              SERVICES
            </h2>
            <Sparkles className="w-8 h-8 text-[#014948]" />
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From video production to digital marketing, we handle every aspect
            of your marketing needs. One agency, unlimited possibilities.
          </motion.p>

          {/* Service Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              "all",
              "video",
              "design",
              "audio",
              "content",
              "photography",
              "web",
              "marketing",
            ].map((tab, index) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#0c807c] to-[#014948] text-white shadow-lg shadow-[#0c807c]/25"
                    : "bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 backdrop-blur-sm border border-gray-200"
                }`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Creative Service Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[#0c807c]/5 hover:to-[#014948]/5 transition-all duration-300 transform hover:scale-105 h-full shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#0c807c]/20"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{
                    rotate: 5,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <motion.h3
                  className="text-gray-900 font-bold text-xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {service.title}
                </motion.h3>

                <motion.div
                  className="space-y-2 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + 0.4 + idx * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-4 h-4 text-[#0c807c] flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.button
                  onClick={() => handleLearnMore(service.id)}
                  className="w-full bg-gradient-to-r from-[#0c807c] to-[#014948] hover:from-[#013542] hover:to-[#013542] text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#0c807c]/25 group cursor-pointer"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(12, 128, 124, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Learn More
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

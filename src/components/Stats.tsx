"use client";

import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  Target,
  TrendingUp,
  Sparkles,
  Eye,
  Heart,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";

const brandingServices = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Create a unique visual identity that reflects your brand's personality and values",
    color: "from-[#0c807c] to-[#014948]",
    features: [
      "Logo Design",
      "Color Palette",
      "Typography",
      "Brand Guidelines",
    ],
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description:
      "Professional logos that make your brand memorable and recognizable",
    color: "from-[#0c807c] to-[#014948]",
    features: [
      "Vector Graphics",
      "Multiple Formats",
      "Scalable Design",
      "Brand Integration",
    ],
  },
  {
    icon: Eye,
    title: "Visual Design",
    description:
      "Eye-catching designs that communicate your message effectively",
    color: "from-[#0c807c] to-[#014948]",
    features: [
      "Print Materials",
      "Digital Assets",
      "Social Media Graphics",
      "Marketing Collateral",
    ],
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Strategic branding that positions your business for success",
    color: "from-[#0c807c] to-[#014948]",
    features: [
      "Market Research",
      "Competitor Analysis",
      "Brand Positioning",
      "Messaging Framework",
    ],
  },
  {
    icon: TrendingUp,
    title: "Brand Marketing",
    description:
      "Comprehensive marketing strategies to build your brand presence",
    color: "from-[#0c807c] to-[#014948]",
    features: [
      "Digital Marketing",
      "Content Strategy",
      "Social Media",
      "Brand Awareness",
    ],
  },
];

export default function Stats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#0c807c]/20 to-[#014948]/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#0c807c]/15 to-[#014948]/15 rounded-full blur-3xl"
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
        {/* Creative Header with Floating Elements */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
              BRANDING
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
            Transform your business with professional branding that builds
            trust, creates recognition, and drives growth
          </motion.p>

          {/* Interactive CTA Button */}
        </motion.div>

        {/* Creative Service Showcase - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Main Service */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-[#0c807c]/10 to-[#014948]/10 rounded-3xl p-8 border border-[#0c807c]/20 backdrop-blur-sm">
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <Palette className="w-10 h-10 text-white" />
              </motion.div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Complete Brand Identity
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                We don't just design logos - we create complete brand ecosystems
                that tell your story, connect with your audience, and drive
                business growth.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Logo Design",
                  "Color Palette",
                  "Typography",
                  "Brand Guidelines",
                ].map((feature, idx) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-2 bg-white/50 rounded-lg p-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Service Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {brandingServices.slice(1, 5).map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-gradient-to-br hover:from-[#0c807c]/5 hover:to-[#014948]/5 transition-all duration-300 group"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{
                    rotate: 5,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Interactive Process Flow */}
        <motion.div
          className="bg-gradient-to-r from-[#0c807c]/5 to-[#014948]/5 rounded-3xl p-8 border border-[#0c807c]/10 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Creative Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding your vision",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Crafting your brand story",
              },
              { step: "03", title: "Design", desc: "Creating visual magic" },
              { step: "04", title: "Launch", desc: "Bringing it to life" },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {process.step}
                </motion.div>

                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">{process.desc}</p>

                {/* Connecting Lines */}
                {index < 3 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#0c807c] to-[#014948] transform -translate-y-1/2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

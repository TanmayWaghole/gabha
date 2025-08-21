"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, PenTool, Rocket } from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We start by understanding your business, goals, and target audience to create a tailored strategy.",
    icon: Target,
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Our team develops a comprehensive marketing plan that aligns with your objectives and budget.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Creative Development",
    description:
      "We bring your vision to life with high-quality creative content and professional execution.",
    icon: PenTool,
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description:
      "We launch your campaign and continuously optimize for maximum performance and ROI.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-r from-[#2687ac]/10 to-[#00d4ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-gradient-to-r from-[#ff6b35]/10 to-[#f7931e]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven 4-step process ensures your project is delivered on time,
            on budget, and exceeds expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative group"
            >
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#2687ac] to-[#00d4ff] z-0"></div>
              )}
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-[#2687ac] to-[#00d4ff] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#2687ac]/25">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-[#00d4ff] mb-4 bg-gradient-to-r from-[#2687ac] to-[#00d4ff] bg-clip-text text-transparent">
                  {step.step}
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

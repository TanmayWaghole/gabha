"use client";

import { motion } from "framer-motion";
import { Star, Quote, Sparkles, Heart, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Shashank",
    company: "Sanyatra Tours",
    content:
      "just wanted a simple video, but what I received was way beyond expectations. The motion graphics made it look professional and unique, and the editing brought out exactly the mood I wanted. It felt like my idea was understood perfectly and brought to life.",
    rating: 5,
    avatar: "SJ",
    service: "Video Editing & Marketing",
  },
  {
    name: "Pallavi Bhosale",
    company: "Fashion Forward",
    content: "My website now looks modern, clean, and exactly how I imagined",
    rating: 4,
    avatar: "MC",
    service: "Web Design & Photography",
  },
  {
    name: "Quadcore FX",
    company: "Trading Co.",
    content:
      "Professional, creative, and reliable. GABHA delivered our complete marketing campaign on time and exceeded our expectations. Highly recommended!",
    rating: 4,
    avatar: "ER",
    service: "Full Marketing Campaign",
  },
];

export default function Testimonials() {
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
            <Heart className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#014948] to-[#0c807c] rounded-full flex items-center justify-center shadow-lg"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            <Star className="w-6 h-6 text-white" />
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
              TESTIMONIALS
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
            Don't just take our word for it. Here's what our clients have to say
            about working with GABHA.
          </motion.p>
        </motion.div>

        {/* Creative Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[#0c807c]/5 hover:to-[#014948]/5 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#0c807c]/20"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Service Badge */}
                <motion.div
                  className="inline-block bg-gradient-to-r from-[#0c807c] to-[#014948] text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {testimonial.service}
                </motion.div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + 0.3 + i * 0.1,
                      }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Icon */}
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{
                    rotate: 5,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Quote className="w-6 h-6 text-white" />
                </motion.div>

                {/* Content */}
                <motion.p
                  className="text-gray-700 leading-relaxed mb-6 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.content}"
                </motion.p>

                {/* Author */}
                <motion.div
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="text-gray-900 font-bold text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

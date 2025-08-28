"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
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
              CONTACT
            </h2>
            <Sparkles className="w-8 h-8 text-[#014948]" />
          </motion.div>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to get started? Let's discuss your project and how TRP can
            help you achieve your marketing goals.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Create Something Amazing Together
            </motion.h3>

            <motion.p
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We're here to handle everything for you. From initial concept to
              final delivery, our team is ready to bring your vision to life.
            </motion.p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{
                    rotate: 5,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Phone className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">Call Us</div>
                  <div className="text-gray-600 text-lg">89832 09982</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{
                    rotate: 5,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Mail className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">
                    Email Us
                  </div>
                  <div className="text-gray-600 text-lg">
                    trpmarketingagency@gmail.com
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-14 h-14 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                  whileHover={{
                    rotate: 5,
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <MapPin className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <div className="text-gray-900 font-bold text-lg">
                    Visit Us
                  </div>
                  <div className="text-gray-600 text-lg">Katraj,Pune</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-[#0c807c]/20 transition-all duration-300"
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Start Your Project
            </motion.h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0c807c] focus:ring-2 focus:ring-[#0c807c]/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                />
                <motion.input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0c807c] focus:ring-2 focus:ring-[#0c807c]/20 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>

              <motion.input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0c807c] focus:ring-2 focus:ring-[#0c807c]/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              />

              <motion.input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0c807c] focus:ring-2 focus:ring-[#0c807c]/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              />

              <motion.select
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:border-[#0c807c] focus:ring-2 focus:ring-[#0c807c]/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <option value="" className="bg-white text-gray-900">
                  Select Service
                </option>
                <option value="video" className="bg-white text-gray-900">
                  Video Editing
                </option>
                <option value="design" className="bg-white text-gray-900">
                  Graphic Design
                </option>
                <option value="marketing" className="bg-white text-gray-900">
                  Digital Marketing
                </option>
                <option value="web" className="bg-white text-gray-900">
                  Website Development
                </option>
                <option value="full" className="bg-white text-gray-900">
                  Full Package
                </option>
              </motion.select>

              <motion.textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-[#0c807c] focus:ring-2 focus:ring-[#0c807c]/20 transition-colors resize-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              ></motion.textarea>

              <motion.button
                className="w-full bg-gradient-to-r from-[#0c807c] to-[#014948] hover:from-[#013542] hover:to-[#013542] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#0c807c]/25 group"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px rgba(12, 128, 124, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "../../public/images/navbar_logo.png";

export default function Navigation() {
  return (
    <nav className="absolute top-0 w-full z-10 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                  <Image
                    src={logo}
                    alt="GABHA Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#f1d116] to-[#f1d116] bg-clip-text text-transparent">
                  GABHA
                </h1>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            <a
              href="#services"
              className="text-white/70 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#process"
              className="text-white/70 hover:text-white transition-colors"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-white/70 hover:text-white transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

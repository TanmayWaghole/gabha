"use client";

import { motion } from "framer-motion";

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating circles */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-gradient-to-r from-[#2687ac] to-[#00d4ff] rounded-full opacity-20"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-gradient-to-r from-[#ff6b35] to-[#f7931e] rounded-full opacity-30"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-40 left-1/4 w-3 h-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-full opacity-25"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-5 h-5 bg-gradient-to-r from-[#00d4ff] to-[#4facfe] rounded-full opacity-20"
        animate={{
          y: [0, -35, 0],
          x: [0, -25, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Floating squares */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-2 h-2 bg-gradient-to-r from-[#f093fb] to-[#f5576c] opacity-30"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] opacity-25"
        animate={{
          y: [0, -30, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating triangles */}
      <motion.div
        className="absolute top-1/4 right-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[#2687ac] opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#ff6b35] opacity-25"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Large background elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#2687ac]/10 to-[#00d4ff]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#ff6b35]/10 to-[#f7931e]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#667eea]/5 to-[#764ba2]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}

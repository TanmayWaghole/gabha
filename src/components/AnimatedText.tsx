"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "reveal" | "typewriter" | "slide";
}

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  type = "reveal",
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (type === "typewriter") {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      setDisplayText(text);
    }
  }, [text, currentIndex, type]);

  if (type === "typewriter") {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
        className={className}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-6 bg-current ml-1"
        />
      </motion.span>
    );
  }

  if (type === "slide") {
    return (
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: "easeOut",
        }}
        className={className}
      >
        {text}
      </motion.div>
    );
  }

  // Default reveal animation
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
}

// Special component for staggered text animation
export function StaggeredText({
  words,
  className = "",
  staggerDelay = 0.1,
}: {
  words: string[];
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: index * staggerDelay,
            ease: "easeOut",
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

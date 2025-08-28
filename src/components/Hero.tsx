"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  Zap,
  Target,
  TrendingUp,
  Users,
  Globe,
  BarChart3,
  Award,
  Shield,
  Heart,
} from "lucide-react";
import AnimatedText, { StaggeredText } from "./AnimatedText";
import Navigation from "./Navigation";

const slogans = [
  "Transforming ideas into impact",
  "Let's flip your brand's challenges into success",
  "Your complete marketing partner",
  "From concept to execution",
  "Driving growth through creativity",
];

const goals = [
  { number: "100%", label: "Trust", icon: Shield },
  { number: "24/7", label: "Value", icon: Heart },
  { number: "100%", label: "Results", icon: BarChart3 },
  { number: "24/7", label: "Excellence", icon: Award },
];

// Hero background images with human beings
const heroImages = [
  "/images/hero-5.jpg",
  "/images/hero-4.jpeg", // Digital marketing team
  "/images/hero-6.jpeg", // Professional team in meeting
  "/images/hero-16.jpg",
];

export default function Hero() {
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 300], [0, -100]);
  const y2 = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const sloganInterval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);

    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(sloganInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden z-50">
      {/* Navigation */}
      <Navigation />

      {/* Full-screen background images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImage === index ? 1 : 0,
              scale: currentImage === index ? 1 : 1.05,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            style={{ willChange: "opacity, transform" }}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${image})`,
              }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Gradient overlay for brand colors */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c807c]/10 via-transparent to-[#014948]/10" />
          </motion.div>
        ))}
      </div>

      {/* Floating animated elements - Hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ y: y1, willChange: "transform" }}
        />

        <motion.div
          className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-[#0c807c] to-[#014948] opacity-50"
          animate={{
            y: [0, -30, 0],
            x: [0, -20, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ y: y2, willChange: "transform" }}
        />

        {/* Moving lines - Simplified */}
        <motion.div
          className="absolute top-1/3 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#0c807c] to-transparent"
          animate={{
            x: [0, 50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ willChange: "transform, opacity" }}
        />
      </div>

      {/* Main content overlay */}
      <div className="relative z-10 min-h-screen flex items-center py-16 md:py-0">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ opacity, willChange: "opacity, transform" }}
              className="text-center lg:text-left"
            >
              {/* Dynamic Slogan */}
              <motion.div
                key={currentSlogan}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mb-4 md:mb-6"
                style={{ willChange: "opacity, transform" }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-2xl mt-6 md:mt-0">
                  {slogans[currentSlogan]}
                </h2>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ willChange: "opacity, transform" }}
              >
                <motion.span
                  className="bg-gradient-to-r from-[#FFC100] via-[#FFC100] to-[#FFC100] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ willChange: "background-position" }}
                >
                  TRP
                </motion.span>
                <span
                  className="text-[#025e5b] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[2.37rem] pb-2 md:pb-4 block"
                  style={{
                    textShadow:
                      "2px 2px 2px rgba(255, 255, 255, 0.8), 0px 0px 4px rgba(255, 255, 255, 0.6)",
                  }}
                >
                  Marketing Agency
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-semibold max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-6 md:mb-8 drop-shadow-2xl"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ willChange: "opacity, transform" }}
              >
                Your complete marketing partner. We handle everything from
                concept to execution, delivering results that drive growth and
                build your brand. No project is too big or too small.
              </motion.p>

              {/* Key Features */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 text-gray-700 text-sm sm:text-base md:text-lg mb-6 md:mb-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ willChange: "opacity, transform" }}
              >
                {["Digital Growth", "Results-Driven", "Visual Impact"].map(
                  (feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full shadow-lg"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                        ease: "easeOut",
                      }}
                      style={{ willChange: "opacity, transform" }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.3 + index * 0.1 + 0.05,
                          ease: "backOut",
                        }}
                        style={{ willChange: "transform" }}
                      >
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#0c807c]" />
                      </motion.div>
                      <span className="font-medium text-xs sm:text-sm md:text-base">
                        {feature}
                      </span>
                    </motion.div>
                  )
                )}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ willChange: "opacity, transform" }}
              >
                <motion.button
                  className="bg-gradient-to-r from-[#0c807c] to-[#014948] hover:from-[#013542] hover:to-[#013542] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#0c807c]/25 group backdrop-blur-sm"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 25px rgba(12, 128, 124, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContact}
                  style={{ willChange: "transform" }}
                >
                  Start Your Project
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ willChange: "transform" }}
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Column - Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative mt-8 lg:mt-0"
              style={{ willChange: "opacity, transform" }}
            >
              {/* Stats Card */}
              <motion.div
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 15px 35px rgba(0, 0, 0, 0.3)",
                    "0 25px 50px rgba(0, 0, 0, 0.4)",
                    "0 15px 35px rgba(0, 0, 0, 0.3)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ willChange: "box-shadow" }}
              >
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center drop-shadow-lg"
                  animate={{
                    opacity: [0.9, 1, 0.9],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ willChange: "opacity" }}
                >
                  Our Vision
                </motion.h3>

                {/* Achievement counters */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {goals.map((goal, index) => (
                    <motion.div
                      key={goal.label}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5 + index * 0.1,
                        ease: "easeOut",
                      }}
                      style={{ willChange: "opacity, transform" }}
                    >
                      <motion.div
                        className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full flex items-center justify-center"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.2 },
                        }}
                        style={{ willChange: "transform" }}
                      >
                        <goal.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </motion.div>

                      <div className="text-lg md:text-xl lg:text-2xl font-bold text-white/80 drop-shadow-lg">
                        {goal.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative elements - Hidden on mobile */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full hidden md:block"
                animate={{
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ willChange: "transform" }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full hidden md:block"
                animate={{
                  rotate: [0, -180],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5,
                }}
                style={{ willChange: "transform" }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on mobile */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ willChange: "transform" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

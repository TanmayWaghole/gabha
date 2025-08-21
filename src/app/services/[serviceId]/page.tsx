"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Star,
  Sparkles,
  Heart,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";

const serviceData = {
  "video-editing": {
    title: "Reel/Video Editing",
    subtitle: "Professional video editing and post-production services",
    description:
      "Transform your raw footage into engaging content that captivates your audience. From social media reels to cinematic masterpieces, we bring your vision to life with cutting-edge editing techniques.",
    features: [
      "4K/8K Ultra HD Editing",
      "Professional Color Grading",
      "Advanced Sound Design",
      "Motion Graphics & Effects",
      "Multi-Platform Optimization",
      "Fast Turnaround Times",
    ],
    benefits: [
      "Increased engagement on social media",
      "Professional quality that stands out",
      "Optimized for all platforms",
      "Enhanced brand storytelling",
    ],
    process: [
      {
        step: "01",
        title: "Consultation",
        desc: "Understanding your vision and requirements",
      },
      {
        step: "02",
        title: "Storyboarding",
        desc: "Creating a visual plan for your video",
      },
      {
        step: "03",
        title: "Editing",
        desc: "Professional editing with advanced techniques",
      },
      {
        step: "04",
        title: "Review",
        desc: "Collaborative feedback and revisions",
      },
      {
        step: "05",
        title: "Delivery",
        desc: "Final optimized files for all platforms",
      },
    ],
    image: "/images/video-editing.jpg",
    icon: "🎬",
  },
  "color-grading": {
    title: "Color Grading",
    subtitle: "Expert color correction and cinematic grading",
    description:
      "Elevate your visual content with professional color grading that creates mood, enhances storytelling, and ensures brand consistency across all platforms.",
    features: [
      "Cinematic Color Looks",
      "Brand Color Consistency",
      "HDR & Wide Color Gamut",
      "Advanced Color Theory",
      "Technical Color Accuracy",
      "Custom LUT Creation",
    ],
    benefits: [
      "Professional cinematic appearance",
      "Enhanced emotional impact",
      "Brand consistency across content",
      "Improved visual storytelling",
    ],
    process: [
      {
        step: "01",
        title: "Analysis",
        desc: "Understanding your brand colors and style",
      },
      {
        step: "02",
        title: "Correction",
        desc: "Basic color correction and balancing",
      },
      {
        step: "03",
        title: "Grading",
        desc: "Creative color grading and mood setting",
      },
      {
        step: "04",
        title: "Refinement",
        desc: "Fine-tuning and consistency checks",
      },
      {
        step: "05",
        title: "Export",
        desc: "Optimized delivery for all platforms",
      },
    ],
    image: "/images/color-grading.jpg",
    icon: "🎨",
  },
  "graphic-design": {
    title: "Graphic Designing",
    subtitle: "Creative and modern graphic design solutions",
    description:
      "Eye-catching designs that communicate your message effectively. From logos to complete brand identity systems, we create visuals that stand out and drive engagement.",
    features: [
      "Logo & Brand Identity",
      "Print & Digital Materials",
      "Social Media Graphics",
      "Marketing Collateral",
      "UI/UX Design Elements",
      "Custom Illustrations",
    ],
    benefits: [
      "Strong brand recognition",
      "Professional visual identity",
      "Increased audience engagement",
      "Consistent brand messaging",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Understanding your brand and target audience",
      },
      {
        step: "02",
        title: "Concept",
        desc: "Creating initial design concepts",
      },
      {
        step: "03",
        title: "Design",
        desc: "Developing the final design solution",
      },
      {
        step: "04",
        title: "Refinement",
        desc: "Client feedback and design iterations",
      },
      {
        step: "05",
        title: "Delivery",
        desc: "Final files in all required formats",
      },
    ],
    image: "/images/graphic-design.jpg",
    icon: "🎨",
  },
  "voice-overs": {
    title: "Voice Overs",
    subtitle: "Professional voice over and audio production",
    description:
      "High-quality voice overs that bring your content to life. We work with professional voice actors and provide complete audio production services for maximum impact.",
    features: [
      "Professional Voice Actors",
      "Multi-Language Support",
      "Advanced Audio Editing",
      "Background Music Integration",
      "Sound Effects Library",
      "Custom Audio Branding",
    ],
    benefits: [
      "Professional audio quality",
      "Enhanced content engagement",
      "Multi-language accessibility",
      "Strong brand voice",
    ],
    process: [
      {
        step: "01",
        title: "Script Review",
        desc: "Understanding your message and tone",
      },
      {
        step: "02",
        title: "Voice Selection",
        desc: "Choosing the perfect voice actor",
      },
      { step: "03", title: "Recording", desc: "Professional studio recording" },
      {
        step: "04",
        title: "Production",
        desc: "Audio editing and enhancement",
      },
      {
        step: "05",
        title: "Delivery",
        desc: "Final audio files ready for use",
      },
    ],
    image: "/images/voice-overs.jpg",
    icon: "🎤",
  },
  "content-writing": {
    title: "Content Writing",
    subtitle: "Engaging and SEO-optimized content creation",
    description:
      "Compelling content that ranks well and converts visitors into customers. We write everything from website copy to blog posts, ensuring your message resonates with your target audience.",
    features: [
      "SEO-Optimized Content",
      "Professional Copywriting",
      "Blog & Article Writing",
      "Social Media Content",
      "Email Marketing Campaigns",
      "Content Strategy",
    ],
    benefits: [
      "Improved search engine rankings",
      "Higher conversion rates",
      "Better audience engagement",
      "Consistent brand voice",
    ],
    process: [
      {
        step: "01",
        title: "Research",
        desc: "Understanding your industry and audience",
      },
      {
        step: "02",
        title: "Strategy",
        desc: "Creating content strategy and outline",
      },
      { step: "03", title: "Writing", desc: "Professional content creation" },
      { step: "04", title: "SEO", desc: "Optimization for search engines" },
      { step: "05", title: "Review", desc: "Final review and approval" },
    ],
    image: "/images/content-writing.jpg",
    icon: "✍️",
  },
  "product-photography": {
    title: "Product Photography",
    subtitle: "High-quality product photography and editing",
    description:
      "Showcase your products in their best light with professional photography that increases sales and builds trust with your customers. Perfect for e-commerce and marketing.",
    features: [
      "Studio & Natural Lighting",
      "360° Product Views",
      "Lifestyle Photography",
      "E-commerce Optimization",
      "Batch Editing & Retouching",
      "Custom Backgrounds",
    ],
    benefits: [
      "Increased product sales",
      "Professional product presentation",
      "Better customer trust",
      "Enhanced brand perception",
    ],
    process: [
      {
        step: "01",
        title: "Planning",
        desc: "Understanding your products and goals",
      },
      {
        step: "02",
        title: "Setup",
        desc: "Professional lighting and composition",
      },
      { step: "03", title: "Photography", desc: "High-quality product shots" },
      {
        step: "04",
        title: "Editing",
        desc: "Professional retouching and enhancement",
      },
      {
        step: "05",
        title: "Delivery",
        desc: "Optimized images for all platforms",
      },
    ],
    image: "/images/product-photography.jpg",
    icon: "📸",
  },
  videography: {
    title: "Videography",
    subtitle: "Professional video production and cinematography",
    description:
      "Complete video production from concept to final delivery. We handle everything from corporate videos to commercial productions with cinematic quality.",
    features: [
      "Pre-Production Planning",
      "Professional Equipment",
      "Cinematic Cinematography",
      "Aerial Drone Footage",
      "Complete Post-Production",
      "Multi-Camera Setup",
    ],
    benefits: [
      "Professional video quality",
      "Enhanced brand storytelling",
      "Increased audience engagement",
      "Competitive advantage",
    ],
    process: [
      {
        step: "01",
        title: "Concept",
        desc: "Developing the video concept and script",
      },
      {
        step: "02",
        title: "Pre-Production",
        desc: "Planning, casting, and location scouting",
      },
      {
        step: "03",
        title: "Production",
        desc: "Professional filming with high-end equipment",
      },
      {
        step: "04",
        title: "Post-Production",
        desc: "Editing, color grading, and effects",
      },
      {
        step: "05",
        title: "Delivery",
        desc: "Final video in all required formats",
      },
    ],
    image: "/images/videography.jpg",
    icon: "🎥",
  },
  "web-development": {
    title: "Website Design & Development",
    subtitle: "Modern, responsive websites and web applications",
    description:
      "Custom websites that convert visitors into customers. We build fast, secure, and SEO-optimized websites that drive results and provide exceptional user experiences.",
    features: [
      "Responsive Web Design",
      "SEO Optimization",
      "E-commerce Integration",
      "CMS Development",
      "Performance Optimization",
      "Security Implementation",
    ],
    benefits: [
      "Increased online presence",
      "Better user experience",
      "Higher conversion rates",
      "Improved search rankings",
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        desc: "Understanding your business and goals",
      },
      {
        step: "02",
        title: "Design",
        desc: "Creating wireframes and visual design",
      },
      {
        step: "03",
        title: "Development",
        desc: "Building the website with modern technologies",
      },
      {
        step: "04",
        title: "Testing",
        desc: "Quality assurance and optimization",
      },
      { step: "05", title: "Launch", desc: "Deployment and ongoing support" },
    ],
    image: "/images/web-development.jpg",
    icon: "💻",
  },
  "social-media-marketing": {
    title: "Social Media Marketing",
    subtitle: "Strategic social media marketing and management",
    description:
      "Build your brand presence on social media with engaging content and strategic management. We help you grow your audience and drive meaningful engagement.",
    features: [
      "Content Strategy Development",
      "Community Management",
      "Paid Social Advertising",
      "Analytics & Reporting",
      "Trend Monitoring & Adaptation",
      "Influencer Collaborations",
    ],
    benefits: [
      "Increased brand awareness",
      "Higher engagement rates",
      "Better customer relationships",
      "Measurable ROI",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        desc: "Analyzing current social media presence",
      },
      {
        step: "02",
        title: "Strategy",
        desc: "Creating comprehensive social media strategy",
      },
      {
        step: "03",
        title: "Content",
        desc: "Creating engaging content calendar",
      },
      {
        step: "04",
        title: "Management",
        desc: "Daily posting and community engagement",
      },
      {
        step: "05",
        title: "Optimization",
        desc: "Continuous improvement and reporting",
      },
    ],
    image: "/images/social-media-marketing.jpg",
    icon: "📱",
  },
};

interface ServicePageProps {
  params: Promise<{ serviceId: string }>;
}
export default function ServicePage({
  params,
}: {
  params: Promise<{ serviceId: string }>;
}) {
  const router = useRouter();

  // await params in client components
  const [serviceId, setServiceId] = React.useState<string | null>(null);

  React.useEffect(() => {
    params.then((p) => setServiceId(p.serviceId));
  }, [params]);

  if (!serviceId) {
    return <div>Loading...</div>;
  }

  const service = serviceData[serviceId as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h1>
          <button
            onClick={() => router.back()}
            className="bg-gradient-to-r from-[#0c807c] to-[#014948] text-white px-6 py-3 rounded-full"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      {/* ... rest of your UI */}
    </div>
  );
}

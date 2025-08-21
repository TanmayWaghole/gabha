"use client";

import { Instagram, Facebook, Phone, MessageCircle, Mail } from "lucide-react";
import Image from "next/image";
import logo from "../../public/images/footer_logo.png";

export default function Footer() {
  const socialLinks = {
    instagram: "#", // Replace with actual Instagram link
    facebook: "#", // Replace with actual Facebook link
    whatsapp: "#", // Replace with actual WhatsApp link
    phone: "#", // Replace with actual phone number
    email: "#", // Replace with actual email
  };

  const handleSocialClick = (platform: string) => {
    const link = socialLinks[platform as keyof typeof socialLinks];
    if (link && link !== "#") {
      if (platform === "phone") {
        window.location.href = `tel:${link}`;
      } else if (platform === "whatsapp") {
        window.open(`https://wa.me/${link}`, "_blank");
      } else if (platform === "email") {
        window.location.href = `mailto:${link}`;
      } else {
        window.open(link, "_blank");
      }
    }
  };

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12  rounded-xl flex items-center justify-center  p-1">
              <Image
                src={logo}
                alt="GABHA Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#f1d116] to-[#f1d116] bg-clip-text text-transparent">
              GABHA
            </h3>
          </div>
          <p className="text-gray-600 mb-6 text-lg">
            Your complete marketing partner.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4">
            {/* Instagram */}
            <div
              className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
              onClick={() => handleSocialClick("instagram")}
            >
              <Instagram className="w-6 h-6 text-white" />
            </div>

            {/* Facebook */}
            <div
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
              onClick={() => handleSocialClick("facebook")}
            >
              <Facebook className="w-6 h-6 text-white" />
            </div>

            {/* WhatsApp */}
            <div
              className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
              onClick={() => handleSocialClick("whatsapp")}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </div>

            {/* Phone */}
            <div
              className="w-12 h-12 bg-gradient-to-r from-[#0c807c] to-[#014948] rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
              onClick={() => handleSocialClick("phone")}
            >
              <Phone className="w-6 h-6 text-white" />
            </div>

            {/* Email */}
            <div
              className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
              onClick={() => handleSocialClick("email")}
            >
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500">
            © 2025 GABHA Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

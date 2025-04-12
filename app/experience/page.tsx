"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaHandsHelping, FaChevronDown, FaChevronUp } from "react-icons/fa";

const experiences = [
  {
    category: "Work Experience",
    icon: <FaBriefcase className="text-gray-700 text-2xl mr-2" />,
    items: [
      {
        title: "Research Assistant & Co-Author",
        company: "Beedie School of Business",
        location: "Burnaby, BC",
        duration: "May 2024 - Jan 2025",
        summary: "Driving data-driven research & API integration.",
        details: `At Beedie, I extracted & analyzed clinical data from WebMD, ClinicalTrials.gov, and FDA Open API. 
        I designed Python-based automation for seamless API integration, reducing manual efforts by 60%. 
        Additionally, I optimized data extraction workflows and conducted rigorous API testing using Postman.`,
      },
      {
        title: "Student Fundraiser",
        company: "SFU Annual Giving Call Centre",
        location: "Burnaby, BC",
        duration: "October 2024 - Present",
        summary: "Transforming donor engagement through insights.",
        details: `I leveraged data analytics tools like CallerMax and VanillaSoft to personalize outreach. 
        By tailoring conversations based on donor trends, I contributed to a **15% increase** in alumni donations.`,
      },
      {
        title: "Data Science Councillor",
        company: "Simon Fraser Student Society",
        location: "Burnaby, BC",
        duration: "April 2024 - Present",
        summary: "Championing student advocacy & engagement.",
        details: `I represent 300+ Data Science students, organizing **career panels, networking events, and policy discussions**. 
        I also improved **student resource accessibility** through data-driven engagement strategies.`,
      },
      {
        title: "Sales Associate",
        company: "H&M",
        location: "Mumbai, India",
        duration: "July 2022 - Dec 2022",
        summary: "Customer engagement, styling & operations.",
        details: `As a key retail associate, I provided fashion consultation to 200+ customers daily, leading to a **20% increase in sales**. 
        Additionally, I optimized in-store stock arrangements to enhance shopping experience.`,
      },
      {
        title: "Digital Content Strategist & Web Developer",
        company: "Futrainc",
        location: "Mumbai, India",
        duration: "Jan 2022 - Sep 2022",
        summary: "Building brand identities through data-driven content.",
        details: `I developed **high-impact content strategies** using SEO analytics, driving a **35% increase in brand engagement**. 
        My role included managing multiple social media accounts and executing targeted digital campaigns.`,
      },
    ],
  },
  {
    category: "Volunteering Experience",
    icon: <FaHandsHelping className="text-gray-700 text-2xl mr-2" />,
    items: [
      {
        title: "Student Usher",
        company: "Simon Fraser University",
        location: "Burnaby, BC",
        duration: "October 2024 - Present",
        summary: "Ensuring seamless event coordination at SFU convocation.",
        details: `Managed **guest logistics, regalia distribution, and seating** for over 1,700 attendees. 
        Played a key role in optimizing convocation workflows, enhancing guest experience.`,
      },
      {
        title: "Student Ambassador",
        company: "Simon Fraser University",
        location: "Burnaby, BC",
        duration: "Nov 2023 - Dec 2023",
        summary: "Guiding students through career discovery at SFU.",
        details: `Led interactive career exploration sessions, helping **70+ high school students** understand paths in Data Science and Statistics.`,
      },
      {
        title: "Community Development Volunteer & Educator",
        company: "TESTIFY Foundation",
        location: "Mumbai, India",
        duration: "May 2022 - Aug 2023",
        summary: "Creating social impact through education & environment.",
        details: `I launched **a free pre-primary slum school** to provide underprivileged children with access to early education. 
        Additionally, I led tree plantation drives and street animal vaccination initiatives.`,
      },
      {
        title: "Community Volunteer",
        company: "ZED Foundation",
        location: "Mumbai, India",
        duration: "Dec 2021 - Aug 2022",
        summary: "Led food distribution, reforestation, and digital support initiatives for community welfare.",
        details: `During my time at ZED Foundation, I played a key role in various social impact projects. 
        I spearheaded the #AaoKhanaKhao initiative, helping serve over 2,860 meals to underprivileged individuals 
        through the One Rupee Food program every Sunday for six months. Additionally, I contributed to the 
        ZED Forest project, aiding in the plantation of 500+ trees. I also managed computer records, donation 
        collection stalls, and logistics for large-scale fundraising efforts, ensuring efficient outreach and 
        organizational success.`
      }
    

    ],
  },
];

export default function ExperiencePage() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Page Title with Animated Fade-In */}
      <motion.h1 
        className="text-4xl font-bold text-center mb-8" 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        My Experience & Impact
      </motion.h1>

      {/* Category Selector with Animated Hover */}
      <div className="flex justify-center space-x-4 mb-6">
        {experiences.map((exp, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setSelectedCategory(index);
              setSelectedExperience(null);
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`px-4 py-2 rounded-md font-medium transition-all flex items-center space-x-2 ${
              selectedCategory === index ? "bg-black text-white shadow-lg" : "bg-gray-300 text-gray-700"
            }`}
          >
            {exp.icon} <span>{exp.category}</span>
          </motion.button>
        ))}
      </div>

      {/* Experience Cards with Staggered Reveal */}
      <div className="space-y-6">
        {experiences[selectedCategory].items.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedExperience(selectedExperience === index ? null : index)}
            className="bg-white shadow-xl rounded-lg p-6 border border-gray-200 hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{exp.title}</h2>
                <p className="text-gray-600 font-medium">
                  {exp.company} - {exp.location} ({exp.duration})
                </p>
              </div>
              <motion.span
                animate={{ rotate: selectedExperience === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-600 text-xl"
              >
                {selectedExperience === index ? <FaChevronUp /> : <FaChevronDown />}
              </motion.span>
            </div>

            {/* Expandable Details */}
            <AnimatePresence>
              {selectedExperience === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-gray-700 leading-relaxed"
                >
                  {exp.details}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

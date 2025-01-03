"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutPage = () => {
  return (
    <section className="about-us text-center mx-auto px-5 py-10 bg-gradient-to-r from-black via-blue-800 to-purple-900 text-white">
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About EchoBoost Marketing
      </motion.h1>

      {/* Intro Section */}
      <motion.div
        className="max-w-4xl mx-auto mb-10 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Images/marketing-team.jpg"
          alt="Marketing Team"
          width={600}
          height={400}
          className="rounded-lg mx-auto mb-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        />
        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          Welcome to EchoBoost Marketing, where your business's voice is amplified and echoed through the digital
          world. At EchoBoost, we specialize in crafting powerful marketing strategies that resonate with your
          target audience and drive meaningful results.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        className="max-w-3xl mx-auto mb-10 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Our Mission</h2>
        <Image
          src="/Images/mission.jpg"
          alt="Our Mission"
          width={600}
          height={400}
          className="rounded-lg mx-auto mb-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        />
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          Our mission is to empower businesses of all sizes to achieve their full potential in the digital
          landscape. We are committed to delivering innovative and effective marketing solutions that enhance
          brand visibility, engagement, and growth.
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="max-w-3xl mx-auto mb-10 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Our Vision</h2>
        <Image
          src="/Images/vision.jpg"
          alt="Our Vision"
          width={600}
          height={400}
          className="rounded-lg mx-auto mb-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        />
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          We envision a world where every business has the tools and expertise to connect with their audience in a
          meaningful way. By leveraging the latest technologies and marketing trends, we aim to be at the
          forefront of the digital marketing industry, setting new standards of excellence.
        </p>
      </motion.div>

      {/* What We Do Section */}
      <motion.div
        className="max-w-4xl mx-auto mb-10 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">What We Do</h2>
        <ul className="list-disc list-inside text-left mx-auto space-y-4 text-sm sm:text-base md:text-lg">
          <li>
            <strong>Digital Marketing:</strong> From SEO and content marketing to social media management, we
            provide strategies that boost your online presence and drive traffic to your site.
          </li>
          <li>
            <strong>SEO & Content Marketing:</strong> Enhance your visibility on search engines and engage your
            audience with high-quality, relevant content.
          </li>
          <li>
            <strong>Social Media Management:</strong> Build a strong social media presence with tailored strategies.
          </li>
          <li>
            <strong>Brand Strategy:</strong> Define and refine your brand's voice, identity, and positioning to
            stand out in a crowded market.
          </li>
          <li>
            <strong>Paid Advertising:</strong> Maximize your ROI with targeted advertising campaigns on major platforms.
          </li>
        </ul>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        className="max-w-3xl mx-auto mb-10 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Why Choose Us?</h2>
        <Image
          src="/Images/choose.png"
          alt="Why Choose Us"
          width={600}
          height={400}
          className="rounded-lg mx-auto mb-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2"
        />
        <ul className="list-disc list-inside text-left mx-auto space-y-4 text-sm sm:text-base md:text-lg">
          <li>
            <strong>Client Support:</strong> Personalized assistance to enhance customer satisfaction and retention.
          </li>
          <li>
            <strong>More Growth:</strong> Strategies to scale the business and boost revenue through innovation and market expansion.
          </li>
          <li>
            <strong>Our Strategy:</strong> A tailored plan aligning resources and goals to achieve business success.
          </li>
          <li>
            <strong>More Reach:</strong> Expanding brand visibility through marketing and partnerships.
          </li>
          <li>
            <strong>Expert Team:</strong> A skilled workforce delivering expertise and innovation for superior outcomes.
          </li>
          <li>
            <strong>Creative Ideas:</strong> Unique and innovative solutions to captivate audiences and drive growth.
          </li>
        </ul>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="mt-10 px-4 sm:px-6 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-5">Get in Touch</h2>
        <p className="text-sm sm:text-base md:text-lg mb-5">
          Ready to take your marketing to the next level? Contact us today to learn more about how EchoBoost
          Marketing can help your business thrive.
        </p>
        <a
          href="/contact"
          className="bg-transparent border border-transparent text-white px-4 py-2 rounded shadow-[0_0_10px_rgba(12,118,228,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
};

export default AboutPage;

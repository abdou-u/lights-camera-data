import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";
import cinema from "../assets/cinema.jpg";

const ProjectIntroduction: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="hero bg-dark text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-glow mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Our Box Office Analysis Journey
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Dive into the world of cinema and explore the dynamics behind box office success. From genre
            trends to star-studded casts, uncover the key factors that make a movie a blockbuster.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-neutral text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.8 }}
          >
            {/* Story Introduction */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-glow mb-6">
                The Story Behind the Numbers
              </h2>
              <p className="text-lg leading-relaxed text-light mb-4">
                For over a century, filmmakers have been creating stories that capture the imagination
                of audiences worldwide. But what goes into making these movies a success? Is it all
                about the stars, or does the runtime play a crucial role?
              </p>
              <p className="text-lg leading-relaxed text-light">
                Join us as we explore this fascinating world, uncovering insights that blend creativity
                with data-driven precision.
              </p>
            </div>

            {/* Visual Appeal */}
            <div className="relative">
              <div className="absolute inset-0 rounded-lg bg-card-gradient shadow-glow" />
              <motion.img
                src={cinema}
                alt="Cinema"
                className="w-full rounded-lg shadow-strong"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Highlights */}
      <section className="py-16 bg-dark text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-10 text-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What You'll Discover
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Genres and Trends",
                description:
                  "Analyze how genres and trends have evolved over time and their impact on box office success.",
              },
              {
                title: "Star Power",
                description:
                  "Explore the role of actors, diversity, and cast dynamics in shaping a movie's financial performance.",
              },
              {
                title: "Data-Driven Predictions",
                description:
                  "Learn about our predictive models and their potential to forecast box office revenue.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-neutral p-6 rounded-lg shadow-strong"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
              >
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-light">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placeholder for Visualizations */}
      <section className="py-16 bg-neutral text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            className="p-8 rounded-lg bg-dark shadow-strong"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Interactive Visualizations Coming Soon!
            </h2>
            <p className="text-lg text-light">
              Stay tuned for dynamic plots that bring our findings to life.
            </p>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ProjectIntroduction;

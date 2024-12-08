import React from "react";
import { motion } from "framer-motion";
import PageWrapper from "./PageWrapper";

const ProjectIntroduction: React.FC = () => {
    return (
        <PageWrapper>
            <section className="py-16 bg-dark text-white">
                <div className="container mx-auto px-6 md:px-12">
                    {/* Section Title */}
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-center mb-6 text-glow"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Welcome to Our Box Office Analysis Journey
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-center text-light"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        The movie industry is a realm of creativity, innovation, and intense competition.
                        Our project explores what makes a movie a financial success. Is it the genre,
                        the star-studded cast, or perhaps the runtime? Dive into our data-driven journey
                        and uncover the story behind the silver screen.
                    </motion.p>

                    {/* Placeholder for Interactive Content */}
                    <motion.div
                        className="mt-16"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <div className="w-full h-64 bg-neutral rounded-lg flex items-center justify-center shadow-strong">
                            <p className="text-gray-400">Interactive Graphs Coming Soon...</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageWrapper>
    );
};

export default ProjectIntroduction;

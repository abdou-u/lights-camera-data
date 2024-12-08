import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroBackground from "../assets/movie-bg.jpg";

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    const fadeIn = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const grow = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section className="relative h-screen flex flex-col items-center justify-center bg-hero-gradient text-white">
            {/* Title */}
            <motion.h1
                className="text-4xl md:text-6xl font-extrabold mb-6 text-center text-glow"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6 }}
            >
                Lights, Camera, <span className="text-accent">Data!</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-lg md:text-xl max-w-3xl text-center mb-8"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Discover the secrets behind box office success and predict the future of cinema through advanced data analysis.
            </motion.p>

            {/* "Start the Journey" Box */}
            <motion.div
                className="relative w-full max-w-lg h-64 md:h-80 bg-cover bg-center rounded-lg shadow-strong overflow-hidden transform transition-transform hover:scale-105 hover-glow"
                style={{ backgroundImage: `url(${heroBackground})` }}
                onClick={() => navigate("/project-introduction")}
                initial="hidden"
                animate="visible"
                variants={grow}
                transition={{ duration: 0.8, delay: 0.4 }}
                aria-label="Start the Journey"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-white">
                        Start the Journey
                    </h2>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;

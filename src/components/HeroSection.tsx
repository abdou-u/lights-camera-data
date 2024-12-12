import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroBackground from "../assets/movie-bg.jpg";

const HeroSection: React.FC = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const handleBoxClick = () => {
        navigate("/prologue");
    };

    return (
        <section className="relative h-screen flex flex-col items-center justify-center bg-hero-gradient text-white overflow-hidden">
            {/* Cinematic Spotlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black opacity-70 z-0" />

            {/* Title */}
            <motion.h1
                className="text-5xl md:text-7xl font-extrabold mb-6 text-center text-glow z-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Lights, Camera, <span className="text-accent">Data!</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className="text-lg md:text-2xl max-w-3xl text-center mb-12 leading-relaxed z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
            >
                Prepare to uncover the secrets of box office success. Step into a world where storytelling meets science, and embark on a journey to predict the future of cinema.
            </motion.p>

            {/* "Start the Journey" Box */}
            <motion.div
                className={`relative w-full max-w-lg h-64 md:h-80 bg-cover bg-center rounded-lg shadow-cinematic overflow-hidden transform transition-transform cursor-pointer ${
                    isHovered ? "hover-glow" : ""
                }`}
                style={{ backgroundImage: `url(${heroBackground})` }}
                onClick={handleBoxClick}
                onMouseEnter={() => setIsHovered(true)} // Trigger hover state
                onMouseLeave={() => setIsHovered(false)} // Reset to normal
                animate={{ scale: isHovered ? 1.05 : 1 }} // Control scale dynamically
                transition={{ type: "spring", stiffness: 300 }}
                aria-label="Start the Journey"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <motion.h2
                        className="text-2xl md:text-4xl font-bold text-gold"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Start the Journey
                    </motion.h2>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import heroBackground from "../assets/movie-bg.jpg";

const HeroSection: React.FC = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);

    const fadeIn = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    // Ripple animation for clicks
    const handleBoxClick = () => {
        navigate("/project-introduction");
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
                className={`relative w-full max-w-lg h-64 md:h-80 bg-cover bg-center rounded-lg shadow-strong overflow-hidden transform transition-transform cursor-pointer ${
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
                        className="text-2xl md:text-4xl font-bold text-white"
                        whileHover={{ scale: 1.1 }} // Slight text scale on hover
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

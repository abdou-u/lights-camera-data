import React, {useState} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

const Prologue: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleText = () => setIsOpen(!isOpen);

  const chapters = [
    { title: "Chapter 1: What is Success?", route: "/chapter1" },
    { title: "Chapter 2: Timing Is Everything", route: "/chapter2" },
    { title: "Chapter 3: The Genre Game: Trends That Shape Tastes", route: "/chapter3" },
    { title: "Chapter 4: Too Short, Too Long, or Just Right?", route: "/chapter4" },
    { title: "Chapter 5: Languages: Stories That Speak to Everyone", route: "/chapter5" },
    { title: "Chapter 6: Who Brings the Magic: The Youth Advantage vs. Timeless Talent", route: "/chapter6" },
    { title: "Chapter 7: Redefining the Spotlight", route: "/chapter7" },
    { title: "Chapter 8: Faces That Fill Seats", route: "/chapter8" },
    { title: "Chapter 9: Emotions Behind the Words", route: "/chapter9" },
    { title: "Chapter 10: When Movies Break the Mold", route: "/chapter10" },
    { title: "Chapter 11: The Formula for Success: From Data to Blockbuster", route: "/chapter11" },
    { title: "Epilogue: The Final Scene", route: "/epilogue" },
  ];

  return (
    <PageWrapper>
      {/* Prologue Section */}
      <section className="hero bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-glow mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Once Upon a Data Set...
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-light max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            In a world of glitz and glamour, hidden within the numbers, lies the secret to cinematic success. Journey with us as we uncover the data-driven magic behind the silver screen.
          </motion.p>

          {/* Interactive Arrow */}
          <div className="mt-10 flex justify-center">
            <motion.div
              className="w-10 h-10 bg-gold rounded-full flex items-center justify-center cursor-pointer hover:scale-110 shadow-glow transition-transform"
              onClick={toggleText}
              whileHover={{ scale: 1.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className={`w-6 h-6 transform transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>

          {/* Hidden Text Block*/}
          {isOpen && (
            <motion.div
              className="mt-6 bg-dark text-white p-6 rounded-lg max-w-3xl mx-auto shadow-strong"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              >
              <p className="text-sm md:text-base leading-relaxed font-sans">
              We invite you to embark on a journey through the history and evolution of cinema — from the silent black-and-white classics to the thrilling blockbusters of today. Together, we'll uncover the trends that have shaped the movie industry, explore the genres that have captured audiences' hearts, and celebrate the stars who brought these stories to life. Using the rich insights of the{" "}
              <a
                href="https://www.cs.cmu.edu/~ark/personas/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-accent"
              >
                CMU Movie Summary Corpus
              </a>
              , we'll reveal the data-driven secrets behind cinematic success. So, grab your popcorn, sit back, and let the show begin!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-neutral text-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-center mb-10 text-glow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Story Begins
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Interactive Chapter Cards */}
            {chapters.map((item, index) => (
              <motion.div
                key={index}
                className="bg-dark p-6 rounded-lg shadow-strong hover-glow transform hover:scale-105 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => navigate(item.route)}
              >
                <h3 className="text-lg font-bold text-gold mb-2">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Prologue;
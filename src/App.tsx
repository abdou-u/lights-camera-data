import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"; // Toast styles

// Lazy-loaded Pages
const Home = lazy(() => import("./pages/Home"));
const TeamSection = lazy(() => import("./pages/TeamSection"));
const Predict = lazy(() => import("./pages/Predict"));
const Prologue = lazy(() => import("./pages/Prologue"));
const Chapter1 = lazy(() => import("./pages/chapters/Chapter1"));
const Chapter2 = lazy(() => import("./pages/chapters/Chapter2"));
const Chapter3 = lazy(() => import("./pages/chapters/Chapter3"));
const Chapter4 = lazy(() => import("./pages/chapters/Chapter4"));
const Chapter5 = lazy(() => import("./pages/chapters/Chapter5"));
const Chapter6 = lazy(() => import("./pages/chapters/Chapter6"));
const Chapter7 = lazy(() => import("./pages/chapters/Chapter7"));
const Chapter8 = lazy(() => import("./pages/chapters/Chapter8"));
const Chapter9 = lazy(() => import("./pages/chapters/Chapter9"));
const Chapter10 = lazy(() => import("./pages/chapters/Chapter10"));
const Chapter11 = lazy(() => import("./pages/chapters/Chapter11"));
const Epilogue = lazy(() => import("./pages/Epilogue"));

// Components
import ScrollToTop from "./components/ScrollToTop";

// Fallback Loader
const Loader = () => (
    <div className="flex items-center justify-center h-screen bg-neutral text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary"></div>
    </div>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<Loader />}>
                <AnimatePresence mode="wait">
                    <Routes>
                        {/* Home Page */}
                        <Route path="/" element={<DynamicTitle title="Home | A Cinematic Fairy Tale Journey"><Home /></DynamicTitle>} />
                            
                        {/* Chapters */}
                        <Route path="/prologue" element={<DynamicTitle title="Lights, Camera, Data!"><Prologue /></DynamicTitle>} />
                        <Route path="/chapter1" element={<DynamicTitle title="Chapter 1: What is Success"><Chapter1 /></DynamicTitle>} />
                        <Route path="/chapter2" element={<DynamicTitle title="Chapter 2: Timing Is Everything"><Chapter2 /></DynamicTitle>} />
                        <Route path="/chapter3" element={<DynamicTitle title="Chapter 3: The Genre Game: Trends That Shape Tastes"><Chapter3 /></DynamicTitle>} />
                        <Route path="/chapter4" element={<DynamicTitle title="Chapter 4: Too Short, Too Long, or Just Right?"><Chapter4 /></DynamicTitle>} />
                        <Route path="/chapter5" element={<DynamicTitle title="Chapter 5: Languages: Stories That Speak to Everyone"><Chapter5 /></DynamicTitle>} />
                        <Route path="/chapter6" element={<DynamicTitle title="Chapter 6: Who Brings the Magic: The Youth Advantage vs. Timeless Talent"><Chapter6 /></DynamicTitle>} />
                        <Route path="/chapter7" element={<DynamicTitle title="Chapter 7: Redefining the Spotlight"><Chapter7 /></DynamicTitle>} />
                        <Route path="/chapter8" element={<DynamicTitle title="Chapter 8: Faces That Fill Seats"><Chapter8 /></DynamicTitle>} />
                        <Route path="/chapter9" element={<DynamicTitle title="Chapter 9: Emotions Behind the Words"><Chapter9 /></DynamicTitle>} />
                        <Route path="/chapter10" element={<DynamicTitle title="Chapter 10: When Movies Break the Mold"><Chapter10 /></DynamicTitle>} />
                        <Route path="/chapter11" element={<DynamicTitle title="Chapter 11: The Formula for Success: From Data to Blockbuster"><Chapter11 /></DynamicTitle>} />
                        <Route path="/epilogue" element={<DynamicTitle title="Epilogue: The Final Scene"><Epilogue /></DynamicTitle>} />
                            
                        {/* Additional Pages */}
                        <Route path="/predict" element={<DynamicTitle title="Predict Movie Success"><Predict /></DynamicTitle>} />
                        <Route path="/team" element={<DynamicTitle title="Meet the Team"><TeamSection /></DynamicTitle>} />
                    </Routes>
                </AnimatePresence>
            </Suspense>
        </Router>
    );
}

// DynamicTitle Wrapper for document title updates
const DynamicTitle: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
    React.useEffect(() => {
        document.title = title;
    }, [title]);

    return <>{children}</>;
};

export default App;

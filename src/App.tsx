import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css"; // Toast styles

// Lazy-loaded Pages
const Home = lazy(() => import("./pages/Home"));
const TeamSection = lazy(() => import("./pages/TeamSection"));
const About = lazy(() => import("./pages/About"));
const Explore = lazy(() => import("./pages/Explore"));
const Predict = lazy(() => import("./pages/Predict"));
const ProjectIntroduction = lazy(() => import("./components/ProjectIntroduction"));

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
                        {/* Main Pages */}
                        <Route path="/" element={<DynamicTitle title="Home | Lights, Camera, Data!"><Home /></DynamicTitle>} />
                        <Route path="/team" element={<DynamicTitle title="Meet the Team"><TeamSection /></DynamicTitle>} />
                        <Route path="/about" element={<DynamicTitle title="About Us"><About /></DynamicTitle>} />
                        <Route path="/explore" element={<DynamicTitle title="Explore Data Insights"><Explore /></DynamicTitle>} />
                        <Route path="/predict" element={<DynamicTitle title="Predict Movie Success"><Predict /></DynamicTitle>} />
                        <Route path="/project-introduction" element={<DynamicTitle title="Project Introduction"><ProjectIntroduction /></DynamicTitle>} />
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

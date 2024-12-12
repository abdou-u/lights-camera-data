import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  backgroundImage?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, title, backgroundImage }) => {
  return (
    <div
      className={`flex flex-col min-h-screen ${
        backgroundImage
          ? "bg-cover bg-center"
          : "bg-gradient-to-br from-gray-900 via-black to-gray-800"
      } text-white`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Header/Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="flex-grow pt-20 px-4 sm:px-8 lg:px-16 relative">
        {backgroundImage && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> /* Subtle overlay */
        )}
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary text-cinematic">
            {title}
          </h1>
        )}
        <div className="relative z-10">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PageWrapper;

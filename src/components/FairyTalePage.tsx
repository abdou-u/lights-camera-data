import React from "react";
import PageWrapper from "./PageWrapper";

interface FairyTalePageProps {
  title: string;
  children: React.ReactNode;
}

const FairyTalePage: React.FC<FairyTalePageProps> = ({ title, children }) => {
  return (
    <PageWrapper>
      <section className="py-16 bg-cinematic-gradient text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-glow mb-6">{title}</h1>
          <div className="mt-10">{children}</div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default FairyTalePage;

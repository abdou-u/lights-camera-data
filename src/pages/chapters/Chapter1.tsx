import React from "react";
import FairyTalePage from "../../components/FairyTalePage";
import InteractiveGenres from "../../components/InteractiveGenres";
import data from "../../assets/genres_data.json";

const Chapter1: React.FC = () => {
  return (
    <FairyTalePage title="CHAPTER 1: WHAT IS SUCCESS?">
      {/* Text Content */}
      <div className="text-lg text-light max-w-3xl mx-auto leading-relaxed mb-12">
        <p>
          In the world of cinema, success can take many forms. A movie might be
          <span className="text-accent font-semibold"> beloved by its audience</span>,
          <span className="text-accent font-semibold"> celebrated by critics</span>, or honored with prestigious awards — even if it doesn’t make a fortune. But for our
          story, we’re zeroing in on a single, tangible metric:{" "}
          <span className="text-primary font-bold">box office revenue</span>.
        </p>
        <p className="mt-6">
          Why focus on revenue? Because it’s a universal measure of a film’s
          financial performance, reflecting its ability to{" "}
          <span className="text-accent font-semibold">draw audiences</span> and{" "}
          <span className="text-accent font-semibold">generate profit</span>. Yet, we acknowledge that this is just one lens
          through which to view success. A movie's cultural impact, emotional
          resonance, and artistic achievements often go far beyond the numbers.
        </p>
        <p className="mt-6">
          By analyzing box office revenue, we aim to uncover the financial
          factors that drive cinematic triumphs — all while keeping in mind
          that <span className="italic">true success is more than just dollars and cents.</span>
        </p>
      </div>

      {/* Interactive Visualization */}
      <div className="bg-dark py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl font-bold text-light mb-8">
            Explore Movie Genres Revenu
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Use the slider below to select the number of top genres displayed in the interactive chart. 
            Hover over each bar to learn more about the genre's performance.
          </p>
          <InteractiveGenres data={data} />
        </div>
      </div>
    </FairyTalePage>
  );
};

export default Chapter1;

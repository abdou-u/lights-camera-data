// src/components/InteractivePlot.tsx
import React from "react";
import Plot from "react-plotly.js";

interface InteractivePlotProps {
  data: any;
  layout: any;
}

const InteractivePlot: React.FC<InteractivePlotProps> = ({ data, layout }) => {
  return (
    <div className="mt-8 w-full bg-neutral p-4 rounded-lg shadow-strong">
      <Plot data={data} layout={layout} />
    </div>
  );
};

export default InteractivePlot;
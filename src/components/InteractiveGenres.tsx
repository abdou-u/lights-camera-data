import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface GenreData {
  genre: string;
  count: number;
  mean: number;
  sem: number;
}

const InteractiveGenres: React.FC<{ data: GenreData[] }> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [topX, setTopX] = useState(10); // Default top 10 genres

  useEffect(() => {
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 80, left: 80 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Sort and filter data
    const filteredData = [...data]
      .sort((a, b) => b.count - a.count)
      .slice(0, topX)
      .sort((a, b) => b.mean - a.mean);

    // Scales
    const xScale = d3
      .scaleBand()
      .domain(filteredData.map((d) => d.genre))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(filteredData, (d) => d.mean + d.sem) || 0])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Clear previous content
    svg.selectAll("*").remove();

    // Axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end")
      .style("fill", "white")
      .style("font-size", "12px");

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale))
      .selectAll("text")
      .style("fill", "white")
      .style("font-size", "12px");

    // Bars
    svg
      .selectAll(".bar")
      .data(filteredData)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.genre)!)
      .attr("y", (d) => yScale(d.mean))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => yScale(0) - yScale(d.mean))
      .attr("fill", "steelblue")
      .on("mouseover", (event, d) => {
        d3.select(event.target).attr("fill", "var(--accent-color)");
        tooltip
          .style("opacity", 1)
          .html(
            `<strong>${d.genre}</strong><br>Count: ${d.count}<br>Mean: $${d.mean.toLocaleString()}<br>SEM: $${d.sem.toLocaleString()}`
          )
          .style("left", `${event.pageX + 5}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", (event) => {
        d3.select(event.target).attr("fill", "steelblue");
        tooltip.style("opacity", 0);
      });

    // Error Bars
    svg
      .selectAll(".error-bar")
      .data(filteredData)
      .join("line")
      .attr("class", "error-bar")
      .attr("x1", (d) => xScale(d.genre)! + xScale.bandwidth() / 2)
      .attr("x2", (d) => xScale(d.genre)! + xScale.bandwidth() / 2)
      .attr("y1", (d) => yScale(d.mean - d.sem))
      .attr("y2", (d) => yScale(d.mean + d.sem))
      .attr("stroke", "white")
      .attr("stroke-width", 1.5);

    // Tooltip
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.8)")
      .style("color", "white")
      .style("padding", "10px")
      .style("border-radius", "8px")
      .style("pointer-events", "none");
  }, [data, topX]);

  return (
    <div className="mt-8 p-4 bg-dark rounded-lg shadow-strong">
      <div className="flex flex-col items-center mb-6">
        <label
          htmlFor="topX"
          className="text-lg text-primary font-semibold mb-2"
        >
          Select Top Genres: {topX}
        </label>
        <input
          type="range"
          id="topX"
          min="1"
          max="20"
          value={topX}
          onChange={(e) => setTopX(Number(e.target.value))}
          className="w-full md:w-1/2"
        />
      </div>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default InteractiveGenres;

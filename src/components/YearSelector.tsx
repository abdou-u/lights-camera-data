// src/components/YearSelector.tsx
import React from "react";

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
  onChange: (year: number) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({ years, selectedYear, onChange }) => {
  return (
    <div className="mt-4 flex justify-center">
      <select
        value={selectedYear}
        onChange={(e) => onChange(Number(e.target.value))}
        className="bg-dark text-white px-4 py-2 rounded-lg border border-gray-600"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;

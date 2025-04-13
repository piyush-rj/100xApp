"use client";

import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className={`w-full max-w-md ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-5 py-2 rounded-full bg-gray-500 dark:bg-[#2c2c2c] text-sm text-gray-200 focus:outline-none focus-ring-2 focus:ring-gray-600 hover:border-gray-600 shadow-sm transition-all duration-150"
      />
    </div>
  );
};

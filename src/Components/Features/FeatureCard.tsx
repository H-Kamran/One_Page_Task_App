import React from "react";
import "./FeatureCard.css";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function Features({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="feature flex flex-col items-center bg-white p-6 m-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-1/3 text-center border border-gray-300">
      <img
        src={icon}
        alt={`${title} icon`}
        className="feature-icon w-50 h-50 object-contain mb-4"
      />
      <h2 className="feature-title mb-4 text-xl">{title}</h2>
      <p className="feature-description text-gray-500 text-sm">{description}</p>
    </div>
  );
}

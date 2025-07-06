import React from "react";

interface StarsProps {
  rate: number;
}

const Stars = ({ rate }: StarsProps) => {
  const totalStars = 5;
  const filledStars = Math.min(Math.max(rate, 0), totalStars);

  return (
    <div className="flex ml-5">
      {Array.from({ length: totalStars }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < filledStars ? "yellow" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="w-6 h-6 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Stars;

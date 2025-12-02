import React from 'react'
import { Star } from "lucide-react";

type ProductCardProps = {
  src: string;
  alt?: string;
  title: string;
  rating: number; // ⭐⭐⭐⭐☆
  initialRating?: number;
  amount: string; // price
};

import { useState } from "react";


type StarRatingProps = {
  value?: number;                 // initial value
  onChange?: (value: number) => void; // notify parent (optional)
};

export const StarRating = ({ value = 0, onChange }: StarRatingProps) => {
  const [current, setCurrent] = useState(value);
  const [hovered, setHovered] = useState(0);

  const handleClick = (rating: number) => {
    setCurrent(rating);
    onChange?.(rating); // call parent if provided
  };

  const displayValue = hovered || current;

  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const ratingValue = i + 1;

        return (
          <Star
            key={ratingValue}
            size={18}
            className={
              ratingValue <= displayValue
                ? "text-yellow-400 fill-yellow-400 cursor-pointer"
                : "text-gray-300 cursor-pointer"
            }
            onMouseEnter={() => setHovered(ratingValue)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => handleClick(ratingValue)}
          />
        );
      })}
    </div>
  );
};



function Product_card({ src, alt, title, initialRating = 0, amount }: ProductCardProps) {
    const [rating, setRating] = useState(initialRating);
  return (
<div className="main">
    <div className="image_section bg-amber-600 h-60 w-50 rounded-xl">
      <img src={src} alt={alt} />
    </div>
    <div className="headers">
      <h2>{title}</h2>
        {/* ⭐ clickable rating */}
        <StarRating value={rating} onChange={setRating} />
      <h3>{amount}</h3>
    </div>
</div>  
)
}

export default Product_card
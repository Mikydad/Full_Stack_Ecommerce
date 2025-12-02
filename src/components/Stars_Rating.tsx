import React from 'react'
import { useState } from 'react';
import { Star } from "lucide-react";

type StarRatingProps = {
  value?: number;                 // initial value
  onChange?: (value: number) => void; // notify parent (optional)
};

export const Stars_Rating = ({ value = 0, onChange }: StarRatingProps) => {
  const [current, setCurrent] = useState(value);
  const [hovered, setHovered] = useState(0);
  const displayValue = hovered || current;

  return (
    <div className='main_rating_container'>
        { Array.from({ length: 5 }).map((_, i) => {
                    const ratingValue = i + 1;

            return(
                <Star key={ratingValue} size={18} className={
                    ratingValue <= displayValue ? "text-yellow-400 fill-yellow-400"
                }
            )
        }) }
    
    </div>
  )
}


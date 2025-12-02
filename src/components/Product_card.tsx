import React from 'react'
import { Star } from "lucide-react";

type ProductCardProps = {
  src: string;
  alt?: string;
  title: string;
  rating: number; // ⭐⭐⭐⭐☆
  amount: string; // price
};

const Stars = ({ value }: { value: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < value
              ? "text-yellow-400 fill-yellow-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  );
};


function Product_card({ src, alt, title, rating, amount }: ProductCardProps) {
  return (
<div className="main">
    <div className="image_section bg-amber-600 h-60 w-50 rounded-xl">
      <img src={src} alt={alt} />
    </div>
    <div className="headers">
      <h2>{title}</h2>
        <Stars value={rating} />
      <h3>Amount</h3>
    </div>
</div>  
)
}

export default Product_card
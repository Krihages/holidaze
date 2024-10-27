"use client";
import { useState } from "react";
import { Star as StarIcon } from "@/components/icons";
import { ColorTypes } from "@/lib/helpers";

type StarRatingProps = {
  maxStars?: number;

  color?: ColorTypes;
};

type StarProps = {
  starNumber: number;
  rating: number;
  setRating: (rating: number) => void;
  setTempRating: (rating: number) => void;
  color?: ColorTypes;
};

export default function StarRating({
  maxStars = 5,
  color = "info",
}: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">Rating</h3>
      <div className="flex items-center  w-full">
        {Array.from({ length: maxStars }, (_, i) => (
          <Star
            starNumber={i + 1}
            key={i}
            rating={tempRating > 0 ? tempRating : rating}
            setRating={setRating}
            setTempRating={setTempRating}
            color={color}
          />
        ))}
        <span className={`ml-2 text-xl  font-semibold`}>
          {tempRating > 0 ? tempRating : rating}
        </span>
      </div>
    </div>
  );
}

// SINGLE STAR COMPONENT
function Star({
  starNumber,
  rating,
  setRating,
  setTempRating,
  color = "info",
}: StarProps) {
  const handleMouseEnter = () => setTempRating(starNumber);
  const handleMouseLeave = () => setTempRating(0);
  const handleClick = () => setRating(starNumber);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <StarIcon color={color} filled={starNumber <= rating} />
    </div>
  );
}

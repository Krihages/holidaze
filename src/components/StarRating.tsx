"use client";
import { useState } from "react";
import { Star as StarIcon } from "@/components/icons";
import { ColorTypes } from "@/lib/helpers";

type StarRatingProps = {
  maxStars?: number;
  rating: number;
  setRating: (rating: number) => void;
  color?: ColorTypes;
};

type StarProps = {
  starNumber: number;
  rating: number;
  setRating: (rating: number) => void;
  setTempRating: (rating: number) => void;
  color?: ColorTypes;
};

/**
 * A star rating component that allows users to rate by clicking on stars
 * @param {Object} props - The component props
 * @param {number} [props.maxStars=5] - Maximum number of stars to display
 * @param {ColorTypes} [props.color="info"] - Color theme for the stars
 * @param {number} props.rating - Current rating value
 * @param {function} props.setRating - Function to update the rating
 * @returns {JSX.Element} A star rating component
 */
export default function StarRating({
  maxStars = 5,
  color = "info",
  rating,
  setRating,
}: StarRatingProps) {
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

/**
 * Individual star component used within StarRating
 * @param {Object} props - The component props
 * @param {number} props.starNumber - The position number of this star
 * @param {number} props.rating - Current rating value
 * @param {function} props.setRating - Function to update the rating
 * @param {function} props.setTempRating - Function to update temporary rating on hover
 * @param {ColorTypes} [props.color="info"] - Color theme for the star
 * @returns {JSX.Element} A single star component
 */
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

import { ColorTypes, getColors } from "@/lib/helpers";

export default function SearchIcon({
  size = 24,
  color = "primary",
}: {
  size?: number;
  color?: ColorTypes;
}) {
  const { icon } = getColors(color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      stroke={icon}
      height={size}
      width={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        fill="none"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

import { ColorTypes, getColors } from "@/lib/helpers";

export default function CheckmarkIcon({
  color = "success",
  size = 24,
}: {
  color?: ColorTypes;
  size?: number;
}) {
  const { icon } = getColors(color);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke={icon}
      width={size}
      height={size}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

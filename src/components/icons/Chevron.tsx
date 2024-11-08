import { ColorTypes, getColors } from "@/lib/helpers";

export function ChevronDown({
  size = 14,
  color = "none",
}: {
  size?: number;
  color?: ColorTypes;
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
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function ChevronUp({
  size = 14,
  color = "none",
}: {
  size?: number;
  color?: ColorTypes;
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
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  );
}

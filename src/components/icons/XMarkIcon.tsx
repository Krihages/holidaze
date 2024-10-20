import { ColorTypes, getColors } from "@/lib/helpers";

export default function XMarkIcon({
  size = 24,
  color = "default",
}: {
  size?: number;
  color?: ColorTypes;
}) {
  const { icon } = getColors(color);

  return (
    <svg
      data-slot="icon"
      fill="none"
      stroke={icon}
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
        strokeWidth="2"
      ></path>
    </svg>
  );
}

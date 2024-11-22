import { cn } from "@/lib/utils";
import { getColors, ColorTypes } from "@/lib/helpers";
/*
    For adding a predefined style to a section (max-w, padding/margin, colors etc)
*/
type SectionProps = {
  variant?: ColorTypes;
  children: React.ReactNode;
  className?: string;
};
export default function Section({
  variant = "none",
  children,
  className,
}: SectionProps) {
  const colors = getColors(variant);

  return (
    <section
      className={cn(colors.bg, colors.text, "px-2 sm:px-4 py-10", className)}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

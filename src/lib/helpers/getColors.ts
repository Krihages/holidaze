export type ColorTypes =
  | "default"
  | "reverse"
  | "primary"
  | "secondary"
  | "muted"
  | "none"
  | "destructive"
  | "info"
  | "success";

export function getColors(variant: ColorTypes) {
  const colors = {
    default: {
      bg: "bg-background",
      text: "text-foreground",
      icon: "hsl(var(--foreground))",
    },
    reverse: {
      bg: "bg-foreground",
      text: "text-background",
      icon: "hsl(var(--background))",
    },
    primary: {
      bg: "bg-primary",
      text: "text-primary-foreground",
      icon: "hsl(var(--primary))",
    },
    secondary: {
      bg: "bg-secondary",
      text: "text-secondary-foreground",
      icon: "hsl(var(--secondary-foreground))",
    },
    muted: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      icon: "hsl(var(--muted-foreground))",
    },
    destructive: {
      bg: "bg-destructive",
      text: "text-destructive-foreground",
      icon: "hsl(var(--destructive))",
    },
    info: {
      bg: "bg-info",
      text: "text-info-foreground",
      icon: "hsl(var(--info-foreground))",
    },
    success: {
      bg: "bg-success",
      text: "text-success-foreground",
      icon: "hsl(var(--success))",
    },
    none: {
      bg: "",
      text: "",
      icon: "",
    },
  };

  return colors[variant as keyof typeof colors];
}

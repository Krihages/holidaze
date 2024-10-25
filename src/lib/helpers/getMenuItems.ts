import { MenuItems } from "@/types/MenuItems";

type User =
  | {
      manager: boolean;
      name: string;
      token: string;
    }
  | false;

export default function getMenuItems(user: User) {
  const menuItems = [
    { label: "Home", href: "/", type: "link" },
    { label: "Venues", href: "/venues", type: "link" },
    { label: "Contact", href: "/contact", type: "link" },
  ] as MenuItems[];

  if (!user) {
    menuItems.push({ label: "Login", type: "button" });
    menuItems.push({ label: "Register", type: "button" });
  }

  if (user) {
    menuItems.push({ label: "Profile", href: "/profile", type: "link" });
    if (user.manager) {
      menuItems.push({
        label: "Venue Manager",
        href: "/venue-manager",
        type: "link",
      });
    }
    menuItems.push({ label: "Logout", type: "button", action: "logout" });
  }

  return menuItems;
}

export type MenuItems = {
  label:
    | "Home"
    | "Profile"
    | "Logout"
    | "Login"
    | "Register"
    | "Bookings"
    | "Venue Manager"
    | "Add Venue"
    | "Contact";
  href?: string;
  type?: "button" | "link";
  action?: "logout";
};

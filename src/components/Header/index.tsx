import LoggedOut from "./LoggedOut";
import LoggedIn from "./LoggedIn";
import cookies from "@/lib/cookies";
import Link from "next/link";

export default function Header() {
  const token = cookies.get("auth_token");
  const manager = cookies.get("venue_manager");
  const profileName = cookies.get("profile_name");

  return (
    <header className="flex justify-between items-center p-4 max-w-7xl w-full mx-auto">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/venues">Venues</Link>
      </nav>
      {token && manager && profileName ? <LoggedIn /> : <LoggedOut />}
    </header>
  );
}

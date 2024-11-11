export const dynamic = "force-dynamic";

import cookies from "@/lib/cookies";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

export default function Header(): JSX.Element {
  const user = cookies.checkUser();

  return (
    <header>
      <div className="p-4 bg-primary-light text-primary-foreground">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <Logo />
          <div className="flex gap-4 items-center">
            {user ? (
              <LoggedIn
                name={user.profileName}
                avatar={user.profileAvatar}
                manager={user.manager}
              />
            ) : (
              <LoggedOut />
            )}
          </div>
        </div>
      </div>
      <Searchbar />
    </header>
  );
}

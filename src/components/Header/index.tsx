import cookies from "@/lib/cookies";
import getMenuItems from "@/lib/helpers/getMenuItems";

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Logo from "./Logo";
import Nav from "./Nav";
import Searchbar from "./Searchbar";

type User =
  | {
      manager: boolean;
      name: string;
      token: string;
    }
  | false;

export default function Header() {
  const user = cookies.checkUser();
  const menuItems = getMenuItems(user as User);

  return (
    <header>
      <div className="p-4 bg-primary-light text-primary-foreground">
        <div className="flex justify-between items-center  w-full  max-w-7xl mx-auto">
          <Logo />
          <Nav />
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

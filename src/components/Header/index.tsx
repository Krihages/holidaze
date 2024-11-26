import cookies from "@/lib/cookies";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

import SearchMobile from "./Searchbar/SearchMobile";
export default function Header(): JSX.Element {
  const user = cookies.checkUser();

  return (
    <header>
      <div className="py-4 px-2 sm:px-4 bg-primary-light text-primary-foreground">
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <Logo />
          <div className="flex gap-4 items-center">
            <SearchMobile />
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
      </div>
      <div className="max-lg:hidden max-lg:w-full">
        <Searchbar />
      </div>
    </header>
  );
}

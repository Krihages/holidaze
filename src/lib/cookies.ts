import { setCookie, getCookie, deleteCookie, getCookies } from "cookies-next";
import { cookies as nextCookies } from "next/headers";

const isServer = typeof window === "undefined";

const cookies = {
  set: function set(name: string, value: string) {
    if (isServer) {
      nextCookies().set(name, value);
    } else {
      setCookie(name, value);
    }
  },

  get: function get(name: string) {
    if (isServer) {
      const value = nextCookies().get(name)?.value;

      return value;
    } else {
      const value = getCookie(name);
      return value;
    }
  },
  remove: function removeCookie(name: string) {
    if (isServer) {
      nextCookies().delete(name);
    } else {
      deleteCookie(name);
    }
  },

  clear: function clearAll() {
    if (isServer) {
      console.warn("Clearing all cookies is not supported on the server side");
    } else {
      const cookieList = getCookies();
      Object.keys(cookieList).forEach((cookieName) => {
        deleteCookie(cookieName);
      });
    }
  },

  checkUser: function checkUser() {
    const token = cookies.get("auth_token") as string | undefined;
    let manager = cookies.get("venue_manager") as boolean | string | undefined;
    const profileName = cookies.get("profile_name") as string | undefined;
    const profileAvatar = cookies.get("profile_avatar") as string | undefined;
    if (manager === "true") {
      manager = true;
    }
    if (manager === "false") {
      manager = false;
    }
    if (
      token &&
      (manager === true || manager === false) &&
      profileName &&
      profileAvatar
    ) {
      return { token, manager, profileName, profileAvatar };
    }
    return false;
  },
};

export default cookies;

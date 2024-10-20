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
};

export default cookies;

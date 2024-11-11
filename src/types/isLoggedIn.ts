type IsLoggedIn =
  | false
  | {
      profileName: string;
      token: string;
      manager: boolean;
      profileAvatar: string;
    };

export default IsLoggedIn;

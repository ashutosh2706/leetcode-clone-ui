import { createContext,  Dispatch, SetStateAction } from "react";
import { UserProfileData } from "../types/userProfile";

interface LoginContext {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
    profileData: UserProfileData;
    setProfileData: Dispatch<SetStateAction<UserProfileData>>;
}

export const LoginContext = createContext<LoginContext>({
    isLoggedIn: false,
    setIsLoggedIn: () => {},
    profileData: {
        username: "",
        email: "",
        avatarUrl: "",
    },
    setProfileData: () => {},
})
import { FormEvent, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../../contexts/loginContext";

export default function SignIn() {

    const {setIsLoggedIn, setProfileData} = useContext(LoginContext);
    const navigate = useNavigate();

    function handleSignIn(e: FormEvent) {
        // save cookie
        e.preventDefault();
        console.log(e);
        setIsLoggedIn(true);    
        // get profile data from api
        setProfileData({
            username: "ashutosh2706",
            email: "ashutosh2706@email",
            avatarUrl: "/default_avatar.jpg",
        })
        navigate("/");
    }

    return (
        <>
            <form className="px-2 pb-4" onSubmit={handleSignIn}>
                <div className="space-y-5">
                    <input type="text" name="email" id="email" className="border font-light text-sm border-gray-300 outline-none w-full h-10 py-2 px-4 focus:border-gray-500" placeholder="Username or E-mail" required/>
                    <input type="password" name="password" id="password" className="border font-light text-sm border-gray-300 outline-none w-full h-10 py-2 px-4 focus:border-gray-500" placeholder="Password" required/>
                    <button type="submit" className="border font-light text-sm text-white h-10 py-2 px-4 bg-[#4a616b] w-full cursor-pointer hover:bg-[#5a7683] transition duration-300 ease-in-out">Sign In</button>
                </div>
            </form>
            <div className="flex items-center justify-between mt-2 px-2 mb-10">
                <Link to="/reset-password" className="font-base text-sm text-[#4a616b] cursor-pointer">Forgot Password?</Link>
                <Link to="/signup" className="font-base text-sm text-[#4a616b] cursor-pointer">SignUp</Link>
            </div>
        </>
    )
}
import { Link } from "react-router-dom"

export default function SignUp() {

    return (
        <>
            <form className="px-2 pb-4">
                <div className="space-y-5">
                    <input type="text" name="username" id="username" className="border font-light text-sm border-gray-300 outline-none w-full h-10 py-2 px-4 focus:border-gray-500" placeholder="Username" required />
                    <input type="password" name="password" id="password" className="border font-light text-sm border-gray-300 outline-none w-full h-10 py-2 px-4 focus:border-gray-500" placeholder="Password" required />
                    <input type="password" name="confirm-password" id="confirm-password" className="border font-light text-sm border-gray-300 outline-none w-full h-10 py-2 px-4 focus:border-gray-500" placeholder="Confirm Password" required />
                    <input type="email" name="email" id="email" className="border font-light text-sm border-gray-300 outline-none w-full h-10 py-2 px-4 focus:border-gray-500" placeholder="Email" required />
                    <button type="submit" className="border font-light text-sm text-white h-10 py-2 px-4 bg-[#4a616b] w-full cursor-pointer hover:bg-[#5a7683] transition duration-300 ease-in-out">Sign Up</button>
                </div>
            </form>
            <div className="flex items-center justify-center mt-2 px-2 mb-10">
                <Link to="/signin" className="font-light text-sm text-gray-400 cursor-default">Have an account?&nbsp;&nbsp;<span className="text-[#4a616b] font-normal cursor-pointer">Sign In</span></Link>
            </div>
        </>
    )
}
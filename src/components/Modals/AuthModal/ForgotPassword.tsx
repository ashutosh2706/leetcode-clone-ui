export default function ForgotPassword() {
    return (
        <>
            <form className="px-2 pb-4">
                <div className="space-y-5">
                    <div className="border rounded-lg border-yellow-300 p-4 bg-yellow-100">
                    <label htmlFor="email" className="text-gray-500 font-light text-sm">Forgot your password? Enter your email below to get the password reset link</label>
                    </div>
                    <input type="email" name="email" id="email" className="border font-light text-sm border-gray-300 outline-none w-full h-10 py-2 px-4 focus:border-gray-500" placeholder="E-mail Address" required />
                    <button type="submit" className="border font-light text-sm rounded-lg text-white h-10 py-2 px-4 bg-[#49c04f] w-[50%] hover:bg-[#318335] cursor-pointer transition duration-300 ease-in-out">Reset My Password</button>
                </div>
            </form>
        </>
    )
}
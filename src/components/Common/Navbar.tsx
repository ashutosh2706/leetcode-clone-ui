import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between sm:px-12 px-2 md:px-24 bg-dark-layer-1 h-16">
            <Link to="/" className="flex items-center justify-center h-20">
                <img src="/logo-full.png" alt="LeetClone" width={100} height={100} />
            </Link>
            <div className="flex items-center">
                <button className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange transition duration-300 ease-in-out border-2 border-transparent"
                    onClick={() => navigate("/signin")}>
                    Sign In
                </button>
            </div>
        </div>
    )
}
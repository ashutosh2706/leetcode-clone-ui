import { useNavigate } from "react-router";
import HomeBanner from "../components/Common/HomeBanner";
import Navbar from "../components/Common/Navbar";

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
            <div className="mx-w-7xl mx-auto">
                <Navbar />
                <HomeBanner />
                <div className="flex items-center justify-center w-full mt-10">
                <button className="bg-brand-orange text-white py-1 sm:px-4 rounded-md text-base font-light hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange transition duration-300 ease-in-out border-2 border-transparent"
                    onClick={() => navigate("/problemset")}>
                    View all problems
                </button>
                </div>
            </div>
        </div>
    )
}
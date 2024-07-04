import { Link, useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight, List, LogOut } from "lucide-react"
import { useContext } from "react";
import { LoginContext } from "../../contexts/loginContext";
import Timer from "./Timer";

interface ToolbarProps {
    problemPage?: boolean;
}

export default function Toolbar({ problemPage }: ToolbarProps) {

    const { isLoggedIn, profileData,setIsLoggedIn } = useContext(LoginContext);
    const navigate = useNavigate();

    return (
        <>
            <nav className='relative flex h-[60px] w-full shrink-0 items-center px-10 bg-dark-layer-1 text-dark-gray-7'>
                <div className={`flex w-full items-center justify-between ${!problemPage ? "max-w-[1200px] mx-auto" : ""}`}>
                    <Link to='/' className='h-[22px] flex-1'>
                        <img src='/logo-full.png' alt='Logo' height={100} width={100} />
                    </Link>

                    {problemPage && (
                        <div className='flex items-center gap-4 flex-1 justify-center'>
                            <div
                                className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                                onClick={() => alert("clicked: TopBar:21")}
                            >
                                <ChevronLeft />
                            </div>
                            <Link
                                to='/'
                                className='flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer'
                            >
                                <div>
                                    <List />
                                </div>
                                <p>Problem List</p>
                            </Link>
                            <div
                                className='flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer'
                                onClick={() => alert("clicked: TopBar:36")}
                            >
                                <ChevronRight />
                            </div>
                        </div>
                    )}

                    <div className='flex items-center space-x-4 flex-1 justify-end'>
                        <div>
                            <a
                                href='https://www.github.com/ashutosh2706'
                                target='_blank'
                                rel='noreferrer'
                                className='bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-brand-orange hover:bg-dark-fill-2'
                            >
                                Premium
                            </a>
                        </div>
                        {!isLoggedIn && (
                            <Link to='/signin'>
                                <button className='bg-dark-fill-3 py-1 px-2 cursor-pointer rounded hover:bg-dark-fill-2 '>Sign In</button>
                            </Link>
                        )}
                        {isLoggedIn && problemPage && <Timer />}
                        {isLoggedIn && (
                            <div className='cursor-pointer group relative'>
                                <img src={profileData.avatarUrl} alt='Avatar' width={30} height={30} className='rounded-full' draggable={false} onClick={() => {
                                    navigate(`/user/${profileData.username}`);
                                }} />
                                <div
                                    className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-dark-label-2 p-2 rounded shadow-lg 
								z-40 group-hover:scale-100 scale-0 
								transition-all duration-300 ease-in-out'
                                >
                                    <p className='text-sm whitespace-nowrap'>View Profile</p>
                                </div>
                            </div>
                        )}
                        {isLoggedIn && (
                            <div className="cursor-pointer group relative">
                                <LogOut className="cursor-pointer hover:stroke-white" onClick={() => {
                                    alert('Logged Out');
                                    setIsLoggedIn(false);
                                }} />
                                <div
                                    className='absolute top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-dark-label-2 p-2 rounded shadow-lg 
                        z-40 group-hover:scale-100 scale-0 
                        transition-all duration-300 ease-in-out'>
                                    <p className='text-sm whitespace-nowrap'>Logout</p>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}
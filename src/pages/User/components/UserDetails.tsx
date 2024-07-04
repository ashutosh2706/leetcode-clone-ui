import { Briefcase, MapPin, GraduationCap, Globe, Github } from 'lucide-react'
import { useNavigate, useParams } from 'react-router';

export default function UserDetails() {

    const navigate = useNavigate();
    const { username } = useParams();

    const websiteUrl = 'https://linkedin.com/in/ashutosh2706';
    const githubHandle = 'ashutosh2706';

    return (
        <div className="w-full md:w-1/3 p-4 md:min-w-80 min-w-[500px]">
            <div className="bg-dark-layer-1 rounded-lg p-6 h-full">
                <div className="flex items-center">
                    <img
                        src="/default_avatar.jpg"
                        alt="Profile"
                        className="w-20 h-20 rounded-lg bg-gray-500"
                        draggable={false}
                    />
                    <div className="h-full ms-5">
                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col">
                                <span className="text-white text-lg cursor-default">ashutosh2706</span>
                                <span className="text-dark-label-2 text-sm cursor-default">{username}</span>
                            </div>
                            <div className="text-white cursor-default"><span className="text-dark-label-2 text-base cursor-default">Rank</span>{' '}{'14,036'}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-10 bg-dark-green-transparent cursor-pointer rounded-lg mt-5 flex items-center justify-center" 
                onClick={() => navigate(`/user/${username}/edit-profile`)}>
                    <span className="text-base text-green-600 font-medium">Edit Profile</span>
                </div>
                <section className="mt-5 flex flex-col gap-y-2 items-start">
                    <div className="flex"><Briefcase className='stroke-dark-label-2 h-7 w-4 justify-center items-center text-center' /> <span className='text-center ms-3 text-dark-label-2 cursor-default'>Software Engineer</span></div>
                    <div className="flex"><MapPin className='stroke-dark-label-2 h-7 w-4 justify-center items-center text-center' /> <span className='text-center ms-3 text-dark-label-2 cursor-default'>India</span></div>
                    <div className="flex"><GraduationCap className='stroke-dark-label-2 h-7 w-4 justify-center items-center text-center' /> <span className='text-center ms-3 text-dark-label-2 cursor-default'>Trident Academy of Tech. (BBSR)</span></div>
                    <div className="flex"><Globe className='stroke-dark-label-2 h-7 w-4 justify-center items-center text-center' /> 
                        <span className='text-center ms-3 text-dark-label-2 cursor-pointer hover:underline'>
                            <a href={`${websiteUrl}`} target='_blank' rel='noreferrer'>{websiteUrl}</a>
                        </span>
                    </div>
                    <div className="flex"><Github className='stroke-dark-label-2 h-7 w-4 justify-center items-center text-center' />
                        <span className='text-center ms-3 text-dark-label-2 cursor-pointer hover:underline'>
                            <a href={`https://github.com/${githubHandle}`} target='_blank' rel='noreferrer'>{githubHandle}</a>
                        </span>
                    </div>
                </section>

            </div>
        </div>
    )
}
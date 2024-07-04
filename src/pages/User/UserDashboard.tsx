import MySubmissionsList from './components/MySubmissionsList';
import SolvedStats from './components/SolvedStats';
import UserDetails from './components/UserDetails';

export default function UserDashboard() {

    return (
        <>
            <div className="flex flex-col md:flex-row p-4 bg-dark-layer-2 min-h-screen overflow-y-auto">
                <UserDetails />
                <div className="w-full p-4 md:min-w-[550px] min-w-[500px] h-full">
                    <SolvedStats />
                    <MySubmissionsList />
                </div>
            </div>
        </>
    )
}
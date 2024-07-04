import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

type AuthModalProps = {
    ModalType: number;
}

export default function AuthModal({ModalType}: AuthModalProps) {

    return (
        <>
            <div className='w-full sm:w-[450px]  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  flex justify-center items-center'>
                <div className='relative w-[90%] h-full mx-auto flex items-center justify-center shadow-xl bg-white rounded-sm'>
                    <div className='relative w-full mx-6'>
                        <div className="w-full h-32 flex items-center justify-center my-3 pointer-events-none select-none">
                            <img src="/logo.svg" alt="Logo"/>
                        </div>
                        {ModalType === 1 ? <SignIn /> : ModalType === 2 ? <SignUp /> : <ForgotPassword /> }                        
                    </div>
                </div>
            </div>
        </>
    )
}
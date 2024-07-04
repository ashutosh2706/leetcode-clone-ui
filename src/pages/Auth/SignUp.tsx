import AuthModal from "../../components/Modals/AuthModal";

export default function SignUp() {
    return (
        <>
            <div className="bg-gray-200 w-screen h-screen">
                <AuthModal ModalType={2}/>
            </div>
        </>
    )
}
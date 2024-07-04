import { useParams } from "react-router"
import Error403 from "../Error/Error403";

/**
 * @todo: check if user is authorized to view this page, show 403 error if logged out
 */

export default function EditUserProfile() {

    const { username } = useParams();

    return (
        <>
        <Error403 />
        </>
    )
}
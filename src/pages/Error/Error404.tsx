import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function Error404() {

    const navigate = useNavigate();

    return (
        <>
            <div className='flex items-center justify-center w-screen h-screen'>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you requested was not found."
                    extra={<Button type="primary" onClick={() => navigate("/")}>Back Home</Button>} />
            </div>
        </>
    )
}
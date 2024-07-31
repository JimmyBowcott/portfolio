import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className="flex flex-col flex-grow w-full items-center justify-center">
            <div className="h-full w-full flex flex-col justify-center items-center gap-4">
                <img src="./assets/media/running-for-a-job.gif" className="pixelated w-full max-w-44 h-auto" alt="" />
                <h1 className="text-5xl sm:text-7xl">404</h1>
                <p className="text-2xl sm:text-3xl">Page not found</p>
                <button className="bg-orange-500 p-2 px-4 hover:px-8 transition-all duration-300 ease-in-out"
                onClick={handleClick}>Back to homepage</button>
            </div>
        </div>
    );
}

export default ErrorPage;
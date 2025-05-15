import { useNavigate } from 'react-router-dom';
import errorImg from '../assets/error.webp'
import { useTheme } from '../Hooks/useTheme';
const ErrorPage = () => {
    const navigate=useNavigate()
    const { changeTheme,mode }=useTheme();
    const GoHome = () => {
        navigate('/')
    }
    return (
        <div className="flex flex-col justify-center items-center w-full h-full dark:bg-[#121212]">
            <div className="flex flex-col justify-center items-center gap-3 my-20 dark:bg-[#121212]">
            <img src={errorImg} className='mt-20' alt="" />
            <h1 className="text-3xl">Page Not Found</h1>
            <div>
                    <button onClick={GoHome} className='mb-20 btn w-40 font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] hover:text-white hover:bg-[#1E2A47]'>Go Back</button>
                </div>
        </div>
        </div>
    );
};

export default ErrorPage;
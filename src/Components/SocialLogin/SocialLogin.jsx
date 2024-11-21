import {FaGoogle} from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div >
            <h2 className="font-bold mb-3 text-xl text-black">Login with</h2>
            <div className='w-full flex flex-col '>
                <button className="btn p-3 mb-2 bg-white">
                    <FaGoogle className="font-medium" />
                    Login with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
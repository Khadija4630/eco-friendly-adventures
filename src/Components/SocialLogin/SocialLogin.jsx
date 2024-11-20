import {FaGoogle} from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semi-bold mb-3">Login with</h2>
            <div className='w-full '>
                <button className="btn">
                    <FaGoogle className="mr-2" />
                    Login with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;
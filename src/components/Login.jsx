import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold pb-4">Login With</h3>
            <div className="flex flex-col space-y-2">
                <button className="btn btn-outline">
                    <FaGoogle /> Login with Google
                </button>
                <button className="btn btn-outline">
                    <FaGithub /> Login with Github
                </button>
            </div>
        </div>
    );
};

export default Login;

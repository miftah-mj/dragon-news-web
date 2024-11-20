import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <form className="card-body">
                    <div className="form-control">
                        <h3 className="text-xl font-semibold text-center pb-4">
                            Login to your account
                        </h3>

                        <label className="label">
                            <span className="label-text font-semibold">
                                Email
                            </span>
                        </label>
                        <input
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        <label className="label">
                            <a
                                href="#"
                                className="label-text-alt link link-hover"
                            >
                                Forgot password?
                            </a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-md">
                            Login
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Don&apos;t have an account?{" "}
                    <Link
                        to="/auth/register"
                        className="text-red-500 font-semibold"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

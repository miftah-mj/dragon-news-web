import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <form className="card-body">
                    <div className="form-control">
                        <h3 className="text-xl font-semibold text-center pb-4">
                            Register for an account
                        </h3>
                        <label className="label">
                            <span className="label-text font-semibold">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />

                        <label className="label">
                            <span className="label-text font-semibold">
                                Photo URl
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />

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
                        {/* accept term and condition */}
                        <label className="cursor-pointer label justify-start gap-2">
                            <input type="checkbox" className="checkbox" />
                            <span className="checkbox-mark"></span>
                            <span className="label-text">
                                I accept the terms and conditions
                            </span>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-md">
                            Register
                        </button>
                    </div>
                </form>
                <p className="text-center">
                    Already Have An Account?{" "}
                    <Link
                        to="/auth/login"
                        className="text-red-500 font-semibold"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { userLogin, setUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in...");
        // get the form data
        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;
        console.log({ email, password });
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                alert(error.code);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <form onSubmit={handleSubmit} className="card-body">
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
                            name="email"
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
                            name="password"
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
                        className="text-red-500 font-semibold hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;

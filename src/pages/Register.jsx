import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser, updateUserProfile } =
        useContext(AuthContext);

    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Registering...");
        // get the form data
        const formData = new FormData(e.target);
        // const data = Object.fromEntries(formData);
        // console.log(data);

        const name = formData.get("name");
        if (name.length < 3) {
            setError({ ...error, name: "Name must be at least 3 characters" });
            return;
        }
        const photo = formData.get("photo");
        const email = formData.get("email");
        const password = formData.get("password");
        if (password.length < 6) {
            setError({
                ...error,
                password: "Password must be at least 6 characters",
            });
            return;
        }
        // console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <div className="min-h-screen flex justify-center items-start">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <h3 className="text-xl font-semibold text-center pb-4">
                            Register for an account
                        </h3>
                        {/* name */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered"
                            required
                        />
                        {error.name && (
                            <label className="label text-red-500 text-sm">
                                {error.name}
                            </label>
                        )}

                        {/* photo */}
                        <label className="label">
                            <span className="label-text font-semibold">
                                Photo URl
                            </span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="input input-bordered"
                            required
                        />
                        {/* email */}
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
                        {/* password */}
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
                        {error.password && (
                            <label className="label text-red-500 text-sm">
                                {error.password}
                            </label>
                        )}

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
                        className="text-red-500 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;

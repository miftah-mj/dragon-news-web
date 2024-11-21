import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div className="flex justify-between items-center py-7">
            <div>{user && user.name}</div>
            <div className="space-x-5">
                <NavLink to="/" className="hover:text-primary">
                    Home
                </NavLink>
                <NavLink to="/about" className="hover:text-primary">
                    About
                </NavLink>
                <NavLink to="/career" className="hover:text-primary">
                    Career
                </NavLink>
            </div>
            <div className="flex items-center gap-2">
                <img src={userIcon} alt="User" className="w-full h-full" />

                {user && user?.email ? (
                    <Link
                        onClick={logOut}
                        className="btn btn-neutral rounded-none text-white hover:bg-gray-600"
                    >
                        Logout
                    </Link>
                ) : (
                    <Link
                        to="/auth/login"
                        className="btn btn-neutral rounded-none text-white hover:bg-gray-600"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;

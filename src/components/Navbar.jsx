import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-7">
            <div></div>
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
                <button className="btn btn-neutral rounded-none text-white hover:bg-gray-600">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;

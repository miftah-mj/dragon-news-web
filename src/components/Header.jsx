import logo from "../assets/logo.png";
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 py-10">
            <div>
                <img className="w-[470px]" src={logo} alt="" />
            </div>
            <h2 className="text-lg text-gray-400">Journalism Without Fear or Favour</h2>
        </div>
    );
};

export default Header;

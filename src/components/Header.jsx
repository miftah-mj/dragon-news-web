import moment from "moment";
// import logo from "../assets/logo.png";
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 py-10">
            {/* <div>
                <img className="w-[470px]" src={logo} alt="" />
            </div> */}
            <div>
                <h1 className="font-unifrakturCook text-7xl">
                    The Dragon News
                </h1>
            </div>
            <h2 className="text-lg text-gray-400">
                Journalism Without Fear or Favour
            </h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;

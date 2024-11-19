import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Social = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold pb-4">Find Us On</h3>

            <div className="join join-vertical flex *:bg-transparent *:justify-start">
                <button className="btn join-item border border-gray-300">
                    <FaFacebook /> Facebook
                </button>
                <button className="btn join-item border border-gray-300">
                    <FaTwitter /> Twitter
                </button>
                <button className="btn join-item border border-gray-300">
                    <FaInstagram /> Instagram
                </button>
            </div>
        </div>
    );
};

export default Social;

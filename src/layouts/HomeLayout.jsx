import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />

                <section className="w-11/12 mx-auto">
                    <LatestNews />
                </section>

                <nav className="w-11/12 mx-auto">
                    <Navbar />
                </nav>
            </header>
        </div>
    );
};

export default HomeLayout;

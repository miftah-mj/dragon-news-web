import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftContent from "../components/LeftContent";
import Navbar from "../components/Navbar";
import RightContent from "../components/RightContent";

const HomeLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            {/* header */}
            <header>
                <Header />
            </header>

            {/* latest news */}
            <section>
                <LatestNews />
            </section>

            {/* navbar */}
            <nav>
                <Navbar />
            </nav>

            {/* main content */}
            <main className="grid md:grid-cols-12 gap-6">
                <aside className="col-span-3">
                    <LeftContent />
                </aside>
                <section className="col-span-6">
                    <Outlet />
                </section>
                <aside className="col-span-3">
                    <RightContent />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;

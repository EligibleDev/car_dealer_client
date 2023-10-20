import Header from "../components/Header/Header";
import Footer from "../assets/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import BackToTop from "../components/BackToTop/BackToTop";

const MyLayout = () => {
    return (
        <>
            <Toaster />
            <Header />
            <div className="min-h-[768px]">
                <Outlet />
            </div>
            <Footer />
            <BackToTop />
        </>
    );
};

export default MyLayout;

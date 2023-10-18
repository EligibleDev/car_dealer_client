import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const MyLayout = () => {
    return (
        <>
            <Header />
            <div className="min-h-[768px]">
                <Outlet />
            </div>
            <Footer/>
        </>
    );
};

export default MyLayout;

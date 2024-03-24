import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>

                {/* packet */}
                <div className="min-h-[calc(100vh-120px)]">
                    <Outlet></Outlet>

                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;
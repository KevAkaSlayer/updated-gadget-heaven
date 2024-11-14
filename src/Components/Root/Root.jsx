import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className=" bg[#ECECEC]">
            <div className="w-11/12 mx-auto"><NavBar /></div>
            <div className="w-11/12 mx-auto">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
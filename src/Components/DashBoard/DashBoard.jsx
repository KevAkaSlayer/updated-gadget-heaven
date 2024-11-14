import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {

    return (
        <div>
            <Helmet>
                <title>Gadget heaven | dashboard</title>
            </Helmet>
            <div className="bg-[#9538E2]">
            <div className="w-11/12 mx-auto p-5">
                    <div className=" flex flex-col items-center gap-5">
                        <h1 className="text-center text-3xl font-bold text-white">Dashboard</h1>
                        <p className="w-1/2 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <div className="flex gap-4">
                        <NavLink 
                            to="cartlist"
                            className={({ isActive }) => 
                                `btn rounded-3xl px-8 ${isActive ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
                        >
                            Cart
                        </NavLink>
                        <NavLink 
                            to="wishlist"
                            className={({ isActive }) => 
                                `btn rounded-3xl px-8 ${isActive ? 'bg-white text-[#9538E2]' : 'bg-[#9538E2] text-white'}`}
                        >
                            Wishlist
                        </NavLink>
                    </div>
                </div>
            </div>  
            </div>
            <Outlet />
        </div>
    );
};

export default DashBoard;
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [menuOpen, setMenuOpen] = useState(false);

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'button button-selected' : 'button'
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                        isActive ? 'button button-selected' : 'button'
                    }
                >
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? 'button button-selected' : 'button'
                    }
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact-us"
                    className={({ isActive }) =>
                        isActive ? 'button button-selected' : 'button'
                    }
                >
                    Contact Us
                </NavLink>
            </li>
        </>
    );

    return (
        <div
            className={`flex items-center justify-between mt-5 rounded-t-2xl p-5 ${
                isHomePage ? 'bg-[#9538E2]' : 'bg-white'
            }`}
        >
            <h2 className={`${isHomePage ? 'text-white' : 'text-[#9538E2]'}`}>
                Gadget Heaven
            </h2>

            {/* Hamburger menu for smaller screens */}
            <button
                className="md:hidden text-xl"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {/* Navigation links */}
            <nav
                className={`absolute md:static top-[70px] left-0 w-full md:w-auto bg-white md:bg-transparent z-10 md:flex ${
                    menuOpen ? 'block' : 'hidden'
                }`}
            >
                <ul
                    className={`flex flex-col md:flex-row gap-4 md:gap-5 px-5 md:px-0 ${
                        isHomePage ? 'text-[#9538E2] md:text-white' : 'text-[#9538E2]'
                    }`}
                >
                    {links}
                </ul>
            </nav>

            {/* Cart and Wishlist buttons */}
            <div className="flex gap-2">
                <Link to="/cartlist">
                    <button
                        className={`rounded-full p-2 ${
                            isHomePage ? 'bg-white' : 'bg-[#9538E2]'
                        }`}
                    >
                        <img
                            className="w-7 h-7"
                            src="https://i.ibb.co/RSDmgwj/icons8-cart-50.png"
                            alt="Cart"
                        />
                    </button>
                </Link>
                <Link to="/wishlist">
                    <button
                        className={`rounded-full p-2 ${
                            isHomePage ? 'bg-white' : 'bg-[#9538E2]'
                        }`}
                    >
                        <img
                            className="w-7 h-7"
                            src="https://i.ibb.co/dL2L3B9/icons8-heart-32.png"
                            alt="Wishlist"
                        />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;

import { NavLink, Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const links = <>
        <li><NavLink to="/"  className={({ isActive }) => 
                                isActive ? 'button button-selected' : 'button'
                            }>Home</NavLink></li>
        <li><NavLink to="/statistics" className={({ isActive }) => 
                                isActive ? 'button button-selected' : 'button'
                            }>Statistics</NavLink></li>
        <li><NavLink to="/dashboard" className={({ isActive }) => 
                                isActive ? 'button button-selected' : 'button'
                            } >Dashboard</NavLink></li>
        <li><NavLink to="/contact-us" className={({ isActive }) => 
                                isActive ? 'button button-selected' : 'button'
                            } >ContactUs</NavLink></li>
    </>;

    return (
        <div className={`flex justify-between mt-5 rounded-t-2xl p-5 ${isHomePage ? 'bg-[#9538E2]' : 'bg-white'}`}>
            <h2 className={`${isHomePage ? 'text-white' : 'text-[#9538E2]'}`}>Gadget Heaven</h2>
            <div>
                <nav>
                    <ul className={`flex gap-5 ${isHomePage ? 'text-white' : 'text-[#9538E2]'}`}>
                        {links}
                    </ul>
                </nav>
            </div>
            <div className='flex gap-2'>
                <Link to="/cartlist">
                    <button className={`rounded-full p-2 ${isHomePage ? 'bg-white' : 'bg-[#9538E2]'}`}>
                        <img className='w-7 h-7' src="https://i.ibb.co.com/RSDmgwj/icons8-cart-50.png" alt="Cart" />
                    </button>
                </Link>
                <Link to="/wishlist">
                    <button className={`rounded-full p-2 ${isHomePage ? 'bg-white' : 'bg-[#9538E2]'}`}>
                        <img className='w-7 h-7' src="https://i.ibb.co.com/dL2L3B9/icons8-heart-32.png" alt="Wishlist" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;

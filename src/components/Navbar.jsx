import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FiSearch, FiUser, FiShoppingCart, FiMenu, FiChevronLeft } from 'react-icons/fi';
import { assets } from '../assets/assets';
import 'wicg-inert'; // for inert polyfill

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch } = useContext(ShopContext);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        if (mobileMenuRef.current) {
            mobileMenuRef.current.inert = !visible;
        }
    }, [visible]);

    return (
        <nav className="bg-zinc-100 w-full h-30 shadow-sm" aria-label="Main navigation" role="navigation">
            <div className="w-full h-full px-4 sm:px-8 flex flex-wrap items-center justify-between">

                {/* Logo */}
                <div className="flex-shrink-0 mr-4 h-full flex items-center">
                    <Link 
                        to="/" 
                        className="h-full flex items-center focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded"
                        aria-label="Home"
                    >
                        <img 
                            src={assets.logor}
                            className="h-[122px] sm:h-[150px] w-auto object-contain mr-4 sm:mr-20 max-w-[200px] sm:max-w-[300px]" 
                            alt="Company Logo"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 justify-center h-full">
                    <ul className="flex space-x-10 h-full items-center">
                        {['Home', 'Collection', 'About', 'Contact'].map((item) => (
                            <li key={item} className="h-full flex items-center">
                                <NavLink 
                                    to={`/${item.toLowerCase()}`} 
                                    className={({ isActive }) => 
                                        `flex items-center h-full px-4 text-gray-700 hover:text-fuchsia-600 transition-colors text-lg ${
                                            isActive ? 'font-semibold text-fuchsia-600' : ''
                                        }`
                                    }
                                    aria-current={item === 'Home' ? 'page' : undefined}
                                >
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Icons */}
                <div className="ml-auto flex items-center space-x-4 sm:space-x-6 md:space-x-8 mt-2">
                    <button 
                        onClick={() => setShowSearch(true)} 
                        className="p-2 text-gray-700 hover:text-fuchsia-600 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded"
                        aria-label="Search"
                    >
                        <FiSearch className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <div className="relative group">
                        <button 
                            className="p-2 text-gray-700 hover:text-fuchsia-600 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded"
                            aria-label="Account options"
                            aria-haspopup="true"
                        >
                            <FiUser className="w-5 h-5 sm:w-6 sm:h-6"/>
                        </button>
                        <div 
                            className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg py-1 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                            role="menu"
                        >
                            <button className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600" role="menuitem">My Profile</button>
                            <button className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600" role="menuitem">Orders</button>
                            <button className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600" role="menuitem">Logout</button>
                        </div>
                    </div>

                    <Link 
                        to="/cart" 
                        className="p-2 relative text-gray-700 hover:text-fuchsia-600 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded"
                        aria-label="Shopping cart"
                    >
                        <FiShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span className="sr-only">Cart items</span>
                        <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-fuchsia-600 text-white text-sm rounded-full">
                            10
                        </span>
                    </Link>

                    <button 
                        onClick={() => setVisible(true)} 
                        className="md:hidden p-2 text-gray-700 hover:text-fuchsia-600 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded mt-2"
                        aria-label="Open menu"
                    >
                        <FiMenu className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div 
                ref={mobileMenuRef}
                className={`md:hidden fixed inset-0 bg-white z-20 transition-all duration-300 ease-in-out transform ${visible ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col h-full mt-4">
                    <div className="flex items-center justify-between p-6 border-b">
                        <button 
                            onClick={() => setVisible(false)} 
                            className="flex items-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 rounded text-lg"
                            aria-label="Close menu"
                        >
                            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                            Back
                        </button>
                    </div>

                    <nav className="flex-1 overflow-y-auto py-6">
                        {['Home', 'Collection', 'About', 'Contact'].map((item) => (
                            <NavLink 
                                key={item}
                                to={`/${item.toLowerCase()}`} 
                                onClick={() => setVisible(false)}
                                className={({ isActive }) =>
                                    `block px-6 py-3 text-base sm:text-lg text-gray-700 hover:bg-fuchsia-50 hover:text-fuchsia-600 ${
                                        isActive ? 'bg-fuchsia-50 text-fuchsia-600 font-medium' : ''
                                    }`
                                }
                                aria-current={item === 'Home' ? 'page' : undefined}
                            >
                                {item}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

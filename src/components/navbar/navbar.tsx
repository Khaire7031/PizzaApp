import React from 'react';
import './navbar.scss';
import { IoFastFoodOutline } from 'react-icons/io5';
import { useDevice } from '../../hooks/DeviceContext';
import Search from './Search';

interface NavbarProps {
    setPizzaSearch: React.Dispatch<React.SetStateAction<string>>;
}

const NavbarNames = () => {
    return (
        <div className="items-center lg:ml-12 justify-between w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <ul className="flex flex-row justify-start md:p-0 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <a
                        href="/"
                        className="block py-2 px-3 rounded-sm md:bg-transparent hover:text-blue-700 md:p-0 md:dark:text-blue-500"
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        href="#about-section"
                        className="block py-2 px-3 rounded-sm md:bg-transparent hover:text-blue-700 md:p-0 md:dark:text-blue-500"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        className="block py-2 px-3 rounded-sm md:bg-transparent hover:text-blue-700 md:p-0 md:dark:text-blue-500"
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        href="/"
                        className="block py-2 px-3 rounded-sm md:bg-transparent hover:text-blue-700 md:p-0 md:dark:text-blue-500"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

const Navbar: React.FC<NavbarProps> = React.memo(({ setPizzaSearch }) => {
    const { isMobile } = useDevice();

    console.log("Navbar isMobile : ", isMobile);

    return (
        <nav className="sticky top-0 z-10 bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-col mx-auto px-4 lg:py-4 pt-3">
                <div className={`flex flex-row items-center justify-between`}>
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <IoFastFoodOutline className="text-2xl text-red-800" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pizza</span>
                    </a>
                    {
                        !isMobile && <div><NavbarNames /></div>
                    }
                    <Search setPizzaSearch={setPizzaSearch} />
                </div>
                <div>
                    {
                        isMobile && <div><NavbarNames /></div>
                    }
                </div>
            </div>
        </nav>
    );
});

export default Navbar;

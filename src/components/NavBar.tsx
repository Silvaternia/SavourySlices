import { Menu, MoveDownRight } from "lucide-react";
import { Link } from "react-router-dom";
/* 5/19/2025
Make the menu icon trigger an left side canvas navigation bad
*/

function NavBar() {
    return (
        <nav className="w-full xl:w-7xl md:justify-between bg-dark-grey flex items-center text-surface-light px-6 h-24 relative transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-4 grow">
                    <Menu size={40} />
                    <ul className="hidden lg:inline-flex gap-4">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profiles">About us</Link>
                        </li>
                        <li>
                            <Link to="/">Catagories</Link>
                        </li>
                        <li>
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <h2 className="absolute left-1/2 transform -translate-x-1/2 playfair-display-light text-4xl md:text-5xl">
                SavourySlices
            </h2>
            <div className="hidden lg:inline-flex gap-4">
                <a href="#" className="flex gap-1 items-center px-8 py-2">
                    Order
                    <MoveDownRight size={18} strokeWidth={3} />
                </a>
                <button className="flex gap-1 font-bold items-center bg-primary px-8 py-2.5">login</button>
            </div>
        </nav>
    );
}

export default NavBar;

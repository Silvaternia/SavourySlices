import { Menu, MoveDownRight } from "lucide-react";
import { Link } from "react-router-dom";
/* 5/19/2025
Make the menu icon trigger an left side canvas navigation bad
*/

function NavBar() {
    return (
        <nav className="w-sm sm:w-lg md:w-3xl lg:w-5xl xl:w-7xl md:justify-between bg-dark-grey flex items-center text-surface-light px-4 h-16 transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-4">
                <div className="flex items-center">
                    <Menu size={40} />
                    <ul className="hidden md:flex gap-2">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/profiles">profiles</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex grow md:grow-0 justify-center">
                <h2 className="playfair-display-light text-3xl">SavourySlices</h2>
            </div>

            <div className="hidden md:flex gap-4">
                <a href="#" className="flex gap-1 items-center px-6 py-2">
                    Order
                    <MoveDownRight size={18} strokeWidth={3} />
                </a>
                <button className="flex gap-1 items-center bg-primary px-6 py-2">
                    login
                    <MoveDownRight size={18} strokeWidth={3} />
                </button>
            </div>
        </nav>
    );
}

export default NavBar;

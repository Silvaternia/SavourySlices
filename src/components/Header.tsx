import { Menu, MoveDownRight } from "lucide-react";
/* 5/19/2025
Learn react-router-dom to make the navigation bar dynamic
Make the menu icon trigger an left side canvas navigation bad

*/
function Header() {
    return (
        <nav className="w-7xl bg-dark-grey flex items-center justify-between text-surface-light px-4 h-16">
            <div className="flex items-center gap-4">
                <Menu size={40} />
                <ul className="flex gap-2">
                    <li>list item</li>
                    <li>list item</li>
                    <li>list item</li>
                </ul>
            </div>
            <h2 className="playfair-display-light text-3xl">SavourySlices</h2>

            <div className="flex gap-4">
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

export default Header;

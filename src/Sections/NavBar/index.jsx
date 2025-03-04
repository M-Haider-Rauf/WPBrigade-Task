import { SkewedButton } from "../../Components/SkewedButton/SkewedButton";

import { FaSearch } from "react-icons/fa";

const navItems = ["Our Tracks", "Find Events", "Track Map", "Shop", "About Us"];

export function NavBar() {
    return(
        <div className="flex flex-row w-full h-14 bg-green-800 justify-around items-center">
            <div>
                <ul className="flex flex-row gap-x-0">
                {
                    navItems.map(value => (
                        <li><SkewedButton>{value}</SkewedButton></li>
                    ))
                }
                </ul>
            </div>
            <div className="flex flex-row bg-green-950 h-10 w-60 justify-between items-center px-3">
                <p className="font-impact text-gray-500">SEARCH</p>
                <FaSearch size={20} color="#6a7282" />
            </div>
        </div>
    )
}
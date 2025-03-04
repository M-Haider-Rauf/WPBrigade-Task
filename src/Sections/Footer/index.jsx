import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const navItems = ["Our Tracks", "Find Events", "Track Map", "Shop", "About Us"];

export function Footer() {
    return(
        <div className="flex flex-col justify-center items-center w-full bg-green-900 gap-y-4 py-6">
            <div className="flex flex-row w-1/2 justify-center">
                <p className="font-impact text-white">
                    Our Tracks / Find Events / Track Map / Shop / About Us
                </p>
            </div>
            <div className="flex flex-row w-1/2 justify-center gap-x-4">
                <FaFacebookF color="white" size={24}/>
                <FaTwitter color="white" size={24}/>
                <FaInstagram color="white" size={24}/>
                <FaLinkedin color="white" size={24}/>
            </div>
            <div className="flex flex-row w-1/2 justify-center">
                <p className="text-white font-mono">&copy; Copyright 2025 Adidas</p>
            </div>
        </div>
    )
}
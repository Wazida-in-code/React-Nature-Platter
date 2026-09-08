import { CgSearchLoading } from "react-icons/cg";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import Logo from "../assets/nav-logo.png";

const Navbar = () => {

    return (
    <div className="border-b border-gray-300">
        <nav className="flex justify-between gap-4 container mx-auto py-4">
            <img src={Logo} className="w-[120px] h-[50px]" alt="" />
            
            <ul className="flex gap-4 items-center">
                <li><a href="/">Home</a></li>
                <li><a href="/">About us</a></li>
                <li><a href="/">Contect</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Products</a></li>
            </ul>

            <div className="flex gap-4 items-center">
                <CgSearchLoading />
                <PiShoppingCartSimpleFill />
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 hover:scale-110 transition-transform duration-300 hover:text-blue-700">Login</button>
                <button className="m-5 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-110 transition-transform duration-300">Sign up</button>
            </div>
        </nav>
    </div>
    )

}

export default Navbar
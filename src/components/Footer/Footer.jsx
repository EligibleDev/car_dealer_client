import { NavLink } from "react-router-dom";
import {
    FaFacebook,
    FaXTwitter,
    FaYoutube,
    FaTwitch,
    FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Cart",
            path: "/cart",
        },
        {
            name: "Add Product",
            path: "/add_product",
        },
    ];

    return (
        <footer
            className="bg-cover bg-no-repeat bg-center h-40 md:h-60 flex flex-col justify-center items-center gap-8 shadow-[0_5px_10px_0_rgba(0,0,0,.35)]"
            id="footer"
        >
            <nav className="flex justify-center items-center gap-4 border-b-[6px] border-b-[var(--red)] w-full">
                {navLinks.map((link) => (
                    <NavLink
                        className="transition duration-500 text-xs tracking-wider uppercase font-bold p-4 sm:py-6"
                        key={link?.name}
                        to={link?.path}
                    >
                        {link?.name}
                    </NavLink>
                ))}
            </nav>

            <nav className="flex gap-3">
                <a href="#">
                    <FaFacebook className="hover:text-[var(--red)] transition duration-500" />
                </a>
                <a href="#">
                    <FaXTwitter className="hover:text-[var(--red)] transition duration-500" />
                </a>
                <a href="#">
                    <FaYoutube className="hover:text-[var(--red)] transition duration-500" />
                </a>
                <a href="#">
                    <FaTwitch className="hover:text-[var(--red)] transition duration-500" />
                </a>
                <a href="#">
                    <FaInstagram className="hover:text-[var(--red)] transition duration-500" />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;

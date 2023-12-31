import { NavLink, Link } from "react-router-dom";
import { IconButton, Collapse } from "@material-tailwind/react";
import { FiLogIn } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import { useState } from "react";
import MyButton from "../MyButton/MyButton";
import useAuth from "../../hooks/useAuth/useAuth";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
    const {user} = useAuth();

    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Cart",
            path: `/my-cart/${user?.email}`,
        },
        {
            name: "Add Product",
            path: "/add_product",
        },
    ];

    const toggleTheme = () => {
        const icon = document.getElementById("icon");
        const logo = document.getElementById("logo");
        const slider = document.getElementById("slider");
        const footer = document.getElementById("footer");
        const blocks = document.getElementsByClassName("my-block");

        document.documentElement.classList.toggle("dark-mode");
        document.getElementById("header").classList.toggle("border-b");

        if (document.documentElement.classList.contains("dark-mode")) {
            icon.src = "/sun.png";
            logo.src = "/logo-light.png";
            slider.style.backgroundImage = "url('slider-bg.jpg')";
            footer.style.backgroundImage = "url('/footer-bg.jpg')";

            for (let i = 0; i < blocks.length; i++) {
                blocks[i].classList.add("border");
                blocks[i].classList.remove("shadow-[0px_4px_20px_rgba(227,227,227,0.6)]");
            }
        } else {
            icon.src = "/night.png";
            logo.src = "/logo-dark.png";
            slider.style.backgroundImage = "url('slider-bg-white.jpg')";
            footer.style.backgroundImage = "";

            for (let i = 0; i < blocks.length; i++) {
                blocks[i].classList.remove("border");
                blocks[i].classList.add("shadow-[0px_4px_20px_rgba(227,227,227,0.6)]");
            }
        }
    };

    return (
        <header
            id="header"
            className="px-4 pt-4 xl:p-0 shadow-[0_5px_10px_0_rgba(0,0,0,.35)] sticky top-0 left-0 right-0 z-[100] border-b-[rgba(255,255,255,.05)] bg-[var(--bg)]"
        >
            <nav className="max-w-screen-xl mx-auto flex justify-between lg:items-center items-start">
                <Link to="/" className="pb-4 lg:pb-0">
                    <img id="logo" src="/logo-dark.png" alt="" />
                </Link>

                <nav className="lg:flex flex-1 gap-2 justify-center items-end hidden">
                    {navLinks.map((link) => (
                        <NavLink
                            className="border-b-[6px] border-[var(--bg)] hover:border-[var(--red)] h-full flex justify-center items-center transition duration-500 text-xs tracking-wider uppercase font-bold text-[var(--text)]"
                            key={link?.name}
                            to={link?.path}
                        >
                            <span className="p-6">{link?.name}</span>
                        </NavLink>
                    ))}
                </nav>

                <nav className="lg:hidden flex-1 text-center -mt-3">
                    <IconButton
                        size="sm"
                        color="var(--text)"
                        variant="text"
                        onClick={toggleIsNavOpen}
                        className="mt-4"
                    >
                        <HiMenu className="h-6 w-6" />
                    </IconButton>

                    <Collapse open={isNavOpen} className="overflow-scroll">
                        {navLinks.map((link) => (
                            <NavLink
                                className="w-max mx-auto hover:border-[var(--red)] flex flex-col justify-center items-center transition duration-500 text-xs tracking-wider uppercase font-bold "
                                key={link?.name}
                                to={link?.path}
                            >
                                <span className="p-1">{link?.name}</span>
                            </NavLink>
                        ))}
                    </Collapse>
                </nav>

                <nav className="flex items-center justify-end gap-4  mr-4 lg:mr-0">
                    {user ? (
                        <span className="">
                            <ProfileMenu />
                        </span>
                    ) : (
                        <span className="">
                            <MyButton
                                link="/login-register/login"
                                icon={FiLogIn}
                                text="login"
                            />
                        </span>
                    )}
                    {/* <span className="">
                        <ProfileMenu />
                    </span>

                    <span className="hidden">
                        <MyButton
                            link="/login-register/login"
                            icon={FiLogIn}
                            text="login"
                        />
                    </span> */}

                    <img
                        onClick={toggleTheme}
                        id="icon"
                        className="w-5 cursor-pointer"
                        src="/night.png"
                        alt=""
                    />
                </nav>
            </nav>
        </header>
    );
};

export default Header;

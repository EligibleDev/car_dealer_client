import { Button } from "@material-tailwind/react";
import { ImLink } from "react-icons/im";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const MyButton = ({ text, icon, link, func }) => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            {link ? (
                <Link to={link}>
                    <Button
                        data-aos="zoom-in"
                        data-aos-offset="0"
                        style={{
                            filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
                        }}
                        className="bg-[var(--red)] rounded-br-none rounded-tl-none w-fit"
                    >
                        <span className="flex gap-1 justify-between items-center">
                            {text}
                            {icon ? (
                                React.createElement(icon, {
                                    className: `text-base`,
                                })
                            ) : (
                                <ImLink className="text-base" />
                            )}
                        </span>
                    </Button>
                </Link>
            ) : (
                <Button
                    data-aos="zoom-in"
                    data-aos-offset="0"
                    onClick={func}
                    style={{
                        filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
                    }}
                    className="bg-[var(--red)] rounded-br-none rounded-tl-none w-fit"
                >
                    <span className="flex gap-1 justify-between items-center">
                        {text}
                        {icon ? (
                            React.createElement(icon, {
                                className: `text-base`,
                            })
                        ) : (
                            <ImLink className="text-base" />
                        )}
                    </span>
                </Button>
            )}
        </>
    );
};

MyButton.propTypes = {
    icon: PropTypes.func,
    text: PropTypes.string,
    link: PropTypes.string,
    func: PropTypes.func,
};
export default MyButton;

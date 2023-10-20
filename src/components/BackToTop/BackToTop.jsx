import { FaArrowUp } from "react-icons/fa6";
import { useState, useEffect } from "react";

const BackToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <a
            id="scrollButton"
            href="#top"
            style={{
                filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
                display: showButton ? "block" : "none",
            }}
            className="bg-[var(--red)] fixed bottom-8 right-8 p-4 rounded-tr-lg rounded-bl-lg"
        >
            <FaArrowUp className="text-white"/>
        </a>
    );
};

export default BackToTop;

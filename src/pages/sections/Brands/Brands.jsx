import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Brands = ({ brands }) => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="py-24 text-center">
            <p data-aos="fade-up" className="text-[var(--red)] text-xs font-extrabold">
                Brands
            </p>
            <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="sm:text-5xl text-4xl font-bold"
            >
                Our Trusted Brands
            </h1>

            <div data-aos-delay="200" data-aos="fade-up">
                <Marquee autoFill={true} pauseOnHover={true}>
                    {brands.map((item) => (
                        <Link
                            to={`/brands/${item?.name}`}
                            className="flex flex-col h-32 sm:h-52 lg:h-64 lg:mx-10 mx-3 justify-between items-center"
                            key={item?.key}
                        >
                            <div className="flex justify-center items-center w-16 sm:w-24 lg:w-40 h-full">
                                <img className="w-full" src={item?.image} alt="" />
                            </div>
                            <h3 className="lg:text-xl text-base font-medium hover:text-[var(--red)]">
                                {item?.name}
                            </h3>
                        </Link>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

Brands.propTypes = {
    brands: PropTypes.array,
};
export default Brands;

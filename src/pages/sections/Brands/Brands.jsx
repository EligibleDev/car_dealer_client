import { Link } from "react-router-dom";
import MyButton from "../../../components/MyButton/MyButton";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import { ImLink } from "react-icons/im";
import Marquee from "react-fast-marquee";

const Brands = ({ brands }) => {
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

            <Marquee autoFill={true} pauseOnHover={true}>
                {brands.map((item) => (
                    <Link to={`/brands/${item?.name}`}
                        className="flex flex-col h-32 sm:h-52 lg:h-64 lg:mx-10 mx-3 justify-between items-center"
                        key={item?.key}
                    >
                        <div className="flex justify-center items-center w-16 sm:w-24 lg:w-40 h-full">
                            <img className="w-full" src={item?.image} alt="" />
                        </div>
                        <h3 className="lg:text-xl text-base font-medium hover:text-[var(--red)]">{item?.name}</h3>
                    </Link>
                ))}
            </Marquee>
        </section>
    );
};

Brands.propTypes = {
    brands: PropTypes.array,
};
export default Brands;

import PropTypes from "prop-types";
const Slide = ({ text, title1, title2, logo, image }) => {
    return (
        <div className="flex items-center justify-center h-full relative ">
            <div className="w-[1180px] mx-8 lg:mx-auto relative h-full">
                <img
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="2350"
                    className="right-0 absolute lg:w-36 sm:w-20 w-12 top-28 sm:top-36 lg:top-44"
                    src={`/${logo}`}
                    alt=""
                />
                <h3
                    data-aos="fade-down"
                    data-aos-duration="600"
                    data-aos-delay="1750"
                    className="lg:text-4xl sm:text-2xl text-base absolute font-extrabold top-[5.7rem] sm:top-32 lg:top-40"
                >
                    {text}
                </h3>
                <h1
                    data-aos="fade-right"
                    data-aos-duration="750"
                    data-aos-delay="1000"
                    className="lg:text-8xl sm:text-6xl text-3xl absolute font-extrabold top-28 sm:top-40 lg:top-52"
                >
                    {title1}
                </h1>
                <h1
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="1750"
                    className="lg:text-8xl sm:text-6xl text-3xl absolute font-extrabold -bottom-1 sm:bottom-1.5 lg:bottom-10 right-0"
                >
                    {title2}
                </h1>
            </div>
            <img
                data-aos="fade-left"
                data-aos-duration="1000"
                className="-mb-28 absolute z-30 w-4/5"
                src={`/${image}`}
                alt=""
            />
        </div>
    );
};

Slide.propTypes = {
    text: PropTypes.string,
    title1: PropTypes.string,
    title2: PropTypes.string,
    logo: PropTypes.string,
    image: PropTypes.string,
};
export default Slide;

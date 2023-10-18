import { Carousel, IconButton } from "@material-tailwind/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slide from "./Slide/Slide";

const Slider = () => {
    return (
        <Carousel
            autoplay={true}
            loop={true}
            prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4 z-40"
                >
                    <FaArrowLeft className="text-2xl text-[var(--red)]" />
                </IconButton>
            )}
            nextArrow={({ handleNext }) => (
                <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4 z-40"
                >
                    <FaArrowRight className="text-2xl text-[var(--red)]" />
                </IconButton>
            )}
            id="slider"
            className="bg-[url('/slider-bg-white.jpg')] bg-bottom bg-no-repeat bg-cover lg:h-[650px] sm:h-96 h-56 overflow-hidden"
        >
            <Slide
                text="2017 nsx"
                title1="Road &"
                title2="Track"
                logo="bmw.png"
                image="slider-car-1.png"
            />
            <Slide
                text="Ferrari"
                title1="Drive"
                title2="But fast"
                logo="ferrari.png"
                image="slider-car-2.png"
            />
            <Slide
                text="Lamborghini"
                title1="Best as"
                title2="Always"
                logo="lambo.png"
                image="slider-car-3.png"
            />
            <Slide
                text="BMW"
                title1="Nobody"
                title2="Can catch"
                logo="bmw.png"
                image="slider-car-4.png"
            />
            <Slide
                text="250 GTO"
                title1="Unique"
                title2="As always"
                logo="ferrari.png"
                image="slider-car-5.png"
            />
            <Slide
                text="BMW 3 Series"
                title1="Say"
                title2="Less"
                logo="bmw.png"
                image="slider-car-4.png"
            />
        </Carousel>
    );
};

export default Slider;

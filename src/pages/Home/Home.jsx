import { useLoaderData } from "react-router-dom";
import Brands from "../sections/Brands/Brands";
import Slider from "../sections/Slider/Slider";
import Statistics from "../sections/Statistics/Statistics";
import Timeline from "../sections/Timeline/Timeline";
import WhyChooseUs from "../sections/WhyChooseUs/WhyChooseUs";

const Home = () => {
    const brands = useLoaderData();

    return (
        <div>
            <Slider />
            <Statistics />
            <Brands brands={brands} />
            <WhyChooseUs />
            <Timeline />
        </div>
    );
};

export default Home;

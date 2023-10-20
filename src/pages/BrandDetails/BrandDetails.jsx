import {
    Carousel,
    IconButton,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandDetails = () => {
    const brand = useLoaderData();
    const params = useParams();
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch(`https://assignment-10-server-ksm7irbt4-mikails-projects-c152681f.vercel.app/cars/by_brand/${params.name}`)
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
            })
            .catch((error) => console.error(error));
    }, [params.name]);

    return (
        <>
            <Helmet>
                <title>{params.name} | Car Dealer</title>
            </Helmet>
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
            >
                {brand.slides.map((slide) => (
                    <img key={slide} className="w-full" src={slide} />
                ))}
            </Carousel>

            <section className="max-w-screen-xl mx-auto lg:py-24 p-8 xl:px-0">
                {cars.length ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {cars.map((car) => (
                            <Card
                                key={car?._id}
                                className="w-full bg-[var(--bg)] shadow-[0px_4px_20px_rgba(227,227,227,0.6)] border-[var(--body)] my-block"
                            >
                                <CardHeader floated={false} color="blue-gray">
                                    <img
                                        className="h-56 w-full"
                                        src={car?.image}
                                        alt={car?.name}
                                    />
                                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                                </CardHeader>
                                <CardBody>
                                    <div className="mb-3 flex items-center justify-between">
                                        <Typography
                                            variant="h5"
                                            color="blue-gray"
                                            className="font-medium"
                                        >
                                            <p className="text-[var(--text)]">
                                                {car?.name}
                                            </p>
                                        </Typography>
                                        <Typography
                                            color="blue-gray"
                                            className="flex items-center gap-1.5 font-normal"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="-mt-0.5 h-5 w-5 text-yellow-700"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <p className="text-[var(--body)]">
                                                {car?.rating}
                                            </p>
                                        </Typography>
                                    </div>
                                    <p className="py-3 text-[var(--body)]">
                                        {car?.description?.slice(0, 100)}...
                                    </p>
                                    <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                                        <Tooltip content={`Brand: ${car?.brand}`}>
                                            <span className="cursor-pointer rounded-full border border-[var(--body)] bg-[var(--body)]  p-3 text-[var(--bg)] transition-colors hover:border-[var(--body)]  hover:bg-[var(--text)]">
                                                From {car?.brand}
                                            </span>
                                        </Tooltip>
                                        <Tooltip content={`Car Type: ${car?.type}`}>
                                            <span className="cursor-pointer rounded-full border border-[var(--body)] bg-[var(--body)]  p-3 text-[var(--bg)] transition-colors hover:border-[var(--body)]  hover:bg-[var(--text)]">
                                                {car?.type}
                                            </span>
                                        </Tooltip>

                                        <Tooltip content={`Update ${car?.name}`}>
                                            <Link
                                                to={`/update_car/${car?._id}`}
                                                className="cursor-pointer rounded-full border border-[var(--body)] bg-[var(--body)]  p-4 text-[var(--bg)] transition-colors hover:border-[var(--body)]  hover:bg-[var(--text)]"
                                            >
                                                <FiEdit />
                                            </Link>
                                        </Tooltip>
                                        <Tooltip content={`Price: $${car?.price}`}>
                                            <span className="cursor-pointer rounded-full border border-[var(--body)] bg-[var(--body)]  p-3 text-[var(--bg)] transition-colors hover:border-[var(--body)]  hover:bg-[var(--text)]">
                                                ${car?.price}
                                            </span>
                                        </Tooltip>
                                    </div>
                                </CardBody>
                                <CardFooter className="pt-3">
                                    <Link to={`/cars/${car?._id}`}>
                                        {" "}
                                        <Button
                                            fullWidth={true}
                                            style={{
                                                filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
                                            }}
                                            className="bg-[var(--red)] rounded-br-none rounded-tl-none"
                                        >
                                            Details
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-[var(--text)] text-7xl text-center font-extrabold">
                        We do not have any car for {params.name}
                    </p>
                )}
            </section>
        </>
    );
};

export default BrandDetails;

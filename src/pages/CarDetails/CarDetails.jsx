import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import toast from "react-hot-toast";
import { Button, Rating } from "@material-tailwind/react";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "../../hooks/useAuth/useAuth";

const CarDetails = () => {
    const [isInCart, setIsInCart] = useState(false);
    const car = useLoaderData();
    const { user } = useAuth();

    const { _id, ...carForDB } = car;
    carForDB.email = user.email;

    useEffect(() => {
        checkIfCarIsInCart();
    }, []);

    const checkIfCarIsInCart = () => {
        fetch(
            `https://assignment-10-server-ivory-one.vercel.app/my-cart/${user.email}`
        )
            .then((res) => res.json())
            .then((cartData) => {
                const carInCart = cartData.some((item) => item._id === car._id);
                setIsInCart(carInCart);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleAddToCart = () => {
        if (isInCart) {
            return toast.error("Already in Cart");
        } else {
            fetch(
                `https://assignment-10-server-ivory-one.vercel.app/my-cart/${user.email}`,
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(carForDB),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.insertedId) {
                        setIsInCart(true);
                        return toast.success("Successfully Added to Cart");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <>
            <Helmet>
                <title>
                    {car?.name} by {car?.brand} | Car Dealer
                </title>
            </Helmet>

            <section
                style={{ backgroundImage: `url('${car?.image}')` }}
                className="bg-cover bg-center min-h-screen bg-no-repeat "
            >
                <div className="bg-[var(--title)] bg-opacity-70 w-full min-h-screen">
                    <div className="max-w-screen-xl mx-auto flex flex-col-reverse lg:flex-row gap-5 lg:gap-12 py-12 lg:py-24 px-8 lg:px-0">
                        <div className="w-full lg:w-2/3 bg-[var(--bg)] shadow-lg p-5 flex flex-col justify-center items-start">
                            <img className="w-full" src={car?.image} alt={car?.name} />

                            <h1 className="text-3xl sm:text-4xl py-4 font-bold">
                                {car?.name}
                            </h1>

                            <hr className="border-[3px] h-0 border-[var(--red)] w-32 mb-8" />

                            <h4 className="text-base">
                                {car?.description?.split("\n\n").map((para, index) => (
                                    <span key={index}>
                                        <p>{para}</p>
                                        <br />
                                    </span>
                                ))}
                            </h4>
                        </div>
                        <div className="w-full lg:w-1/3 bg-[var(--bg)] shadow-lg p-5 h-fit flex justify-between items-center">
                            <div className="flex flex-col justify-start gap-2">
                                <p>
                                    Brand:{" "}
                                    <span className="font-bold text-[var(--red)]">
                                        {car?.brand}
                                    </span>
                                </p>
                                <p>
                                    Type:{" "}
                                    <span className="font-bold text-[var(--red)]">
                                        {car?.type}
                                    </span>
                                </p>
                                <p>
                                    Price:{" "}
                                    <span className="font-bold text-[var(--red)]">
                                        ${car?.price}
                                    </span>
                                </p>
                                <Rating readonly value={car?.rating} />
                            </div>

                            <Button
                                onClick={handleAddToCart}
                                style={{
                                    filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
                                }}
                                className="bg-[var(--red)] rounded-br-none rounded-tl-none w-fit"
                            >
                                <span className="flex gap-1 justify-between items-center">
                                    Add to Cart
                                    <BiCart className="text-base" />
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CarDetails;

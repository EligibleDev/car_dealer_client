import { Input, Button, Textarea, Rating } from "@material-tailwind/react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const AddProduct = () => {
    const [rating, setRating] = useState(0);
    const [brand, setBrand] = useState(null);
    const [type, setType] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const link = name.replace(/[^a-zA-Z0-9]/g, "_").toLowerCase();
        const price = event.target.price.value;
        const image = event.target.image.value;
        const description = event.target.description.value;

        const newCar = { name, price, brand, type, image, description, rating, link };

        console.log(newCar);

        //sending data to the backend
        fetch("http://localhost:5000/cars", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newCar),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    event.target.reset();
                    return toast.success("Car Added Successfully!");
                }
            });
    };

    return (
        <>
            <Helmet>
                <title>Add New Car | Car Dealer</title>
            </Helmet>

            <div
                style={{ backgroundImage: `url('/feature-car-bg-1.jpg')` }}
                className="h-96 bg-center bg-no-repeat bg-cover"
            >
                <div className="w-full h-full bg-[var(--title)] flex justify-center items-center">
                    <h1 className="text-[var(--text)] text-5xl font-bold">Add a Car</h1>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto py-4 lg:py-24 px-8 xl:px-0">
                <form onSubmit={handleSubmit} action="">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Input
                                className=""
                                color="red"
                                type="text"
                                label="Name"
                                name="name"
                            />
                            <Input
                                className=""
                                color="red"
                                type="number"
                                label="Price"
                                name="price"
                            />
                        </div>
                        <div className="flex gap-4 justify-center items-center">
                            <div className="flex-1">
                                <label className="cursor-pointer" htmlFor="brands">
                                    Select Brand
                                </label>
                                <select
                                    id="brands"
                                    name="brand"
                                    onChange={(e) => setBrand(e.target.value)}
                                    className="bg-[var(--bg)] border  text-[var(--body)] text-sm rounded-lg focus:ring-[var(--red)] focus:border-[var(--red)] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[var(--red)] dark:focus:border-[var(--red)]"
                                >
                                    <option>BMW</option>
                                    <option>Ferrari</option>
                                    <option>Lamborghini</option>
                                    <option>Mercedes</option>
                                    <option>Toyota</option>
                                    <option>Audi</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label className="cursor-pointer" htmlFor="types">
                                    Select Car Type
                                </label>

                                <select
                                    id="types"
                                    name="type"
                                    onChange={(e) => setType(e.target.value)}
                                    className="bg-[var(--bg)] border  text-[var(--body)] text-sm rounded-lg focus:ring-[var(--red)] focus:border-[var(--red)] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[var(--red)] dark:focus:border-[var(--red)]"
                                >
                                    <option>SUV</option>
                                    <option>Sports Car</option>
                                    <option>Van</option>
                                    <option>Crossover</option>
                                    <option>Minivan</option>
                                    <option>Station Wagon</option>
                                    <option>Hatchback</option>
                                </select>
                            </div>
                        </div>

                        <Input
                            color="red"
                            type="url"
                            label="Photo URL"
                            name="image"
                            id=""
                        />

                        <Textarea
                            name="description"
                            color="red"
                            label="Short Description"
                        />

                        <div className="flex justify-end items-center pb-2">
                            <label className="text-right" htmlFor="rating">
                                Car Rating:
                            </label>
                            <Rating
                                className=""
                                id="rating"
                                onChange={(value) => setRating(value)}
                            />
                        </div>

                        <Button
                            type="submit"
                            style={{
                                filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
                            }}
                            className="bg-[var(--red)] ml-auto rounded-br-none rounded-tl-none w-fit"
                        >
                            Add Product
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddProduct;

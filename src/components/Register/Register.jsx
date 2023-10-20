import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import SocialAuth from "../SocialAuth/SocialAuth";
import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const { handleCreateUser, handleUpdateProfile } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        //password validation
        if (password.length < 6) {
            return toast.error("Password has to be at least 6 characters");
        } else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?])/.test(password)) {
            return toast.error(
                "Password has to include at least 1 capital letter and 1 special character"
            );
        }

        //creating user
        handleCreateUser(email, password)
            .then((res) => {
                const user = res.user;
                fetch("https://assignment-10-server-ksm7irbt4-mikails-projects-c152681f.vercel.app/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(user),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.acknowledged) {
                            console.log(data)
                            handleUpdateProfile(name, img);
                            toast.success("Account created successfully");
                            navigate(location?.state ? location.state : "/");
                        }
                    })
                    .catch((error) => console.error(error));
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            });
    };

    return (
        <>
            <Helmet>
                <title>Register | Gamer Zone</title>
            </Helmet>
            <div className=" flex w-full items-center justify-center">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="white">
                        Register
                    </Typography>
                    <Typography color="gray" className="font-normal">
                        Enter your details to Register.
                    </Typography>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                    >
                        <div className="mb-4 flex flex-col gap-6">
                            <Input
                                color="red"
                                required
                                name="name"
                                type="text"
                                size="lg"
                                label="Name"
                            />
                            <Input
                                color="red"
                                name="img"
                                type="url"
                                size="lg"
                                label="Photo URL"
                            />
                            <Input
                                color="red"
                                required
                                name="email"
                                type="email"
                                size="lg"
                                label="Email"
                            />
                            <Input
                                required
                                color="red"
                                name="password"
                                type="password"
                                size="lg"
                                label="Password"
                            />
                        </div>
                        <Checkbox
                            name="terms"
                            required
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-semibold transition-colors"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />

                        <Button
                            style={{
                                filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
                            }}
                            className="bg-[var(--red)] rounded-br-none rounded-tl-none w-fit p-0 block"
                        >
                            <input
                                color="red"
                                className="py-3 px-6 cursor-pointer"
                                type="submit"
                                value="REGISTER"
                            />
                        </Button>

                        <SocialAuth />

                        <Typography color="gray" className="mt-4 text-left font-normal">
                            Already have an account?{" "}
                            <Link
                                to="/login-register/login"
                                className="font-medium text-gray-500"
                            >
                                <b>Login</b>
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default Register;

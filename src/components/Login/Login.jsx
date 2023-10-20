import { Link, useLocation, useNavigate } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import SocialAuth from "../SocialAuth/SocialAuth";
// import useAuth from "../../hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { handleLogin } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        handleLogin(email, password)
            .then((res) => {
                console.log(res);
                toast.success("Login successful");
                navigate(location?.state ? location.state : "/");
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            });
    };

    return (
        <>
            <Helmet>
                <title>Login | Gamer Zone</title>
            </Helmet>
            <div className=" flex w-full items-center justify-center">
                <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="white">
                        Login
                    </Typography>
                    <Typography color="gray" className="font-normal">
                        Enter your details to login.
                    </Typography>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                    >
                        <div className="mb-4 flex flex-col gap-6">
                            <Input
                                color="red"
                                required
                                name="email"
                                type="email"
                                size="lg"
                                label="Email"
                            />
                            <Input
                                color="red"
                                required
                                name="password"
                                type="password"
                                size="lg"
                                label="Password"
                            />
                        </div>

                        <Button
                            style={{
                                filter: `drop-shadow(3px 3px 20px rgba(255, 14, 31, .7))`,
                            }}
                            className="bg-[var(--red)] rounded-br-none rounded-tl-none w-fit p-0 block"
                        >
                            <input
                                className="py-3 px-6 cursor-pointer"
                                type="submit"
                                value="LOGIN"
                            />
                        </Button>
                        <SocialAuth />
                        <Typography color="gray" className="mt-4 text-left font-normal">
                            New Here?{" "}
                            <Link
                                to="/login-register/register"
                                className="font-medium text-gray-500"
                            >
                                <b>Register</b>
                            </Link>
                        </Typography>
                    </form>
                </Card>
            </div>
        </>
    );
};

export default Login;

import { Button } from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialAuth = () => {
    const navigate = useNavigate();
    const { handleGoogleAuth } = useAuth();

    const handleSocialLogin = (media) => {
        media()
            .then((res) => {
                console.log(res);
                toast.success("Google login successful");
                navigate("/");
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <hr className="my-3" />
            <Button
                onClick={() => handleSocialLogin(handleGoogleAuth)}
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3 w-full justify-center mt-4"
            >
                <img
                    src="/Google__G__Logo.svg.webp"
                    alt="metamask"
                    className="h-6 w-6"
                />
                Continue with Google
            </Button>
        </>
    );
};

export default SocialAuth;

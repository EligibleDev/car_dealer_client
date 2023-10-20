import MyButton from "../../components/MyButton/MyButton";

const ErrorPage = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center gap-8">
            <h1 className="text-7xl font-bold">404</h1>

            <div className="text-center">
                <h3 className="text-4xl font-bold">PAGE NOT FOUND</h3>

                <p className="">
                    Oops! The page you are looking for does not exist. It might have been
                    moved or deleted.
                </p>
            </div>

            <MyButton text="back to home" link="/" />
        </section>
    );
};

export default ErrorPage;

import { Outlet } from "react-router-dom";

const LoginRegister = () => {
    return (
        <section className="">
            <div
                style={{ backgroundImage: `url('/feature-car-bg-1.jpg')` }}
                className="h-96 bg-center bg-no-repeat bg-cover"
            >
                <div className="w-full h-full bg-[var(--title)] flex justify-center items-center">
                    <h1 className="text-[var(--text)] text-5xl font-bold">Login/ Register</h1>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto py-24 flex flex-col lg:flex-row justify-between items-center">
                <div className="w-1/2 hidden lg:block">
                    <h1
                        data-aos="fade-up"
                        className="text-2xl sm:text-3xl lg:text-4xl text-left font-extrabold uppercase"
                    >
                        Login or Register to Continue
                    </h1>

                    <hr
                        data-aos="fade-up"
                        className="border-[3px] h-0 border-[var(--red)]  w-32 mt-4"
                    />
                </div>
                <div data-aos="fade-left" className="w-1/2">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default LoginRegister;

const WhyChooseUs = () => {
    return (
        <section className="sm:py-24 py-12 px-8 bg-contain bg-no-repeat bg-[url('/tier_shape_1.png')] sm:bg-none lg:bg-[url('/tier_shape_1.png')] bg-right-bottom">
            <div className="max-w-screen-xl mx-auto flex flex-col gap-5">
                <p className="text-[var(--red)] text-xs font-extrabold">
                    MORE THAN 25+ YEARS EXPERIENCE
                </p>
                <h1 className="sm:text-5xl text-4xl font-bold">Why Choose Us</h1>
                <p className="lg:w-2/3 w-full text-[var(--body)]">
                    Choose us for a journey into automotive excellence. With a passion for
                    precision and innovation, we celebrate the legacy of iconic car
                    manufacturers. Our commitment to quality, performance, and design
                    ensures a curated experience that showcases the best in the world of
                    automobiles. Discover the future of driving with us.
                </p>

                <div className="grid sm:grid-cols-2 grid-cols-1 justify-start items-center lg:w-1/2 w-full gap-7">
                    <div className=" bg-[var(--bg)] p-5 flex items-center justify-center gap-2 shadow-[0px_4px_20px_rgba(227,227,227,0.6)] border-[var(--body)] my-block">
                        <img src="\feature_4_1.svg" alt="" />
                        <span className="">
                            <h4 className="text-xl font-bold">Master Technician</h4>
                            <p className="text-sm font-light text-[var(--body)]">
                                Interactively generate
                            </p>
                        </span>
                    </div>

                    <div className=" bg-[var(--bg)] p-5 flex items-center justify-center gap-2 shadow-[0px_4px_20px_rgba(227,227,227,0.6)] border-[var(--body)] my-block">
                        <img src="\feature_4_2.svg" alt="" />
                        <span className="">
                            <h4 className="text-xl font-bold">Domestic Repair</h4>
                            <p className="text-sm font-light text-[var(--body)]">
                                Interactively generate
                            </p>
                        </span>
                    </div>

                    <div className=" bg-[var(--bg)] p-5 flex items-center justify-center gap-2 shadow-[0px_4px_20px_rgba(227,227,227,0.6)] border-[var(--body)] my-block">
                        <img src="\feature_4_3.svg" alt="" />
                        <span className="">
                            <h4 className="text-xl font-bold">Reliable Warranty</h4>
                            <p className="text-sm font-light text-[var(--body)]">
                                Interactively generate
                            </p>
                        </span>
                    </div>

                    <div className=" bg-[var(--bg)] p-5 flex items-center justify-center gap-2 shadow-[0px_4px_20px_rgba(227,227,227,0.6)] border-[var(--body)] my-block">
                        <img src="\feature_4_4.svg" alt="" />
                        <span className="">
                            <h4 className="text-xl font-bold">No Worries</h4>
                            <p className="text-sm font-light text-[var(--body)]">
                                Interactively generate
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

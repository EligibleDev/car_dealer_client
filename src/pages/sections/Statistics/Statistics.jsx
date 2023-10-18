import React from "react";
import PropTypes from "prop-types";
import { useCountUp } from "react-countup";
import { AiFillCar } from "react-icons/ai";
import { FaMoneyBillWave, FaCarSide } from "react-icons/fa";
import { RiOilFill } from "react-icons/ri";
const Statistics = () => {
    const Counter = ({ number, id }) => {
        useCountUp({ ref: id, end: number, enableScrollSpy: true });
        return <span id={id} />;
    };

    const CounterBlock = ({ number, title, id, icon }) => {
        return (
            <div className="flex justify-center items-center gap-4">
                <div className="bg-[var(--red)] w-20 h-20 rounded-full flex justify-center items-center">
                    {React.createElement(icon, {
                        className: `text-3xl text-[var(--bg)]`,
                    })}
                </div>
                <div className="">
                    <h1 className="text-4xl font-extrabold">
                        <Counter number={number} id={id} />
                    </h1>
                    <p className="uppercase font-bold text-[var(--body)]">{title}</p>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-[calc(100vh-729px)] lg:justify-between justify-center items-center max-w-screen-xl mx-auto grid grid-cols-1 py-8 px-8 lg:px-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <CounterBlock
                icon={AiFillCar}
                number={54813}
                title="Total Cars Listed"
                id="games-played"
            />
            <CounterBlock
                icon={FaMoneyBillWave}
                number={18500}
                title="Average Price"
                id="flags-taken"
            />
            <CounterBlock
                icon={FaCarSide}
                number={15481}
                title="Total Test Drives"
                id="death-matches"
            />
            <CounterBlock
                icon={RiOilFill}
                number={32050}
                title="Average Mileage"
                id="tournaments"
            />
        </div>
    );
};

Statistics.propTypes = {
    icon: PropTypes.string,
    number: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
};
export default Statistics;

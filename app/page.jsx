"use client";

import { useState } from "react";

import Image from "next/legacy/image";

import MilkIcon1 from "@public/assets/images/MilkIcon.png";
import MilkIcon2 from "@public/assets/images/MilkIcon2.png";

import CowIcon from "@public/assets/icons/cow-White.svg";
import CowBlack from "@public/assets/icons/Cowicon.svg";
import CowImage from "@public/assets/images/ourStory.png";

import DataCard from "@static/data/card";

const Home = () => {
    const [currentYear, setCurrentYear] = useState(1995);

    const SelectedYear = (value) => {
        setCurrentYear(value);
    };

    const ourStory = [
        {
            id: "1",
            value: 1955,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "../assets/images/ourStory.png",
        },
        {
            id: "2",
            value: 1956,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "../assets/images/ourStory.png",
        },
        {
            id: "3",
            value: 1975,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "../assets/images/ourStory.png",
        },
        {
            id: "4",
            value: 1977,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "../assets/images/ourStory.png",
        },
        {
            id: "5",
            value: 1978,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: "../assets/images/ourStory.png",
        },
    ];

    const products = [
        {
            id: '1',
            image: '../assets/images/butter.png',
            title: 'Butter',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed'
        },

        {
            id: '2',
            image: '../assets/images/MilkCup.png',
            title: 'Butter',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed'
        },

        {
            id: '3',
            image: '../assets/images/cheese.png',
            title: 'Butter',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed'
        },
    ]

    return (
        <div className="">
            <div
                className="relative"
                style={{
                    backgroundImage: `url("../assets/background/cowsbg.png")`,
                    height: "100vh",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    zIndex: -1,
                }}
            />

            {/* header */}
            <div className="font flex-center pt-32 absolute top-60 left-0 right-0">
                <h1 className="text-white md:text-8xl pb-5">Milk & More</h1>
                <h2 className="text-white md:text-3xl pb-5">Fresh Local Delivered</h2>
                <button className="btn">View Our Products</button>
            </div>

            {/* Welcome section */}

            <section className="bg-[#2E3090] min-h-[25vh] w-full">
                <div className="flex items-center justify-center relative">
                    <div>
                        <div className="absolute top-0 left-0">
                            <Image src={MilkIcon1} />
                        </div>
                        <div className="absolute top-0 right-0">
                            <Image src={MilkIcon2} />
                        </div>
                    </div>

                    <div className="text-center pt-10">
                        <h1 className="text-white md:text-5xl pb-10">
                            Welcome To Our Family
                        </h1>
                        <Image src={CowIcon} className="" />
                        <p className=" text-white break-before-all md:text-3xl pb-5">
                            Here you will find a wide range of healthy and fresh products that
                            , <br /> were proudly produced by our farm
                        </p>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className="flex items-center justify-center gap-20 pt-20 pb-20">
                {DataCard.map((card) => {
                    return (
                        <div key={card.id} className="flex flex-col items-center">
                            <div>
                                <img src={card.img} alt="" />
                            </div>
                            <div className="text-center pt-10">
                                <h1>{card.title}</h1>
                                <p className="">{card.description}</p>
                            </div>
                            <button className="btn mt-6">Lorem Ipsum</button>
                        </div>
                    );
                })}
            </section>

            {/* What's fresh section */}
            <section className="relative">
                <div
                    className=""
                    style={{
                        backgroundImage: `url("../assets/background/cowsBg2.png")`,
                        height: "100vh",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                    <div className="mx-52 pt-52 z-20 relative">
                        <h1 className="font whatfresh md:text-8xl pb-5">What's Fresh</h1>
                        <h2 className="font text-white md:text-4xl pb-5">
                            From our Family ,<br />
                            To Yours
                        </h2>
                        <p className="text-white text-2xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
                            <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor <br /> sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididun <br />t ut labore et dolore magna
                            aliqua.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center">
                <div className="pt-20">
                    <h1 className="text-center text-4xl pb-5">About Us</h1>
                    <div className="flex justify-center items-center gap-10">
                        <div className="w-[60px] h-[2px] bg-black" />
                        <Image src={CowBlack} alt="cow icon" />
                        <div className="w-[60px] h-[2px] bg-black" />
                    </div>
                    {/* our story card */}
                    <div className="grid grid-cols-2 justify-center flex-shrink-0 pt-24">
                        <div>
                            <img src="../assets/images/ourStory.png" alt="" />
                        </div>
                        <div className="flex flex-col items-center bg-[#FFEFC6]">
                            <div className="flex justify-center items-center gap-10 mt-5 px-16 p-3 bg-[#FDD976] rounded-[20px] cursor-pointer">
                                <span className="bg-[#FEC321] px-5 p-1 rounded-[10px]">1995</span>
                                <span>1996</span>
                                <span>1997</span>
                                <span>1998</span>
                            </div>
                            <div className="text-center pt-10">
                                <h1 className="pt-5 text-4xl">Our Story</h1>
                                <p className="pt-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. <br />
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* product */}
            <section className="pt-36">
                <h1 className="text-center text-4xl pb-5">Products</h1>
                <div className="flex justify-center items-center gap-10">
                    <div className="w-[60px] h-[2px] bg-black" />
                    <Image src={CowBlack} alt="cow icon" />
                    <div className="w-[60px] h-[2px] bg-black" />
                </div>

                <div>
                    {
                        products.map((items) => (
                            <div key={items.id}>
                                <div>
                                    <img src={items.image} alt="" />
                                </div>
                                <div>
                                    <h1>{items.title}</h1>
                                    <h2>{items.description}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;
"use client";

import Image from "next/image";
import { DownloadIcon, FacebookIcon } from "../app/icons";
import avatarUrl from "/public/avatar.jpg";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";

export default function AboutPage() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const gotoMyPortfolio = () => {
        const target = document.getElementById("portfolio");

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 150,
                behavior: "smooth",
            });
        }
    };
    const gotoContact = () => {
        const target = document.getElementById("contact");

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 150,
                behavior: "smooth",
            });
        }
    };
    return (
        <>
            <div className="flex justify-between items-center md:gap-10 mt-20 md:mt-32">
                <div className="md:w-[648px] w-full">
                    <div
                        className={clsx(
                            "flex flex-col gap-6",
                            isInView && "animate-fade-right"
                        )}
                        ref={ref}
                    >
                        <div className="flex items-end justify-between">
                            <h1 className="xl:text-7xl md:text-5xl text-4xl font-semibold">
                                {` Hello, I'm`}
                                <br />
                                {`Hoc Vu`}
                            </h1>
                            <Image
                                src={avatarUrl}
                                width={536}
                                height={636}
                                alt=""
                                className="md:hidden rounded-3xl w-[40%] object-cover shadow-lg"
                            />
                        </div>
                        <p>{`I'm a Web Developer based in Hanoi, Vietnam.`}</p>
                        <p>
                            {`With 5 years of experience in web and mobile software development. I specialize in HTML, CSS, and JavaScript/TypeScript (ReactJS, NextJS).`}
                        </p>
                        <p>
                            {`I am passionate about building beautiful, user-friendly systems that work seamlessly across devices (laptops, tablets, mobiles).`}
                        </p>
                        <p>
                            {`My goal is to create interfaces that users love and find easy to use.`}
                        </p>
                        <button
                            onClick={gotoContact}
                            className="bg-blue-500 text-white rounded px-6 py-3 hover:opacity-80 w-32"
                        >
                            Say Hello!
                        </button>
                        <div
                            className={clsx(
                                "grid grid-cols-3 text-center bg-blue-100 rounded-md  mt-8",
                                isInView && "animate-fade-up"
                            )}
                            ref={ref}
                        >
                            <div className="my-4">
                                <h3 className="text-gray-700">
                                    {new Date().getFullYear() - 2019}+ Y.
                                </h3>
                                <p>Experience</p>
                            </div>
                            <div className="border-x-2 border-white py-4">
                                <h3 className="text-gray-700">20+</h3>
                                <p>Projects Completed</p>
                            </div>
                            <div className="my-4">
                                <h3 className="text-gray-700">20+</h3>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Image
                    ref={ref}
                    src={avatarUrl}
                    width={536}
                    height={636}
                    alt=""
                    className={clsx(
                        "hidden md:block rounded-3xl xl:w-[536px] w-1/2  shadow-lg",
                        isInView && "animate-fade-left"
                    )}
                />
            </div>
            <div
                id="about"
                ref={ref}
                className={clsx(
                    "flex justify-between items-center xl:gap-32 gap-12 shadow-xl xl:p-28 md:p-8 p-4 xl:mt-[230px] md:mt-[70px] mt-[30px] mb-[90px] xl:bg-white bg-slate-100 rounded-2xl",
                    isInView && "animate-fade-up"
                )}
            >
                <div className="md:block hidden md:w-[424px] flex-1">
                    <Image
                        src={avatarUrl}
                        alt=""
                        width={424}
                        height={468}
                        className="rounded-3xl"
                    />
                    {/* <div className="flex justify-center items-center p-3">
            <FacebookIcon />
          </div> */}
                </div>
                <div className={clsx("flex-1")}>
                    <h3 className={clsx("md:text-[38px]")}>
                        I am Professional
                        <br /> Web Developer
                    </h3>
                    <br />
                    <p>
                        I design and develop services for customers specializing
                        creating stylish, modern websites, web services and
                        online stores. My passion is to design digital user
                        experiences.
                    </p>
                    <br />
                    <p>
                        I design and develop services for customers specializing
                        creating stylish, modern websites and web services.
                    </p>
                    <br />
                    <div className="flex gap-4 flex-col md:flex-row">
                        <button
                            onClick={gotoMyPortfolio}
                            className="bg-blue-500 text-white px-6 py-3 rounded border border-blue-500 font-bold"
                        >
                            My Projects
                        </button>

                        <Link
                            href={
                                "https://drive.google.com/file/d/1HQXHdikDx33zqCzayvc6eqddqwxBAN3R/view"
                            }
                            target="_blank"
                        >
                            <button className="text-blue-500 border border-blue-500 px-6 py-3 rounded font-bold flex justify-center w-full">
                                <DownloadIcon
                                    width={24}
                                    height={24}
                                    color="#3b82f6"
                                />
                                View my CV
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

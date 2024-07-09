"use client";

import { motion } from "framer-motion";

export default function WhatIDo() {
    return (
        <div
            className="flex flex-col md:flex-row xl:gap-36 gap-8 item-center 2xl:mt-[150px] xl:mt-[80px] mt-[100px]"
            id="services"
        >
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="md:text-5xl font-semibold text-[#333333]">
                    What I do?
                </h3>
                <br />
                <p>
                    <span className="font-bold text-blue-600 bg-blue-100">
                        Research solutions
                    </span>{" "}
                    from your requirements.{" "}
                    <span className="font-bold text-blue-600 bg-blue-100">
                        Analyze, design, and develop
                    </span>{" "}
                    the product{" "}
                    <span className="font-bold text-blue-600 bg-blue-100">
                        as quickly as possible
                    </span>{" "}
                    so you can experience it and make necessary adjustments.
                </p>
                <br />
                <p>
                    <span className="font-bold text-blue-600 bg-blue-100">
                        The results of the product
                    </span>{" "}
                    will{" "}
                    <span className="font-bold text-blue-600 bg-blue-100">
                        satisfy you
                    </span>
                    , and{" "}
                    <span className="font-bold text-blue-600 bg-blue-100">
                        that brings me happiness.
                    </span>
                </p>
                <br />
                <motion.button
                    className="bg-blue-500 text-white px-6 py-3 rounded hover:opacity-80 w-[150px]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Say Hello!
                </motion.button>
            </div>
            <div className="flex-1 flex flex-col gap-6">
                <div className="border-l-4 hover:border-blue-500 shadow rounded p-8 bg-white">
                    <h2 className="text-2xl font-semibold text-gray-900 ">
                        Research & Analyze
                    </h2>
                    <p>
                        Find solutions and technologies that meet your
                        requirements. Ensure that no requirements are
                        overlooked, giving you a comprehensive view of the
                        product you desire.
                    </p>
                </div>
                <div className="border-l-4 hover:border-blue-500 shadow rounded p-8 bg-white">
                    <h2 className="text-2xl font-semibold text-gray-900 ">
                        Design User Interface (UI/UX)
                    </h2>
                    <p>
                        Sketch your ideas into a mockup (Figma), helping you
                        easily visualize your product. Then, make necessary
                        adjustments and changes before starting to build the
                        system.
                    </p>
                </div>
                <div className="border-l-4 hover:border-blue-500 shadow rounded p-8 bg-white">
                    <h2 className="text-2xl font-semibold text-gray-900 ">
                        Web/Mobile Development
                    </h2>
                    <p>
                        Develop the product on Web/Mobile platforms based on
                        your requirements. I am committed to building systems
                        that ensure high performance, user-friendly interfaces,
                        and are up-to-date with trends and technology, providing
                        the best user experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

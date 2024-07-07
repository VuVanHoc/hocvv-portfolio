"use client";

import { motion } from "framer-motion";

export default function WhatIDo() {
    return (
        <div
            className="flex flex-col md:flex-row xl:gap-36 gap-8 item-center pb-[150px] 2xl:mt-[150px] xl:mt-[80px]"
            id="services"
        >
            <div className="flex-1 flex flex-col justify-center">
                <h3 className="md:text-5xl font-semibold text-[#333333]">
                    What I do?
                </h3>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu, varius eget velit non, laoreet imperdiet
                    orci. Mauris ultrices eget lorem ac vestibulum. Suspendis
                    imperdiet,
                </p>
                <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu, varius eget velit non.
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
                        User Experience (UX)
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla purus arcu, varius eget velit non, laoreet
                        imperdiet orci. Mauris ultrices eget lorem ac
                        vestibulum.
                    </p>
                </div>
                <div className="border-l-4 hover:border-blue-500 shadow rounded p-8 bg-white">
                    <h2 className="text-2xl font-semibold text-gray-900 ">
                        User Interface (UI)
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla purus arcu, varius eget velit non, laoreet
                        imperdiet orci. Mauris ultrices eget lorem ac
                        vestibulum.
                    </p>
                </div>
                <div className="border-l-4 hover:border-blue-500 shadow rounded p-8 bg-white">
                    <h2 className="text-2xl font-semibold text-gray-900 ">
                        Web/Mobile Development
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nulla purus arcu, varius eget velit non, laoreet
                        imperdiet orci. Mauris ultrices eget lorem ac
                        vestibulum.
                    </p>
                </div>
            </div>
        </div>
    );
}

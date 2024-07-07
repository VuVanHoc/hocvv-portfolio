"use client";

import { motion } from "framer-motion";
import { RightArrowIcon } from "../icons";

export default function DiscussSuggest() {
    return (
        <div className="text-center flex flex-col items-center bg-gray-900 text-white 2xl:py-[100px] xl:py-[50px] py-8 2xl:px-[300px] xl:px-[100px] px-2">
            <h3 className="md:text-5xl text-xl font-semibold">
                Do you have Project Idea?
                <br />
                {`Let's discuss your project!`}
            </h3>
            <br />
            <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
            </p>
            <motion.button
                className="bg-blue-500 text-white px-6 py-3 rounded hover:opacity-80 mt-12 flex items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {`Let's work Together`}
                <RightArrowIcon color="white" width={24} height={24} />
            </motion.button>
        </div>
    );
}

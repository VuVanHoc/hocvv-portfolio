"use client";

import { motion } from "framer-motion";
import { RightArrowIcon } from "../app/icons";
import { Meteors } from "./ui/meteors";

export default function DiscussSuggest() {
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
        <div className="relative text-center flex flex-col items-center bg-gray-900 text-white 2xl:py-[100px] xl:py-[50px] py-8 2xl:px-[300px] xl:px-[100px] px-2 overflow-hidden">
            <Meteors />
            <h3 className="md:text-5xl text-xl font-semibold">
                Do you have Project Idea?
            </h3>
            <br />
            <p>Send me a message, and we can discuss more about your idea.</p>
            <p>{`Let's transform your ideas into real products together!`}</p>
            <motion.button
                onClick={gotoContact}
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

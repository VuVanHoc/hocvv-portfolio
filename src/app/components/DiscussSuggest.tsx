"use client";

import { motion } from "framer-motion";
import { RightArrowIcon } from "../icons";

export default function DiscussSuggest() {
  return (
    <div className="text-center flex flex-col items-center bg-gray-900 text-white py-[100px] px-[300px]">
      <h1 className="text-5xl font-semibold">
        Do you have Project Idea?
        <br />
        {`Let's discuss your project!`}
      </h1>
      <br />
      <p>
        There are many variations of passages of Lorem Ipsum available,
        <br />
        but the majority have suffered alteration.
      </p>
      <motion.button
        className="bg-purple-500 text-white px-6 py-3 rounded hover:opacity-80 mt-12 flex items-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {`Let's work Together`}
        <RightArrowIcon color="white" width={24} height={24} />
      </motion.button>
    </div>
  );
}

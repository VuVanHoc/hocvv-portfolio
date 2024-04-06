"use client";

import { useMemo } from "react";
import PortfolioCardItem, { IPortfolio } from "./PortfolioCardItem";
import { motion } from "framer-motion";

export default function Portfolio() {
  const portflios = useMemo<IPortfolio[]>(
    () => [
      {
        image: "/project-1.png",
        title: "Product Admin Dashboard",
        description:
          "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        id: "1",
        category: "UI-UX Design",
      },
      {
        image: "/project-2.png",
        title: "Product Admin Dashboard",
        description:
          "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        id: "2",
        category: "UI-UX Design",
      },
      {
        image: "/project-3.png",
        title: "Product Admin Dashboard",
        description:
          "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        id: "3",
        category: "UI-UX Design",
      },
      {
        image: "/project-4.png",
        title: "Product Admin Dashboard",
        description:
          "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        id: "4",
        category: "UI-UX Design",
      },
      {
        image: "/project-5.png",
        title: "Product Admin Dashboard",
        description:
          "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        id: "5",
        category: "UI-UX Design",
      },
      {
        image: "/project-6.png",
        title: "Product Admin Dashboard",
        description:
          "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        id: "6",
        category: "UI-UX Design",
      },
    ],
    []
  );
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center pb-[100px] mt-[100px]"
    >
      <h1 className="text-5xl font-semibold">Portfolio</h1>
      <br />
      <p className="text-center">
        There are many variations of passages of Lorem Ipsum available, <br />
        but the majority have suffered alteration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 pt-[70px]">
        {portflios.map((portfolio) => (
          <PortfolioCardItem portfolio={portfolio} key={portfolio.id} />
        ))}
      </div>
      <motion.button
        className="bg-purple-500 text-white px-6 py-3 rounded hover:opacity-80 mt-12"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        More Project
      </motion.button>
    </div>
  );
}

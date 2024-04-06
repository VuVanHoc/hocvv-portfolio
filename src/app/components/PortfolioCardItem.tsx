"use client";

import Image from "next/image";
import { RightArrowIcon } from "../icons";
import { motion } from "framer-motion";

export interface IPortfolio {
  image: string;
  title: string;
  category: string;
  description: string;
  id: string;
}
interface PortfolioCardItemProps {
  portfolio: IPortfolio;
}
export default function PortfolioCardItem({
  portfolio,
}: PortfolioCardItemProps) {
  return (
    <div className="shadow-xl rounded-lg bg-white">
      <Image
        src={portfolio.image}
        alt={portfolio.title}
        width={424}
        height={248}
        className="w-full aspect-[424/248]"
      />
      <div className="p-5">
        <p className="text-xs text-gray-400">{portfolio.category}</p>
        <p className="text-lg font-semibold">{portfolio.title}</p>
        <p className="text-gray-600">{portfolio.description}</p>
        <br />
        <motion.button
          className="text-purple-500 flex items-center font-semibold border-purple-500 rounded border px-6 py-3"
          whileHover={{ scale: 1.1 }}
        >
          Case study
          <RightArrowIcon width={24} height={24} />
        </motion.button>
      </div>
    </div>
  );
}

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
        <div className="shadow-xl rounded-lg bg-white group cursor-pointer">
            <div className="overflow-hidden z-0">
                <Image
                    src={portfolio.image}
                    alt={portfolio.title}
                    width={424}
                    height={248}
                    className="w-full aspect-[424/248] rounded-lg object-cover object-top group-[&:hover]:scale-110 group-[&:hover]:transition-all duration-300"
                />
            </div>

            <div className="p-5 group-[&:hover]:bg-blue-50">
                <p className="text-xs text-gray-400">{portfolio.category}</p>
                <p className="text-lg font-semibold">{portfolio.title}</p>
                <p className="text-gray-600 text-ellipsis line-clamp-3">
                    {portfolio.description}
                </p>
                <br />
                <motion.button
                    className="text-blue-500 flex items-center font-semibold border-blue-500 rounded border px-6 py-3"
                    whileHover={{ scale: 1.1 }}
                >
                    Case study
                    <RightArrowIcon width={24} height={24} />
                </motion.button>
            </div>
        </div>
    );
}

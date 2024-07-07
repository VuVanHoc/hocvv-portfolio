"use client";

import { useMemo } from "react";
import PortfolioCardItem, { IPortfolio } from "./PortfolioCardItem";
import { motion } from "framer-motion";

export default function Portfolio() {
    const portflios = useMemo<IPortfolio[]>(
        () => [
            {
                image: "/worldburger.png",
                title: "World Burger",
                description:
                    "An advertising website for a Hamburger chain in Korea. Requires high requirements for effect, attraction and eye-catching",
                id: "1",
                category: "E-commerce website",
                link: "https://www.worldburger.co.kr/",
            },
            {
                image: "/salesbox.jpg",
                title: "Salesbox CRM - System AB",
                description:
                    "Salesbox CRM is a CRM system help to manage customer, product, order, and more. From a European software company born in Stockholm Sweden ",
                id: "2",
                category: "CRM Webapp",
            },
            {
                image: "/purrfund.png",
                title: "Purr Fund",
                description:
                    "The first decentralized Launchpad and Launchpool for NFTs. It is a decentralized Launchpad and Launchpool for NFTs.",
                id: "3",
                category: "Web3 app",
            },
            {
                image: "/seagate.png",
                title: "SeaGate Fund",
                description:
                    "SeaGate is a fair and trusted ICO, IDO launchpad platform that kickstarts Web3 projects on emerging networks",
                id: "4",
                category: "Web3 app",
            },
            {
                image: "/financialrisk.png",
                title: "Financial Risk Management Software",
                description:
                    "A unique combination of Capital Markets Experts, Leading Mathematicians and Pioneering Technologist.",
                id: "5",
                category: "Enterprise",
            },
            {
                image: "/hscan.png",
                title: "Peronal Medical Images Storage",
                description:
                    "It has easy to use management system for your life time medical image storage. H-Scan allows you free from the inconvenience of damaging or losing the CD. You can view your medical images at anytime and place",
                id: "6",
                category: "Healthcare",
            },
        ],
        []
    );
    return (
        <div
            id="portfolio"
            className="flex flex-col items-center justify-center pb-[100px] mt-[100px]"
        >
            <h3 className="md:text-5xl font-semibold">Portfolio</h3>
            <br />
            <p className="text-center">
                A few projects that I have completed. <br />
                Thank you to all the customers who have always trusted me.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 md:pt-[70px] pt-[40px]">
                {portflios.map((portfolio) => (
                    <PortfolioCardItem
                        portfolio={portfolio}
                        key={portfolio.id}
                    />
                ))}
            </div>
            {/* <motion.button
                className="bg-blue-500 text-white px-6 py-3 rounded hover:opacity-80 mt-12"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                More Project
            </motion.button> */}
        </div>
    );
}

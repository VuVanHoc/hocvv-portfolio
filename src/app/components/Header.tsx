"use client";

import Link from "next/link";
import { ROUTERS } from "../routers";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { MenuBarIcon } from "../icons";

export default function Header() {
    useEffect(() => {
        const smoothScroll = (targetId: string) => {
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 150,
                    behavior: "smooth",
                });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        };

        const handleClick = (event: MouseEvent, targetId: string) => {
            event.preventDefault();
            smoothScroll(targetId);
        };

        const links =
            document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
        links.forEach((link) => {
            link.addEventListener("click", (event) => {
                const currentTarget = event?.currentTarget as HTMLAnchorElement;
                const targetId = currentTarget
                    ?.getAttribute?.("href")
                    ?.substring(1);
                handleClick(event, targetId || "");
            });
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", handleClick as any);
            });
        };
    }, []);

    return (
        <motion.header
            className="bg-white 2xl:px-[300px] xl:px-[100px] px-[20px] md:py-[20px] py-2 fixed top-0 left-0 w-full shadow z-10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ stiffness: 200, type: "spring" }}
        >
            <nav className="flex justify-between items-center">
                <Logo />
                <ul className="xl:flex hidden">
                    {ROUTERS.map((router) => (
                        <motion.li
                            key={router.to}
                            className="px-6 py-3 hover:scale-110"
                            whileHover={{ scale: 1.2, color: "navy" }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link href={router.to}>{router.title}</Link>
                        </motion.li>
                    ))}

                    <motion.button
                        className="bg-blue-500 text-white px-6 py-3 rounded hover:opacity-80"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Contact
                    </motion.button>
                </ul>
                <div className="xl:hidden">
                    <MenuBarIcon width={32} height={32} />
                </div>
            </nav>
        </motion.header>
    );
}

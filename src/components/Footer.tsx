import Link from "next/link";
import { ROUTERS } from "../app/routers";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="text-white w-full bg-gray-800 py-10 md:px-[100px] px-5 flex flex-col md:flex-row justify-between md:items-center items-start">
            <Logo />
            <div>
                <ul className="xl:flex hidden">
                    {ROUTERS.map((router) => (
                        <li key={router.to} className="px-6 py-3">
                            <Link href={router.to}>{router.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <p>
                Copyright © 2024. All Rights Reserved.
                <br /> By Hoc Vu - with 💖😁😎
            </p>
        </footer>
    );
}

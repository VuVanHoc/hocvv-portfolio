import Link from "next/link";
import { ROUTERS } from "../routers";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="hidden text-white fixed bottom-0 w-full bg-gray-800 h-80 px-[300px] flex justify-between items-center">
      <Logo />
      <div>
        <ul className="flex">
          {ROUTERS.map((router) => (
            <li key={router.to} className="px-6 py-3">
              <Link href={router.to}>{router.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p>Copyright © 2024 Picto.</p>
    </footer>
  );
}

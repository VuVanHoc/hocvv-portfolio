import Link from "next/link";
import { ROUTERS } from "../routers";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="text-white w-full bg-gray-800 py-10 md:px-[100px] px-5 flex justify-between items-center">
      <Logo />
      <div>
        <ul className="md:flex hidden">
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

import type { Metadata } from "next";
import { Poppins, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Work_Sans({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
    title: "Portfolio - Hoc Vu",
    description: "Hello from Hoc Vu - Portfolio about myself",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}

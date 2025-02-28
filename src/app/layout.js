import { Barlow, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/navbar";

const barlow = Barlow({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-barlow",
});

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    variable: "--font-raleway",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${barlow.variable} ${raleway.variable}`}>
        <Navbar />
        {children}
        </body>
        </html>
    );
}

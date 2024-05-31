import type { Metadata } from "next";
import { Recursive as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "LogoPulse",
    description:
        "Create stunning, professional logos in minutes with LogoMaster. Choose from a vast library of templates, customize with ease, and download instantly. Perfect for businesses, startups, and personal brands looking to craft a unique identity. Start designing your logo today!",
    keywords:
        "logo creation, logo design, branding, custom logo, business logo, AI logo design, online logo maker, LogoMaster",
    authors: [{ name: "logoPulse", url: "" }],
    twitter: {
        card: "summary_large_image",
        title: "Craft Your Brand's Identity Instantly with logoPulse",
        description:
            "Create stunning, professional logos in minutes with LogoMaster. Choose from a vast library of templates, customize with ease, and download instantly. Start designing now!",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("font-sans antialiased", fontSans.variable)}>
                <Navbar />
                <main className="min-h-screen flex flex-col bg-background">
                    <div className="flex-1 flex flex-col h-full">{children}</div>
                    <Footer />
                </main>
            </body>
        </html>
    );
}

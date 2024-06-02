"use client";
import { Heart, Rabbit } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav
            className={cn(
                "z-[100] h-14 bg-zinc-900 inset-x-0 top-0 w-full border-b border-slate-400/50 shadow-lg transition-all",
                {
                    "h-16": !pathname.includes("/create"),
                }
            )}
        >
            <MaxWidthWrapper>
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center gap-4">
                        <Rabbit className="text-white/90 size-8" />
                        <p className="text-white/90 text-xl font-extrabold">LogoPulse</p>
                    </div>
                    <Link
                        href="https://github.com/Aadil-Shabir/logoPulse"
                        target="_blank"
                        className={buttonVariants({
                            variant: "outline",
                            className: cn(
                                "flex gap-2 items-center bg-[#bdbdbd] hover:bg-[#919191] border-[#bdbdbd] hover:border-[#919191]",
                                {
                                    hidden: pathname.includes("/create"),
                                }
                            ),
                            size: "sm",
                        })}
                    >
                        Star on Github <Heart className="size-4 fill-red-600" />
                    </Link>
                    <Link
                        href="/"
                        className={buttonVariants({
                            className: cn(
                                "px-8 bg-transparent border-slate-300 border text-slate-300 hover:bg-zinc-800/80",
                                {
                                    hidden: !pathname.includes("/create"),
                                }
                            ),
                            size: "sm",
                        })}
                    >
                        Exit
                    </Link>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;

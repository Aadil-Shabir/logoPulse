import { Heart, Rabbit } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
    return (
        <nav className="z-[100] h-16 bg-zinc-900 inset-x-0 top-0 w-full border-b border-slate-500/20 shadow-lg transition-all">
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
                            className:
                                "flex gap-2 items-center bg-[#bdbdbd] hover:bg-[#919191] border-[#bdbdbd] hover:border-[#919191]",
                            size: "sm",
                        })}
                    >
                        Star on Github <Heart className="size-4 fill-red-600" />
                    </Link>
                </div>
            </MaxWidthWrapper>
        </nav>
    );
};

export default Navbar;

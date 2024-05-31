import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { Rabbit } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-zinc-900">
            <MaxWidthWrapper className="flex lg:flex-row gap-8 flex-col-reverse lg:justify-between lg:items-start items-center lg:pb-20 pb-12 pt-8">
                <div className="flex flex-col">
                    <div className="flex gap-1 flex-col items-center">
                        <Rabbit className="size-10 text-white/90" />
                        <div className="flex flex-col gap-2 items-center">
                            <p className="text-white/90 text-base">LogoPulse</p>
                            <div className="flex gap-2 items-center">
                                <p className="text-xs text-white/90">
                                    An app by
                                    <Link
                                        target="_blank"
                                        href="https://www.linkedin.com/in/ab-memon-31642b1b5/"
                                        className={buttonVariants({
                                            variant: "link",
                                            className: "px-[4px] py-0 h-0 underline text-xs",
                                        })}
                                    >
                                        AB Memon
                                    </Link>
                                </p>
                                <img
                                    className="size-7 object-cover rounded-full border-2 border-white dark:border-gray-800"
                                    src="/users/user-4.jpg"
                                    alt=""
                                />
                            </div>
                            <p className="text-sm text-white/50">Copyright © 2024 - All right reserved</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <Link
                        href="#"
                        className={buttonVariants({
                            variant: "link",
                            className: "text-white/90 ",
                        })}
                    >
                        Terms
                    </Link>
                    <Link
                        href="#"
                        className={buttonVariants({
                            variant: "link",
                            className: "text-white/90",
                        })}
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="#"
                        className={buttonVariants({
                            variant: "link",
                            className: "text-white/90",
                        })}
                    >
                        Cookies policy
                    </Link>
                </div>
            </MaxWidthWrapper>
        </footer>
    );
};

export default Footer;

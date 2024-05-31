import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Star, Check, Rabbit } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import LogoExamples from "@/components/LogoExamples";

export default function Home() {
    return (
        <div className="bg-zinc-900/95">
            <section>
                <MaxWidthWrapper className="lg:grid lg:grid-cols-2 lg:gap-10 gap-6 lg:py-20 py-14">
                    <div className="flex flex-col lg:items-start items-center lg:text-start text-center lg:py-14 py-20 justify-center gap-10">
                        <p className="text-white/90 lg:font-extrabold font-bold sm:text-6xl text-5xl">
                            Craft Your Brand's Identity <span className="text-yellow-400">Instantly</span>
                        </p>
                        <p className="text-muted text-xl">
                            Unlock your brand's potential with our easy-to-use logo design tools. Create a stunning,
                            professional logo in minutes and watch your vision come to life!
                        </p>
                        <div>
                            <Link
                                href="/create/logo"
                                className={buttonVariants({
                                    size: "lg",
                                    className: "md:px-[60px] px-12 flex gap-2 items-center py-6",
                                })}
                            >
                                <Rabbit className="size-5 text-black/85 fill-transparent" />
                                <span className="text-black/85 font-medium text-base">Create Logo</span>
                            </Link>
                        </div>
                        <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                            <AvatarCircles numPeople={"1K"} />
                            <div className="flex flex-col justify-between items-center sm:items-start">
                                <div className="flex gap-0.5">
                                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                </div>
                                <p className="text-muted">
                                    <span className="font-semibold">1000+</span> customers have tried this
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:justify-end justify-center items-center" aria-hidden="true">
                        <Image src="/rabbit.png" width={250} height={250} alt="hero image" className="" />
                    </div>
                </MaxWidthWrapper>
            </section>
            <section>
                <MaxWidthWrapper className="lg:py-20 py-14 flex items-center justify-center flex-col">
                    <div className="border border-slate-500/20 rounded-xl lg:px-6 px-4 lg:py-6 py-4 max-w-2xl shadow-sm relative">
                        <BorderBeam size={300} duration={10} delay={9} className="hidden md:block" />
                        <div className="flex flex-col text-muted gap-">
                            <p className="font-medium sm:text-3xl text-2xl text-yellow-400 mb-4">
                                Create Your Perfect Business Logo in Minutes:
                            </p>
                            <div className="flex items-center lg:gap-4 gap-2 border-b border-slate-500/20 py-2">
                                <p className="sm:text-lg flex gap-2 items-center">
                                    <Rabbit className="size-4" /> User-Friendly Design Tools
                                </p>
                                <Check className="size-5 text-green-600" />
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 border-b border-slate-500/20 py-2">
                                <p className="sm:text-lg flex gap-2 items-center">
                                    <Rabbit className="size-4" /> Endless Customization Options
                                </p>
                                <Check className="size-5 text-green-600" />
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 border-b border-slate-500/20 py-2">
                                <p className="sm:text-lg flex gap-2 items-center">
                                    <Rabbit className="size-4" /> High-Quality Results
                                </p>
                                <Check className="size-5 text-green-600" />
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 border-b border-slate-500/20 py-2">
                                <p className="sm:text-lg flex gap-2 items-center">
                                    <Rabbit className="size-4" /> Instant Preview
                                </p>
                                <Check className="size-5 text-green-600" />
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 border-b border-slate-500/20 py-2">
                                <p className="sm:text-lg flex gap-2 items-center">
                                    <Rabbit className="size-4" /> AI-Powered Suggestions
                                </p>
                                <Check className="size-5 text-green-600" />
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 border-b border-slate-500/20 py-2">
                                <p className="sm:text-lg flex gap-2 items-center">
                                    <Rabbit className="size-4" /> Extensive Icon Library
                                </p>
                                <Check className="size-5 text-green-600" />
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 border-b border-slate-500/20 py-2">
                                <p className="sm:text-lg flex gap-2 items-center">
                                    <Rabbit className="size-4" /> 24/7 Customer Support
                                </p>
                                <Check className="size-5 text-green-600" />
                            </div>
                            <div className="flex items-center lg:gap-4 gap-2 py-2">
                                <p className="sm:text-lg flex gap-2 items-center">
                                    <Rabbit className="size-4" /> Completely Free to use
                                </p>
                                <Check className="size-5 text-green-600" />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            {/* Examples of Logos built with this tool */}
            <section>
                <MaxWidthWrapper className="lg:py-20 py-14 flex items-center justify-center flex-col gap-10">
                    <p className="text-4xl font-semibold text-white/90 text-center">
                        What People are <span className="text-yellow-400">Crafting</span>
                    </p>
                    <LogoExamples />
                </MaxWidthWrapper>
            </section>

            {/* Reviews */}
            <section>
                <MaxWidthWrapper className="lg:py-20 py-14 flex items-center justify-center flex-col gap-10">
                    <p className="text-4xl font-semibold text-white/90 text-center">
                        What People are <span className="text-yellow-400">Saying</span>
                    </p>
                    <div className="grid grid-cols-6 gap-6">
                        {/* Review 1 */}
                        <div className="px-5 py-6 flex pointer-events-none flex-col lg:col-span-2 col-span-6 gap-4 justify-between text-white/90 border border-slate-500/20 shadow-lg rounded-xl">
                            <p className="text-lg">
                                I was amazed at how easy it was to create a professional-looking logo with this app! I
                                had my new logo ready in just a few minutes, and it perfectly captures the essence of my
                                brand.
                            </p>
                            <div className="flex gap-2.5 items-center">
                                <img
                                    className="size-10 rounded-full object-cover border-2 border-white dark:border-gray-800"
                                    src="users/user-3.jpg"
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <p className="ml-0.5">Talha Qureshi</p>
                                    <div className="flex gap-0.5">
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="px-5 py-6 flex pointer-events-none flex-col gap-4 lg:col-span-2 sm:col-span-3 col-span-6 justify-between text-white/90 border border-slate-500/20 shadow-lg rounded-xl">
                            <p className="text-lg">
                                It saved me so much time and effort. The customization options were great too – I got
                                exactly the look I wanted for my brand.
                            </p>
                            <div className="flex gap-2.5 items-center">
                                <img
                                    className="size-10 rounded-full border-2 border-white dark:border-gray-800"
                                    src="users/user-1.png"
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <p className="ml-0.5">Michael</p>
                                    <div className="flex gap-0.5">
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Review 3 */}
                        <div className="px-5 pointer-events-none py-6 flex flex-col gap-4 lg:col-span-2 sm:col-span-3 col-span-6 justify-between text-white/90 border border-slate-500/20 shadow-lg rounded-xl">
                            <p className="text-lg">
                                My new logo turned out perfect, and I couldn't be happier with the results. Thanks for
                                such an awesome tool!
                            </p>
                            <div className="flex gap-2.5 items-center">
                                <img
                                    className="size-10 rounded-full border-2 border-white dark:border-gray-800"
                                    src="/users/user-2.png"
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <p className="ml-0.5">Neha Kumar</p>
                                    <div className="flex gap-0.5">
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="size-4 text-yellow-400 fill-yellow-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>

            <section>
                <MaxWidthWrapper className="lg:py-20 py-14 flex items-center justify-center flex-col gap-10">
                    <p className="text-4xl font-semibold text-white/90 text-center">
                        Let's get your logo <span className="text-yellow-400">Crafted</span>
                        <br />
                        <span className="text-lg font-normal">In three simple steps</span>
                    </p>
                    <div className="flex flex-col gap-4 text-white/90 max-w-2xl">
                        <p className="text-base">
                            <span className="font-bold">1. Choose Your Logo: </span>
                            Browse our extensive library of icons and templates to find the perfect starting point for
                            your brand.
                        </p>
                        <p className="text-base">
                            <span className="font-bold">2. Customize to Perfection: </span>
                            Tailor your logo to match your brand’s style with our easy-to-use tools. Get creative with
                            colors, fonts, and layouts, or let our AI assist you.
                        </p>
                        <p className="text-base">
                            <span className="font-bold">3. Download and Use: </span>
                            Instantly download your high-resolution logo and start using it across your website,
                            business cards, social media, and more.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center">
                        <p className="text-white/90">Ready to create your logo?</p>
                        <Link
                            href="/create/logo"
                            className={buttonVariants({
                                className: "px-8 flex gap-2 items-center py-4",
                            })}
                        >
                            <Rabbit className="size-4 text-black/85 fill-transparent" />
                            <span className="text-black/85 font-medium text-base">Create Logo</span>
                        </Link>
                    </div>
                </MaxWidthWrapper>
            </section>
        </div>
    );
}

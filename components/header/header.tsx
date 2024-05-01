"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { TbSearch } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import HeaderMobile from "./header-mobile";
import { UserButton } from "../user-button";
import { DarkModeToggler } from "@/components/ui/dark-mode-toggler";

const Header = () => {
    const scrolled = useScroll(5);
    const selectedLayout = useSelectedLayoutSegment();

    return (
        <header
            className={cn(
            `flex h-14 lg:h-[60px] items-center gap-4 border-b border-gray-200 dark:border-gray-800 bg-muted/40 px-4  lg:px-6 sticky inset-x-0 top-0 z-30 transition-all`,
                {
                    "border-b border-gray-200 bg-background/90 backdrop-blur-sm":
                        scrolled,
                    "border-b border-gray-200 bg-background": selectedLayout,
                }
            )}
        >
            <HeaderMobile />
            <div className="w-full flex h-[47px] items-center justify-between px-4 gap-4">
                <div className="w-full flex-1">
                    <form>
                        <div className="relative">
                            <TbSearch className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                            />
                        </div>
                    </form>
                </div>
                <div className="flex gap-1">
                    <DarkModeToggler />
                    <UserButton />
                </div>
            </div>
        </header>
    );
};

export default Header;

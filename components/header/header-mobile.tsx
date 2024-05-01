"use client";
import React from "react";
import { TbMenu2,TbPackage } from "react-icons/tb";
import { LuHome } from "react-icons/lu";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MenuLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const HeaderMobile = () => {
    const pathname = usePathname();

    return (
        <div className=" md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <TbMenu2 className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold"
                    >
                        <TbPackage className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>

                    <nav className="grid items-start gap-1 px-4 text-sm font-medium">
                        {MenuLinks.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    {!item.subMenuItems ? (
                                        <Link
                                            href={item.path}
                                            className={cn(
                                                "sidebar-menu-link",
                                                pathname === item.path &&
                                                   "sidebar-menu-active"
                                            )}
                                        >
                                            {item.icon}
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="p-0 m-0 flex flex-col gap-0"
                                        >
                                            <AccordionItem value="item-1">
                                                <AccordionTrigger className="sidebar-menu-link">
                                                    <Link
                                                        href={item.path}
                                                        className={cn(
                                                            "flex items-center gap-4 font-normal",
                                                            pathname ===
                                                                item.path &&
                                                                "sidebar-menu-active "
                                                        )}
                                                    >
                                                        {item.icon}
                                                        {item.title}
                                                    </Link>
                                                </AccordionTrigger>
                                                <AccordionContent className="flex flex-col gap-0">
                                                    {item.subMenuItems?.map(
                                                        (subMenuItem, idx) => (
                                                            <Link
                                                                href={
                                                                    subMenuItem.path
                                                                }
                                                                className={cn(
                                                                    "sidebar-submenu-link",
                                                                    pathname ===
                                                                        subMenuItem.path &&
                                                                        "sidebar-menu-active"
                                                                )}
                                                                key={idx}
                                                            >
                                                                {
                                                                    subMenuItem.icon
                                                                }
                                                                {
                                                                    subMenuItem.title
                                                                }
                                                            </Link>
                                                        )
                                                    )}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                    <div className="mt-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Upgrade to Pro</CardTitle>
                                <CardDescription>
                                    Unlock all features and get unlimited access
                                    to our support team.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button size="sm" className="w-full">
                                    Upgrade
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default HeaderMobile;

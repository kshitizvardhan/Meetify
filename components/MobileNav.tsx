"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[246px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={"/icons/hamburger.svg"}
            width={36}
            height={36}
            alt="hamburger icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side={"left"} className="border-none bg-dark-1">
          {/* Accessible but hidden title */}
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
            <SheetDescription className="sr-only">
              Navigate through Meetify
            </SheetDescription>
          </SheetHeader>

          <Link href={"/"} className="flex items-center gap-1">
            <Image
              src={"/icons/logo.svg"}
              width={32}
              height={32}
              alt="meetify logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white font-poppins">
              Meetify
            </p>
          </Link>

          <div className="flex flex-col h-[calc(100vh-72px)] justify-between overflow-y-auto">
            <SheetClose asChild>
              <div className="flex h-full flex-col gap-6 pt-16 text-white">
                <section>
                  {sidebarLinks.map((link) => {
                    const isActive =
                      pathName === link.route;

                    return (
                      <SheetClose asChild key={link.route}>
                        <Link
                          href={link.route}
                          key={link.label}
                          className={cn(
                            "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                            {
                              "bg-blue-2": isActive,
                            }
                          )}
                        >
                          <Image
                            src={link.imgURL}
                            alt={link.label}
                            width={20}
                            height={20}
                          />
                          <p className="font-semibold">{link.label}</p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </section>
              </div>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

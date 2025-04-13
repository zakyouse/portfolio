import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { Avatar } from "@heroui/react";
import { IoHome } from "react-icons/io5";
import { TbInfoSquareFilled } from "react-icons/tb";
import { GoProjectRoadmap } from "react-icons/go";
import { FaList } from "react-icons/fa6";

import pfp from "../assets/IMG_3431.jpg";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  // Map icons to menu items by index
  const mobileIcons = [
    <IoHome key="home" />,
    <TbInfoSquareFilled key="about" />,
    <GoProjectRoadmap key="projects" />,
    <FaList key="stack" />,
  ];

  return (
    <HeroUINavbar
      className="z-50 bg-transparent backdrop-blur-sm border w-[90vw] lg:w-[80vw] rounded-full h-[48px] top-4 mx-auto border-white/10 shadow-none"
      isBlurred={false}
      maxWidth="xl"
      position="sticky"
    >
      <Avatar src={pfp} />
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit" />
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "warning" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium text-sm",
                )}
                color="warning"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            as={Link}
            className="text-xs h-[40px] font-normal text-default-600 bg-default-100 rounded-full hover:bg-warning hover:text-gray-800 hover:scale-105 active:scale-95"
            href="#"
            variant="flat"
          >
            Let&apos;s connect
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="mr-4 text-white" />
      </NavbarContent>

      <NavbarMenu className="bg-[#00000000] backdrop-blur-sm">
        <div className="mx-2 mt-2 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="text-gray-300 flex hover:text-warning hover:translate-x-2 text-sm transition-all duration-300 items-center gap-3"
                href={item.href}
                size="lg"
              >
                <span className="text-gray-900 bg-warning h-8 w-8 rounded-full grid place-content-center">
                  {mobileIcons[index]}
                </span>
                <span>{item.label}</span>
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

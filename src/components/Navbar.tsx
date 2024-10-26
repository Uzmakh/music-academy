"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

 
    return (
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <h1>Navbar is here!</h1>
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
              Test
            </MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Courses">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/musictheory">Basic Music Theory</HoveredLink>
              <HoveredLink href="/seo">Advanced Composition</HoveredLink>
              <HoveredLink href="/branding">Song Writing</HoveredLink>
              <HoveredLink href="/branding">Music Production</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Contact Us"
            ></MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }

export default Navbar;
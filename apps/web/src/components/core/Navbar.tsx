import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle";
import NewELafda from "./new-e-lafda";

const navItems = [
  {
    label: "E-lafda",
    href: "/e-lafda",
  },
  {
    label: "Engagement Farmers",
    href: "/engagement-farmers",
  },
  {
    label: "List's",
    href: "/lists",
  },
  {
    label: "Polls",
    href: "/pools",
  },
];

export default function Navbar() {
  return (
    <Container className="px-4 py-4 font-poppins">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            className="size-10"
            src="/next.svg"
            alt="twtty"
            width={100}
            height={100}
          />
          {navItems.map((item) => {
            return (
              <Link key={item.href} href="{item.href}">
                <span className="text-sm font-medium text-gray-500 hover:text-gray-700 hidden md:block">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div>
          <NewELafda/>
          <ThemeToggle/>
        </div>
      </div>
    </Container>
  );
}

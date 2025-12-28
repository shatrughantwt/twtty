import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image"

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
    <Container className="px-4 py-4">
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
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

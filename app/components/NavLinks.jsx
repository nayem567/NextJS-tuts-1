"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const NavLinks = () => {
  const pathName = usePathname();

  const [input, setInput] = useState("");

  return (
    <div>
      
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>

      <nav>
        {navLinks.map((link) => {
          const isActive = pathName.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default NavLinks;

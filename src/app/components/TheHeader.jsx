"use client";
import Link from "next/link";

// import { Navigation } from "./Navigation";

// const navItems = [
//     { label: "Главная", href: "/" },
//     { label: "Каталог", href: "/booklist" },
//     { label: "Добавить", href: "/bookadd" },
//     { label: "Помощь", href: "/about" },
// ];

const TheHeader = () => {
  return (
    <header className="header">
      {/*<nav className="hidden md:flex items-center">*/}
      <nav className="bg-blue-600 h-16 w-full shadow shadow-blue-500 flex justify-center items-center">
        {/*<Navigation navLinks={navItems} />*/}
        <Link
          href="/"
          className="text-3xl font-bold text-white hover:text-slate-300 transition-all cursor-pointer"
        >
          Task Manager
        </Link>
      </nav>
    </header>)
}

export {TheHeader};

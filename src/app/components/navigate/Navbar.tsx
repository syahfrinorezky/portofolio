"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiBars3BottomRight,
  HiXMark,
  HiClipboardDocumentList,
} from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

// Komponen untuk menu items
interface MenuItemProps {
  href: string;
  text: string;
  isActive: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, text, isActive }) => {
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.li variants={menuItemVariants} className="w-full relative">
      <Link
        href={href}
        className={`py-2 border-b w-full block ${
          isActive ? "text-yellow-500" : "text-gray-700 hover:text-accent"
        }`}>
        {text}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"
            layoutId="underline"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Link>
    </motion.li>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Mendapatkan path saat ini

  // Data untuk menu items
  const menuItems = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/workstation", text: "Workstation" },
    { href: "/contact", text: "Contact" },
  ];

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-secondary text-white" : "bg-primary text-white"
      }`}>
      <div className="flex justify-between items-center p-4 md:px-6 md:py-4 lg:py-5">
        {/* Logo */}
        <Link href="/" className="font-extrabold text-xl">
          RINO
          <span className="bg-gradient-to-br from-yellow-500 to-accent bg-clip-text text-transparent">
            REZKY
          </span>
        </Link>

        {/* Tombol Toggle Menu (Mobile) */}
        <button
          className="flex items-center md:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiXMark size={28} /> : <HiBars3BottomRight size={28} />}
        </button>

        {/* Navbar untuk Desktop (md ke atas) */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative text-lg transition-all duration-500 ease-in-out ${
                pathname === item.href
                  ? "text-accent font-bold"
                  : "text-gray-300 hover:text-white"
              }`}>
              {item.text}
              {pathname === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Tombol Resume */}
        <Link
          href="/resume"
          className="hidden bg-tertiary items-center justify-center gap-x-2 bg-accent text-primary py-2 px-4 rounded-md font-bold font-secondary md:flex hover:bg-accent hover:text-tertiary transition-transform hover:scale-105 duration-300 ease-in-out">
          <HiClipboardDocumentList size={18} />
          <span>RESUME</span>
        </Link>

        {/* Menu Mobile */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay (close menu when clicked outside) */}
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-black opacity-75 z-30 md:hidden"
              />

              {/* Menu Navbar */}
              <motion.div
                initial={{ x: "100%" }} // Mulai dari sebelah kanan
                animate={{ x: 0 }} // Animasi masuk ke posisi 0
                exit={{ x: "100%" }} // Animasi keluar ke sebelah kanan
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
                className="fixed inset-y-0 right-0 w-64 flex flex-col justify-between bg-gray-100 shadow-lg z-40 p-6 transform md:hidden">
                {/* Tombol X di bagian atas kanan */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-end text-primary hover:text-accent">
                  <HiXMark size={28} className="drop-shadow-md" />
                </button>

                {/* Menu Items dengan Animasi */}
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                    },
                  }}
                  className="flex flex-col items-start space-y-4 font-poppins text-gray-700 font-medium">
                  {menuItems.map((item, index) => (
                    <MenuItem
                      key={index}
                      href={item.href}
                      text={item.text}
                      isActive={pathname === item.href}
                    />
                  ))}
                </motion.ul>

                {/* Tombol Resume */}
                <div className="resume-button h-1/2 flex items-end">
                  <Link
                    href="/resume"
                    className="bg-tertiary w-full bg-secondary flex items-center justify-center gap-x-2 text-accent py-3 rounded-md font-bold font-secondary hover:bg-accent hover:text-tertiary transform transition-transform hover:scale-105 hover:translate-y-1 duration-300 ease-in-out">
                    <HiClipboardDocumentList size={18} />
                    <span>RESUME</span>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

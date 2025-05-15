"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AnimatePresenceProps } from "framer-motion";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/projects", label: "Proyectos" },
  { path: "/services", label: "Servicios" },
  { path: "/contact", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-600"
          >
            Lynqea
          </motion.span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative px-2 py-1 text-sm font-medium transition-colors duration-300",
                pathname === item.path
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              )}
            >
              {item.label}
              {pathname === item.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 block h-0.5 w-full bg-blue-600"
                />
              )}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-white md:hidden z-40 flex items-center justify-center min-h-screen"
        >
          <div className="flex flex-col items-center justify-center h-full w-full py-20">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="w-full text-center"
              >
                <Link
                  href={item.path}
                  className={cn(
                    "py-6 px-8 text-2xl font-medium transition-colors duration-200 block w-full",
                    pathname === item.path
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}

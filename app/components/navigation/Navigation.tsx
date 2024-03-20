"use client";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Navbar toggleMenu={toggleMenu} />
    </>
  );
}

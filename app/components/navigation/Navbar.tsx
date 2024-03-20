import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

export default function Navbar({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <div className="w-full h-30 bg-sky-900 sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <button
            type="button"
            className="inline-flex items-center md:hidden"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
          <ul className="hidden md:flex gap-x-20  text-white">
            <li>
              <Link href="/speakers">Speakers</Link>
            </li>
            <li>
              <Link href="/agenda">Agenda</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
          <Button label="Home" />
        </div>
      </div>
    </div>
  );
}

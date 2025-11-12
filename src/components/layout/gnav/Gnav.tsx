"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Gnav.module.css";

const Gnav = () => {
  const pathname = usePathname();

  return (
    <nav className="h-full">
      <ul className="h-full flex items-center text-[10px] tracking-widest">
        <li className="h-full">
          <Link
            href="/about"
            className={`h-full grid place-items-center px-[12.5px] ${
              styles.link
            } ${styles.linkAbout} ${
              pathname === "/about" ? styles.linkActive : ""
            }`}
          >
            ABOUT
          </Link>
        </li>
        <li className="h-full">
          <Link
            href="/lexicon"
            className={`h-full grid place-items-center px-[12.5px] ${
              styles.link
            } ${styles.linkAbout} ${
              pathname === "/lexicon" ? styles.linkActive : ""
            }`}
          >
            LEXICON
          </Link>
        </li>
        <li className="h-full">
          <Link
            href="/brands"
            className={`h-full grid place-items-center px-[12.5px] ${
              styles.link
            } ${styles.linkBrands} ${
              pathname === "/brands" ? styles.linkActive : ""
            }`}
          >
            BRANDS
          </Link>
        </li>
        <li className="h-full">
          <Link
            href="/deepen"
            className={`h-full grid place-items-center px-[12.5px] ${
              styles.link
            } ${styles.linkEpreuve} ${
              pathname === "/deepen" ? styles.linkActive : ""
            }`}
          >
            DEEPEN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Gnav;

import Link from "next/link";
import Gnav from "@/components/layout/gnav/Gnav";
import ThemeToggle from "@/features/theme-toggle/components/ThemeToggle";
import Search from "@/features/search/components/Search";
import AccountButton from "@/components/auth/account-button/components/AccountButton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className="h-[50px] px-[30px] select-none">
      <div className="flex items-center justify-between h-full">
        <h1 className="h-full font-medium tracking-widest -ml-[30px]">
          <Link
            href="/"
            className="cursor-pointer h-full grid place-items-center px-[30px]"
          >
            espace
          </Link>
        </h1>
        <div className="h-full flex items-center gap-4 flex-1">
          <Gnav />
        </div>
        <div className={styles.actions}>
          <Search />
          <AccountButton />
          <div className="ml-[12.5px]">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

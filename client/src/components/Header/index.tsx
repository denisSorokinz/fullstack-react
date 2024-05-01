import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";
import Auth from "./Auth";

const Header = () => {
  return (
    <nav className="sticky top-0 z-10 border-gray-200 bg-slate-100 shadow-sm dark:bg-slate-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center">
          <Image src="/images/logo.svg" width={64} height={32} alt="Logo" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900">
            <Header.NavItem>
              <Link
                href="/"
                className="py-2 text-primary text-slate-500 hover:text-slate-700 dark:text-slate-100"
                aria-current="page"
              >
                Home
              </Link>
            </Header.NavItem>
            <Auth />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem: FC<PropsWithChildren> = ({ children }) => {
  return <li>{children}</li>;
};
Header.NavItem = NavItem;

export default Header;

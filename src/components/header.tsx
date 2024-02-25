"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import store from "@/app/staticdata/my.jpg"
import { Input } from "@/components/ui/input"
import { MdShoppingCart } from "react-icons/md";



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center bg-white dark:bg-dark`}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a  className="block w-full py-5">
              {/* <img
                src="https://pbs.twimg.com/profile_images/1718190643816611840/iSSRthmG_400x400.jpg"
                alt="logo"
                width={100}
                height={100}
                className="dark:hidden rounded-lg"
              /> */}

<Image
                  src={store}
                  alt={""}
                  width={70}
                  height={100}
                 
                  className=' border-4 rounded-md border-gray-500'
                  
                  ></Image>

              {/* <img
                src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                alt="logo"
                className="hidden dark:block"
              /> */}
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex gap-4 bold">
                  {/* <ListItem NavLink="/#">Home</ListItem>
                  
                  <ListItem NavLink="/aboutus">About</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem> */}
                  <Link href={'/'}>Home</Link>
                  <Link href={'/female'}>Female</Link>
                  <Link href={'/male'}>Male</Link>
                  <Link href={'/kid'}>Kid</Link>
                  <Link href={'/aboutus'}>AboutUs</Link>
                </ul>
              </nav>
            </div>
            <div className="relative w-80">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <Input type="text" placeholder="What You Looking For" className="pl-12 pr-4" />
      

    </div>
    <div >
    <MdShoppingCart className="h-12 w-12"/>

    </div>
            {/* <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <a
                href="/#"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
              >
                Sign in
              </a>

              <a
                href="/#"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
              >
                Sign Up
              </a>
            </div> */}
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }: {children: React.ReactNode, NavLink: string}) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};

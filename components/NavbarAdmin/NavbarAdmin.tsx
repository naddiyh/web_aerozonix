"use client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { LogOut } from "lucide-react";
import { CgProfile } from "react-icons/cg";

export const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const OpenDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="relative flex items-center justify-end gap-4 border-b px-10 py-4 shadow-md">
      <p>Hi, Nade Cantik!</p>
      <Image
        src="/svg/ellipse.svg"
        alt="photo profile"
        width={35}
        height={35}
        className="rounded-full"
      />
      <button onClick={OpenDropDown}>
        <AiOutlineDown className="h-4 w-4" />
      </button>
      <div className="absolute top-[72px]">
        {isOpen && (
          <div className="z-10 flex h-[80px] w-[150px] flex-col gap-2 rounded-md bg-white py-2 shadow-md">
            <button className="flex gap-2 py-1 pl-4 text-left text-text-s hover:bg-slate-100">
              <CgProfile className="h-5 w-5" />
              Profile
            </button>
            <button className="flex gap-2 py-1 pl-4 text-left text-text-s hover:bg-slate-100">
              <LogOut className="h-5 w-5 text-red-500" />
              Log out
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

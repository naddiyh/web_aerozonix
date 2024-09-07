"use client";
import { useState } from "react";
import { navlink } from "./navLink";
import Link from "next/link";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const SideBar = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const pathname = usePathname();

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen w-[250px] bg-primary-darkblue py-10">
      <div className="flex justify-center">
        <Image src="/svg/logo.svg" width={100} height={100} alt="" />
      </div>
      <section className="flex flex-col gap-6 py-10">
        {navlink.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <div key={index} className="flex flex-col">
              <div className="flex w-full flex-col justify-center pl-6">
                <button
                  className={`flex items-center gap-4 rounded-md py-2 pl-6 pr-10 duration-200 ease-in-out ${isActive ? "rounded-none bg-white text-primary-darkblue" : "hover:bg-blue-900"}`}
                  onClick={() => handleToggle(index)}
                >
                  <Link
                    href={item.href}
                    className="flex w-full items-center gap-4"
                  >
                    {item.icon && (
                      <item.icon
                        className={`h-4 w-4 ${isActive ? "text-primary-darkblue" : "text-white"}`}
                      />
                    )}
                    <span
                      className={`text-base ${isActive ? "text-primary-darkblue" : "text-white"}`}
                    >
                      {item.title}
                    </span>
                  </Link>
                  {item.sublink && (
                    <div className="text-white">
                      {expandedIndex === index ? (
                        <AiOutlineUp className="h-4 w-4" />
                      ) : (
                        <AiOutlineDown className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </button>

                {item.sublink && expandedIndex === index && (
                  <div className="flex transform flex-col gap-4 pl-6 pt-4 text-white duration-300 ease-in-out">
                    {item.sublink.map((subitem, subindex) => {
                      const isSubitemActive = pathname === subitem.href;

                      return (
                        <div
                          key={subindex}
                          className={`flex items-center gap-4 rounded-md py-2 pl-8 duration-200 ease-in-out ${isSubitemActive ? "rounded-none bg-white text-primary-darkblue" : "hover:bg-blue-900"}`}
                        >
                          <Link href={subitem.href}>
                            {subitem.icon && (
                              <subitem.icon
                                className={`h-4 w-4 ${isSubitemActive ? "text-primary-darkblue" : "text-white"}`}
                              />
                            )}
                          </Link>
                          {subitem.href ? (
                            <Link
                              href={subitem.href}
                              className={`flex flex-col ${isSubitemActive ? "text-primary-darkblue" : "text-white"}`}
                            >
                              {subitem.title}
                            </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

"use client";
import { useState } from "react";
import { navlink } from "./navLink";
import Link from "next/link";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Image from "next/image";

export const SideBar = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen w-[250px] bg-primary-darkblue py-10">
      <div className="flex justify-center">
        <Image src="/svg/logo.svg" width={100} height={100} alt="" />
      </div>
      <section className="flex flex-col gap-8 px-10 py-10">
        {navlink.map((item, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <div
                className="flex cursor-pointer items-center gap-4"
                onClick={() => handleToggle(index)}
              >
                <Link href={item.href} className="flex items-center gap-4">
                  {item.icon && <item.icon className="h-4 w-4 text-white" />}

                  <span className="text-white">{item.title}</span>
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
              </div>

              {item.sublink && expandedIndex === index && (
                <div className="flex flex-col gap-8 pl-8 pt-8 text-white">
                  {item.sublink.map((subitem, subindex) => (
                    <div key={subindex} className="flex items-center gap-6">
                      <Link href={subitem.href}>
                        {subitem.icon && <subitem.icon className="h-4 w-4" />}
                      </Link>
                      {subitem.href ? (
                        <Link href={subitem.href} className="flex flex-col">
                          {subitem.title}
                        </Link>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

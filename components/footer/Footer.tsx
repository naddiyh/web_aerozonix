import { navlink } from "../adminSidebar/navLink";
import Image from "next/image";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="relative flex items-center justify-center bg-primary-darkblue px-20 py-6">
      <section className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/svg/logo.svg" alt="" height={50} width={50} />
          <p className="text-text-l font-semibold text-secondary-darkteal">
            Aerozonix
          </p>
        </div>
        <div className="flex gap-8">
          <Link
            href="/"
            className="text-text-s font-medium text-secondary-darkteal hover:opacity-60"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-text-s font-medium text-secondary-darkteal hover:opacity-60"
          >
            Air Quality Map
          </Link>
          <Link
            href="/statistic"
            className="text-text-s font-medium text-secondary-darkteal hover:opacity-60"
          >
            Statistic
          </Link>
        </div>
        <div className="grid grid-cols-1 text-text-s">
          <p>Get in touch with us</p>
          <p>+628239830058</p>
        </div>
      </section>
      <p className="absolute bottom-4 right-4 text-text-xs text-white">
        Ⓒ aerozonix 2024. All right reserved
      </p>
    </footer>
  );
};

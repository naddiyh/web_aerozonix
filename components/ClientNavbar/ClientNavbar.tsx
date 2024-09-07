import Link from "next/link";
import Image from "next/image";
export const ClientNavbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-20 w-full bg-white px-28 py-4 shadow-custom">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/svg/logo.svg" alt="" height={50} width={50} />
          <p className="text-text-l font-semibold text-secondary-darkteal">
            Aerozonix
          </p>

          <p className="pl-4 text-center text-text-xs font-medium italic text-primary-darkblue">
            Makassar
          </p>
        </div>
        <div className="flex gap-8">
          <Link
            href="/"
            className="font-medium text-secondary-darkteal hover:opacity-60"
          >
            Home
          </Link>
          <Link
            href="/"
            className="font-medium text-secondary-darkteal hover:opacity-60"
          >
            Air Quality Map
          </Link>
          <Link
            href="/"
            className="font-medium text-secondary-darkteal hover:opacity-60"
          >
            Statistic
          </Link>
        </div>
      </section>
    </nav>
  );
};

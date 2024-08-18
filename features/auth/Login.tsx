import Image from "next/image";
import Link from "next/link";

export const Login = () => {
  return (
    <section className="flex min-h-screen w-screen items-center justify-center">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src="/images/bg_login.webp"
        alt={"bglogin"}
      />
      <div className="z-10 flex w-[350px] flex-col items-center gap-6 rounded-xl border bg-white bg-opacity-85 py-6 shadow-2xl">
        <Image
          src={"/svg/logo.svg"}
          alt="logo"
          width={80}
          height={80}
          objectFit="cover"
        />
        <form className="flex w-full flex-col gap-4 px-8">
          <input
            type="text"
            placeholder="username"
            className="text-s rounded-md border bg-white bg-opacity-30 px-2 py-3 outline-none"
          />
          <input
            type="email"
            placeholder="name@gmail.com"
            className="text-s rounded-md border bg-white bg-opacity-30 px-2 py-3 outline-none"
          />
          <button
            type="button"
            className="rounded-md bg-secondary-blue p-2 text-white"
          >
            Login
          </button>

          <Link href={"/"} className="text-end text-xs text-secondary-blue">
            forgot password?
          </Link>
        </form>
      </div>
    </section>
  );
};

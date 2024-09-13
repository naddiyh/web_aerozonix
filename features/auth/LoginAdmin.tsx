"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useAuth } from "./useAuth";
import { TLoginForm } from "./type";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export const LoginAdmin: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<TLoginForm>({
    defaultValues: {
      role: "admin",
    },
    mode: "onChange",
  });

  const { Login, handleSigninWithGoogle } = useAuth();
  // const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  // const handleCaptchaChange = (token: string | null) => {
  //   setValue("captcha", token || "");
  //   setIsCaptchaVerified(!!token);
  // };

  return (
    <section className="flex min-h-screen w-screen items-center justify-center">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src="/images/bg_login.webp"
        alt={"bglogin"}
      />
      <div className="z-10 flex w-[380px] flex-col items-center gap-6 rounded-xl border bg-white bg-opacity-85 py-6 shadow-2xl">
        <Image
          src={"/svg/logo.svg"}
          alt="logo"
          width={80}
          height={80}
          objectFit="cover"
        />

        <form
          className="flex w-full flex-col gap-4 px-8"
          onSubmit={handleSubmit((value) => Login.mutateAsync(value))}
          noValidate
        >
          <div className="flex flex-col gap-2">
            <label>
              Email<span className="text-red-500">*</span>
            </label>
            <input
              placeholder="youremail@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Your email is not valid",
                },
              })}
              className="h-10 w-full rounded-md border p-3 pl-4 outline-none"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Password<span className="text-red-500">*</span>
            </label>
            <input
              placeholder="password"
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="h-10 w-full rounded-md border p-3 pl-4 outline-none"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            onChange={handleCaptchaChange}
          /> */}

          <button
            type="submit"
            className="z-10 rounded-md bg-secondary-blue p-2 text-white"
            // disabled={!isValid || !isCaptchaVerified || Login.isLoading}
          >
            Sign in
          </button>

          <p className="fpnt-semibold text-center text-text-s">
            atau masuk dengan
          </p>
          <button
            className="flex h-10 w-full items-center justify-center gap-2 rounded-md border text-text-s md:text-text-m"
            onClick={handleSigninWithGoogle}
          >
            <FcGoogle className="h-5 w-5 md:h-6 md:w-6" />
            Masuk dengan google
          </button>

          <Link href="/" className="text-end text-xs text-secondary-blue">
            forgot password?
          </Link>
        </form>
      </div>
    </section>
  );
};

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { FirebaseError } from "firebase/app";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { Login, logout, signInWithGoogle } from "./service";
import { getFirebaseErrorMessage } from "@/lib/utils/getFirebaseError";
import { IUser } from "@/interfaces/user";
import { TLoginForm } from "./type";
import { DEFAULT_ERROR } from "@/constant/error";

export const useAuth = () => {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingSignup, setIsLoadingSignup] = useState(false);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const { mutateAsync: mutateLogin } = useMutation<
    IUser,
    FirebaseError,
    TLoginForm
  >({
    mutationFn: (data) => Login(data, data.role),
    retry: 0,
    onSuccess: (data) => {
      Cookies.set("user", JSON.stringify(data));
      setUser(data);
      toast.dismiss();
      toast.success("Your Account was Successfull login");
      if (data.role === "admin") router.push("/admin");
      else router.push("/");
    },

    onError: (error) => {
      toast.dismiss();
      toast.error(getFirebaseErrorMessage(error.code));
    },
    onMutate: () => {
      setIsLoadingLogin(true);
      toast.loading("Logging in");
    },
    onSettled: () => {
      setIsLoadingLogin(false);
    },
  });

  // const { mutateAsync: mutateSignup } = useMutation<
  //   IUser,
  //   FirebaseError,
  //   TSignUpForm
  // >({
  //   mutationFn: signup,
  //   retry: 0,
  //   onSuccess: (data) => {
  //     Cookies.set("user", JSON.stringify(data));
  //     setUser(data);
  //     toast.dismiss();
  //     toast.success("Your Account was Successful");
  //     router.push("/admin");
  //   },
  //   onError: (error) => {
  //     toast.dismiss();
  //     toast.error(getFirebaseErrorMessage(error.code));
  //   },
  //   onMutate: () => {
  //     setIsLoadingSignup(true);
  //     toast.loading("Signing Up");
  //   },
  //   onSettled: () => {
  //     setIsLoadingSignup(false);
  //   },
  // });

  const handleSigninWithGoogle = async () => {
    // try {
    const user = await signInWithGoogle();
    Cookies.set("user", JSON.stringify(user));
    setUser(user);
    toast.success("Your Account was successfully logged in");
    router.push("/admin");
    // } catch (error) {
    //   if (error instanceof FirebaseError) {
    //     toast.error(getFirebaseErrorMessage(error.code));
    //   } else {
    //     toast.error("An unknown error occurred during Google sign-in.");
    //   }
    // }
  };

  const handleLogOut = async () => {
    try {
      await logout();
      Cookies.remove("user");
      setUser(null);
      toast.success("Your Account was sucessfully log out");
      router.push("/");
    } catch (error) {
      toast.error(DEFAULT_ERROR);
    }
  };

  return {
    user,
    setUser,
    Login: {
      isLoading: isLoadingLogin,
      mutateAsync: mutateLogin,
    },
    // signup: {
    //   isLoading: isLoadingSignup,
    //   // mutateAsync: mutateSignup,
    // },
    handleSigninWithGoogle,
    handleLogOut,
  };
};

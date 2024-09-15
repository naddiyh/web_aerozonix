import { TRole } from "@/interfaces/user";

export type TLoginForm = {
  email: string;
  password: string;
  role: TRole;
  // captcha: string;
};

// export type TSignUpForm = {
//   email: string;
//   password: string;
//   name: string;
// };

export type TForgotPassword = {
  email: string;
};

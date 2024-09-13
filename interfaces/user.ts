export type TRole = "admin";

export interface IUser {
  uid: string;
  name: string;
  email: string;
  role: TRole;
  photoURL: string | null;
  emailVerified: boolean;
  password: string;
  createdAt: string;
  updatedAt: string;
}

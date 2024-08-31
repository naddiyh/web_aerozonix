export * from "./DataDroneInterface";

export interface Users {
  id: String;
  name: String;
  email: String;
  role: "Admin" | "User";
  createdAt: string;
}

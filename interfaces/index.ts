export * from "./DroneCOInterface";
export * from "./COPointInterface";
export * from "./DroneInterface";

export interface Users {
  id: String;
  name: String;
  email: String;
  role: "Admin" | "User";
  createdAt: string;
}

import { Users } from "@/interfaces";
import { FaUserEdit } from "react-icons/fa";
import { FaRegUser, FaSearchengin, FaSort, FaTrashCan } from "react-icons/fa6";

const data: Users[] = [
  {
    id: "01",
    name: "Perdi Dev",
    email: "perdibro@gmail.com",
    role: "Admin",
    createdAt: "active",
  },
  {
    id: "02",
    name: "Naman",
    email: "namanbro@gmail.com",
    role: "User",
    createdAt: "active",
  },
  {
    id: "03",
    name: "Mina",
    email: "mina@gmail.com",
    role: "User",
    createdAt: "active",
  },
];

export const User = () => {
  return (
    <div className="h-screen w-full bg-primary-bluewhite p-12">
      <h1 className="text-lg font-bold">Users Database</h1>
      <div className="flex justify-between">
        <form action="" className="relative flex">
          <input
            type="search"
            className="focus:border-taupeGray peer relative z-10 h-8 w-10 cursor-pointer rounded-lg border bg-transparent pr-6 text-xs outline-none focus:w-full focus:cursor-text focus:rounded-r-none focus:px-3"
            placeholder="Typing..."
          />
          <button className="absolute bottom-0 right-0 top-0 my-auto h-8 w-10 rounded-lg bg-blue-300 px-3 peer-focus:relative peer-focus:rounded-l-none">
            <FaSearchengin />
          </button>
        </form>
        <button className="flex items-center gap-2 rounded-md bg-blue-400 px-2 py-1">
          <FaRegUser />
          Add User
        </button>
      </div>
      <table className="my-4 w-full table-auto border-collapse border-spacing-2 rounded-md bg-white">
        <thead>
          <tr>
            <th className="cursor-pointer rounded-tl-md border-b border-blue-300 bg-blue-50 p-4 transition-colors hover:bg-blue-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-blue-950">
                ID
                <FaSort />
              </p>
            </th>
            <th className="cursor-pointer border-b border-blue-300 bg-blue-50 p-4 transition-colors hover:bg-blue-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-blue-950">
                Name
                <FaSort />
              </p>
            </th>
            <th className="cursor-pointer border-b border-blue-300 bg-blue-50 p-4 transition-colors hover:bg-blue-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-blue-950">
                Email
                <FaSort />
              </p>
            </th>
            <th className="cursor-pointer border-b border-blue-300 bg-blue-50 p-4 transition-colors hover:bg-blue-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-blue-950">
                Role
                <FaSort />
              </p>
            </th>
            <th className="cursor-pointer border-b border-blue-300 bg-blue-50 p-4 transition-colors hover:bg-blue-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-blue-950">
                Created At
                <FaSort />
              </p>
            </th>
            <th className="cursor-pointer rounded-tr-md border-b border-blue-300 bg-blue-50 p-4 transition-colors hover:bg-blue-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-blue-950">
                Action
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td className="px-2 py-4">{user.id}</td>
              <td className="px-2 py-4">{user.name}</td>
              <td className="px-2 py-4">{user.email}</td>
              <td className="px-2 py-4">{user.role}</td>
              <td className="px-2 py-4">{user.createdAt}</td>
              <td className="px-2 py-4">
                <FaTrashCan color="red" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

import { Users } from "@/interfaces";

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
      <table className="my-4 w-full table-fixed border-collapse border-spacing-2 rounded-md bg-white">
        <thead>
          <tr>
            <th className="cursor-pointer border-b border-slate-300 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-slate-800">
                ID
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th className="cursor-pointer border-b border-slate-300 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-slate-800">
                Name
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th className="cursor-pointer border-b border-slate-300 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-slate-800">
                Email
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th className="cursor-pointer border-b border-slate-300 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-slate-800">
                Role
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th className="cursor-pointer border-b border-slate-300 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-slate-800">
                Created At
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  ></path>
                </svg>
              </p>
            </th>
            <th className="cursor-pointer border-b border-slate-300 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
              <p className="flex items-center justify-between gap-2 text-sm font-bold leading-none text-slate-800">
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
              <td className="px-2 py-4">Hapus</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

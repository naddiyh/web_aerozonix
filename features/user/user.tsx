"use client";
import { Users } from "@/interfaces";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TiEdit, TiTrash } from "react-icons/ti";
import { Input } from "@/components/ui/input";
import { DialogAddUserComponent } from "@/components/user/DialogComponent";
import { Search } from "lucide-react";

const usersData: Users[] = [
  {
    id: "01",
    name: "Perdi Dev",
    email: "perdibro@gmail.com",
    role: "Admin",
    createdAt: "30 Agustus 2024",
  },
  {
    id: "02",
    name: "Naman",
    email: "namanbro@gmail.com",
    role: "User",
    createdAt: "30 Agustus 2024",
  },
  {
    id: "03",
    name: "Mina",
    email: "mina@gmail.com",
    role: "User",
    createdAt: "30 Agustus 2024",
  },
];

export const User = () => {
  return (
    <div className="h-screen w-full bg-primary-bluewhite p-12">
      <Card>
        <CardHeader>
          <CardTitle>List of Users</CardTitle>
          <CardDescription>
            Manage users and view their ability.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-between">
            <form className="">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search users..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <DialogAddUserComponent />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {usersData.map((user) => (
                <TableRow>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.email}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{user.role}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {user.createdAt}
                  </TableCell>
                  <TableCell className="flex gap-1">
                    <Button
                      size={"sm"}
                      className="bg-blue-primary hover:bg-blue-muted"
                    >
                      <TiEdit />
                    </Button>
                    <Button
                      size={"sm"}
                      className="hover:bg-red-muted bg-red-primary"
                    >
                      <TiTrash />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

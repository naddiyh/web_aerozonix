"use client";

import { useEffect, useState } from "react";
import { IDrone } from "@/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { getAllDrones } from "@/service/drone";
import DialogAddDrone from "./components/DialogAddDrone";
import AlertDialogDeleteDrone from "./components/AlertDialogDeleteDrone";

export const Drone = () => {
  const [droneData, setDroneData] = useState<IDrone[]>([]);
  const [onChange, setOnChange] = useState(false);

  const fetchDrones = async () => {
    const data = await getAllDrones();
    setDroneData(data);
  };

  useEffect(() => {
    fetchDrones();
    console.log("Fetching drones...");
    setOnChange(false);
  }, [onChange]);

  return (
    <div className="w-full overflow-y-auto p-12">
      <Card>
        <CardHeader>
          <CardTitle>List of Drone</CardTitle>
          <CardDescription>
            Manage drone and see the specifications.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-between">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search drones..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <DialogAddDrone onChange={setOnChange} />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code Name</TableHead>
                <TableHead>City</TableHead>
                <TableHead>Max Flight Time</TableHead>
                <TableHead>CO Cleaning Rate</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {droneData.map((drone) => (
                <TableRow key={drone.id}>
                  <TableCell className="font-medium">{drone.code}</TableCell>
                  <TableCell className="font-medium">{drone.city}</TableCell>
                  <TableCell>{drone.maxFlightTime ?? "-"} m/s</TableCell>
                  <TableCell>
                    {drone.coCleaningRate ?? "-"} CO/minutes
                  </TableCell>
                  <TableCell
                    className={`font-medium ${drone.status == "Active" ? "" : "text-red-500"}`}
                  >
                    {drone.status ?? "-"}
                  </TableCell>
                  <TableCell className="flex gap-1">
                    {/* <Button
                      size={"sm"}
                      className="bg-blue-primary hover:bg-blue-muted"
                    >
                      <TiEdit />
                    </Button> */}
                    <AlertDialogDeleteDrone
                      id={drone.id!}
                      onChange={setOnChange}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

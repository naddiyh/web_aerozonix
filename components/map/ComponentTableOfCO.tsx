"use client";

import { EditIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddCOPoint from "./copoint/AddCOPoint";
import { useEffect, useState } from "react";
import { getCOPoints } from "@/service/copoints";
import { ICOPoint } from "@/interfaces";

export default function ComponentTableOfCO({ idDrone }: { idDrone: string }) {
  const [dataCO, setDataCO] = useState<ICOPoint[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true); // Pastikan loading diaktifkan setiap kali data diambil
    try {
      const data = await getCOPoints(idDrone);
      console.log({ data });
      setDataCO(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when component mounts or idDrone changes
  useEffect(() => {
    fetchData();
  }, [idDrone]);

  // Log dataCO when it changes
  useEffect(() => {
    console.log({ dataCO });
  }, [dataCO]);

  if (loading) return <div>Loading...</div>;

  return (
    <Card>
      <CardHeader>
        <CardTitle>CO Points</CardTitle>
        <CardDescription>Simulation for CO Level</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Co Level</TableHead>
              <TableHead>Latitude</TableHead>
              <TableHead>Longitude</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataCO.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Input id="stock-3" type="text" defaultValue={item.co} />
                </TableCell>
                <TableCell>
                  <Input
                    id="stock-3"
                    type="text"
                    defaultValue={item.coor.lat}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    id="price-3"
                    type="text"
                    defaultValue={item.coor.lon}
                  />
                </TableCell>
                <TableCell>
                  <Button className="bg-blue-primary hover:bg-blue-muted">
                    <EditIcon size={14} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <AddCOPoint idDrone={idDrone} onSubmitSuccess={fetchData} />
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        {/* <Button size="sm" variant="ghost" className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          Add points
        </Button> */}
      </CardFooter>
    </Card>
  );
}

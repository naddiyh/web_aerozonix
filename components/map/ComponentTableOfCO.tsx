"use client";

import { PlusCircle } from "lucide-react";

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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function ComponentTableOfCO() {
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
            <TableRow>
              <TableCell>
                <Input id="stock-3" type="text" />
              </TableCell>
              <TableCell>
                <Input id="stock-3" type="text" />
              </TableCell>
              <TableCell>
                <Input id="price-3" type="text" />
              </TableCell>
              <TableCell>
                <Button>Simpan</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <Button size="sm" variant="ghost" className="gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          Add points
        </Button>
      </CardFooter>
    </Card>
  );
}

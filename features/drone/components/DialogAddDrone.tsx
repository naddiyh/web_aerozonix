import { Dispatch, SetStateAction, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TiUserAdd } from "react-icons/ti";
import { addDrone } from "@/service/drone";
import { IDrone } from "@/interfaces";
import {
  SelectContent,
  SelectItem,
  Select,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type InputComponentProps<T> = {
  title: string;
  setValue: Dispatch<SetStateAction<T>>;
};

const InputComponent = <T,>({ title, setValue }: InputComponentProps<T>) => {
  return (
    <div className="grid grid-cols-5 items-center gap-4">
      <Label className="col-span-2">{title}</Label>
      <Input
        id="code"
        className="col-span-3"
        onChange={(e) => setValue(e.target.value as T)}
      />
    </div>
  );
};

const DialogAddDrone = ({
  onChange,
}: {
  onChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState<"Active" | "Not Active">("Not Active");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [maxFlightTime, setMaxFlightTime] = useState(0);
  const [coCleaningRate, setCOCleaningRate] = useState(0);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    const data: IDrone = {
      code,
      city,
      chargeStation: {
        lat: latitude,
        lon: longitude,
      },
      maxFlightTime,
      coCleaningRate,
      status,
    };

    await addDrone(data);
    onChange(true);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"} className="gap-2">
          <TiUserAdd /> Add Drone
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Drone</DialogTitle>
          <DialogDescription>Add new drone.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <InputComponent title="Code Name" setValue={setCode} />
          <InputComponent title="City" setValue={setCity} />
          <InputComponent title="Latitude" setValue={setLatitude} />
          <InputComponent title="Longitude" setValue={setLongitude} />
          <InputComponent title="Max Flight Time" setValue={setMaxFlightTime} />
          <InputComponent
            title="CO Cleaning Rate"
            setValue={setCOCleaningRate}
          />

          <div className="grid grid-cols-5 items-center gap-4">
            <Label className="col-span-2">Status</Label>
            <div className="col-span-3">
              <Select
                defaultValue={"Active"}
                onValueChange={(value: "Active" | "Not Active") =>
                  setStatus(value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  {["Active", "Not Active"].map((role) => (
                    <SelectItem key={role} value={role}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter className="w-full">
          <Button type="submit" onClick={handleSubmit} className="w-full">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddDrone;

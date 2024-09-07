import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import { ICOPoint } from "@/interfaces";
import { addCOPoint } from "@/service/copoints";
import { useState } from "react";
import { FaSave } from "react-icons/fa";

interface ChildComponentProps {
  idDrone: string;
  onSubmitSuccess: () => void;
}

const AddCOPoint = ({ idDrone, onSubmitSuccess }: ChildComponentProps) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [coLevel, setCoLevel] = useState(0);

  const handleSubmit = async () => {
    const data: ICOPoint = {
      co: coLevel,
      coor: { lat: latitude, lon: longitude },
    };

    try {
      await addCOPoint(idDrone, data);
      onSubmitSuccess();
    } catch {
      console.error("Error adding COPoint");
    }
  };

  return (
    <TableRow>
      <TableCell>
        <Input
          id="stock-3"
          type="text"
          onChange={(e) => setCoLevel(+e.target.value)}
        />
      </TableCell>
      <TableCell>
        <Input
          id="stock-3"
          type="text"
          onChange={(e) => setLatitude(+e.target.value)}
        />
      </TableCell>
      <TableCell>
        <Input
          id="price-3"
          type="text"
          onChange={(e) => setLongitude(+e.target.value)}
        />
      </TableCell>
      <TableCell>
        <Button onClick={handleSubmit}>
          <FaSave size={14} />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default AddCOPoint;

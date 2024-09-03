import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteDrone } from "@/service/drone";
import { Dispatch, SetStateAction } from "react";
import { TiTrash } from "react-icons/ti";

const AlertDialogDeleteDrone = ({
  id,
  onChange,
}: {
  id: string;
  onChange: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleDelete = async () => {
    await deleteDrone(id);
    onChange(true);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={"sm"} className="bg-red-primary hover:bg-red-muted">
          <TiTrash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will remove drone data from the
            server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogDeleteDrone;

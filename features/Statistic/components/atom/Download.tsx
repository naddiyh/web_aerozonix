import { Primary } from "@/components/Button/PrimaryButton";
import { saveAs } from "file-saver";
import { Download } from "lucide-react";
export const DownloadFile = () => {
  const handleDownload = () => {
    const data = [
      {
        name: "nade",
        age: 19,
        hobi: "cari duit",
      },
      {
        name: "halo",
        age: 19,
        hobi: "cari managn",
      },
    ];
    const csvContent = convertToCSV(data);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "Tesdata.csv");
  };

  const convertToCSV = (data: any) => {
    const title = "DATA PALSU\n";
    const headers = Object.keys(data[0]).join(",") + "\n";
    const rows = data
      .map((row: any) => Object.values(row).join(","))
      .join("\n");
    return title + headers + rows;
  };

  return (
    <Primary className="flex gap-2 hover:opacity-75">
      <Download className="h-5 w-5" />
      <button onClick={handleDownload}>Download</button>
    </Primary>
  );
};

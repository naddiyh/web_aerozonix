export const Keterangan = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex items-center gap-4">
        <span className="h-2 w-2 rounded-full bg-[#55ec52] p-1"></span>{" "}
        <p className="text-text-xs">1-25 PPM Good</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="h-2 w-2 rounded-full bg-[#639bff] p-1"></span>{" "}
        <p className="text-text-xs">26-50 PPM Moderate</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="h-2 w-2 rounded-full bg-[#FDB633] p-1"></span>{" "}
        <p className="text-text-xs">51-75 PPM Unhealthy</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="h-2 w-2 rounded-full bg-[#FA415A] p-1"></span>{" "}
        <p className="text-text-xs">76-100 PPM Very Unhealthy</p>
      </div>
      <div className="flex items-center gap-4">
        <span className="h-2 w-2 rounded-full bg-black p-1"></span>{" "}
        <p className="text-text-xs">{">"}100 PPM Hazardous</p>
      </div>
    </div>
  );
};

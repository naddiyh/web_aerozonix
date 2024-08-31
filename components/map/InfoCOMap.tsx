export const InfoCOMap = () => {
  return (
    <div className="absolute right-4 top-4 z-10 flex gap-5 rounded-md bg-white/75 px-4 py-2">
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
        <p className="text-xs font-medium">
          1-24 ppm <br />
          (Good)
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-orange-400"></div>
        <p className="text-xs font-medium">
          25-40 ppm <br />
          (Unhealthy)
        </p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-red-400"></div>
        <p className="text-xs font-medium">
          41-60 ppm <br />
          (Hazardous)
        </p>
      </div>
    </div>
  );
};

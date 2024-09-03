const timedata = [
  {
    tes: "06.00",
    ppm: "25ppm",
  },
  {
    tes: "06.30",
    ppm: "25ppm",
  },
  {
    tes: "07.00",
    ppm: "25ppm",
  },
  {
    tes: "07.30",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
  {
    tes: "06.50",
    ppm: "25ppm",
  },
];

export const Box = () => {
  return (
    <>
      <div className="scroll-y flex max-h-[650px] flex-col gap-3 overflow-y-auto border">
        {timedata.slice(0, 8).map((item, index) => (
          <div
            key={index}
            className="relative flex h-[40px] w-[280px] items-center justify-between rounded-md bg-white px-3"
          >
            <p className="text-text-m">{item.tes}</p>
            <p className="text-text-m">{item.ppm}</p>
          </div>
        ))}
      </div>
    </>
  );
};

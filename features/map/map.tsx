import Image from "next/image";

export const Map = () => {
  return (
    <div className="bg-primary-bluewhite p-12">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <button className="h-fit rounded-md bg-white px-2 py-1 text-sm font-semibold">
            Drone-A01
          </button>
          <div className="h-fit rounded-md bg-emerald-400/25 px-2 py-1 text-sm font-medium">
            Active
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="relative h-[75vh] w-full rounded-md bg-gradient-to-br from-white via-slate-50 to-white bg-clip-content">
          <h1 className="absolute left-4 top-4 rounded-md bg-white/25 p-2 text-sm font-bold text-blue-400">
            Aerozonix
          </h1>
          <div className="absolute right-4 top-4 flex gap-5 rounded-md bg-white/75 px-4 py-2">
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
                (Unhealty)
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
          <Image
            className="h-full w-full rounded-md object-cover"
            src={"/maps.png"}
            width={500}
            height={500}
            alt="Maps"
          />
        </div>
      </div>
    </div>
  );
};

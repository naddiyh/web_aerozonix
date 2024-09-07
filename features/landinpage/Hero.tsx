import Image from "next/image";
export const Hero = () => {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <section className="flex items-center justify-between">
        <Image
          src={"/images/povdepan.webp"}
          alt=""
          width={500}
          height={500}
          objectFit="cover"
          className="z-10"
        />
        <div className="absolute left-[140px] h-[450px] w-[450px] rounded-full bg-[#EDF5FF] object-cover"></div>
        <div className="flex w-1/2 flex-col gap-10">
          <h2 className="text-right text-heading-l font-bold text-secondary-darkteal">
            Air Puryfrying Drone
          </h2>
          <p className="pl-20 text-right text-text-l font-medium">
            Aerozonix is Advancing Sustainable Development Goals with AI-Driven
            Drone and Plasma-Ozone Technology for a Cleaner Air
          </p>
        </div>
      </section>
      {/* <p className="text-heading-m font-bold text-secondary-darkteal opacity-30">
        Implementation AI
      </p> */}
    </section>
  );
};

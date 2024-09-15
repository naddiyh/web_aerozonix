import Image from "next/image";
import { MdGppGood } from "react-icons/md";
import { RiServerFill } from "react-icons/ri";
import { BiSolidDryer } from "react-icons/bi";
import { GiBrain } from "react-icons/gi";

const InnovationLink = [
  { name: "High Quality", icon: MdGppGood },
  { name: "Autonomous System", icon: RiServerFill },
  {
    name: "Air Purifying",
    icon: BiSolidDryer,
  },
  {
    name: "Implementation AI",
    icon: GiBrain,
  },
];

export const Innovation = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 rounded-sm bg-slate-50 px-40 py-20">
      <h2 className="text-heading-m font-bold">Innovation</h2>
      <div className="grid grid-cols-1 items-center justify-center gap-20 md:grid-cols-4">
        {InnovationLink.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 rounded-full"
          >
            {item.icon ? (
              <item.icon
                size={50}
                className="rounded-full bg-blue-100 p-2 text-blue-primary"
              />
            ) : (
              ""
            )}
            <p className="text-text-l font-semibold">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

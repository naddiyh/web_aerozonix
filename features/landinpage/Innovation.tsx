import Image from "next/image";

const InnovationLink = [
  { name: "High Quality", src: "/svg/ellipse.svg" },
  { name: "Auotonomous System ", src: "/svg/ellipse.svg" },
  {
    name: " Air Puryfying",
    src: "/svg/ellipse.svg",
  },
  {
    name: "Implementation AI",
    src: "/svg/ellipse.svg",
  },
];
export const Innovation = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-16">
      <h2 className="text-heading-m font-bold">Innovation</h2>
      <div className="grid grid-cols-1 items-center justify-center gap-20 md:grid-cols-4">
        {InnovationLink.map((item) => (
          <div key={""} className="flex flex-col items-center gap-6">
            <Image src={item.src} alt="" width={50} height={50} />
            <p className="text-text-l"> {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

import Image from "next/image";

const Aerozonix = [
  {
    id: 1,
    title: "Scanning",
    capt: "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum ",
    src: "/svg/ellipse.svg",
  },
  {
    id: 2,
    title: "Puryfying",
    capt: "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum ",
    src: "/svg/ellipse.svg",
  },
  {
    id: 3,
    title: "Prediction",
    capt: "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum ",
    src: "/svg/ellipse.svg",
  },
  {
    id: 4,
    title: "Monitoring",
    capt: "n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum ",
    src: "/svg/ellipse.svg",
  },
];

export const AerozonixWorks = () => {
  return (
    <section className="flex flex-col gap-20 px-28">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-heading-m font-bold">How The Aerozonix Works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi,
          accusantium.
        </p>
      </div>
      <section className="flex flex-col gap-20">
        {Aerozonix.map((item) => (
          <div key={item.id} className="flex flex-col gap-4">
            {item.id == 2 || item.id == 4 ? (
              <>
                <div className="flex justify-end">
                  <div className="flex w-1/2 flex-col gap-6 text-right">
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.src}
                        alt=""
                        width={50}
                        height={50}
                        objectFit="cover"
                      />
                      <h2 className="text-heading-s font-semibold">
                        {item.title}
                      </h2>
                    </div>
                    <p>{item.capt}</p>
                  </div>
                </div>
              </>
            ) : item.id == 1 || item.id == 3 ? (
              <>
                <div className="flex w-1/2 flex-col gap-6">
                  <h2 className="text-heading-s font-semibold">{item.title}</h2>
                  <p>{item.capt}</p>
                </div>
              </>
            ) : null}
          </div>
        ))}
      </section>
    </section>
  );
};

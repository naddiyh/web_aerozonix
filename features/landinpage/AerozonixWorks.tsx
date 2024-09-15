import Image from "next/image";
import { PiScan } from "react-icons/pi";
import { BiSolidDryer } from "react-icons/bi";
import { MdOutlineMonitorHeart } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
const Aerozonix = [
  {
    id: 1,
    title: "Scanning",
    capt: "The system performs real-time scanning of the environment, identifying harmful particles and gases like PM2.5, CO, and NO2, to provide an accurate assessment of air quality",
    icon: PiScan,
  },

  {
    id: 2,
    title: "Puryfying",
    capt: "Once pollutants are detected, Aerozonix activates its powerful purification process. It removes contaminants from the air using advanced filtration and ionization methods, ensuring cleaner and safer air.",
    icon: BiSolidDryer,
  },
  {
    id: 3,
    title: "Prediction",
    capt: "Using artificial intelligence, Aerozonix predicts future air quality trends based on historical data and real-time readings, giving you a glimpse of what to expect and allowing for proactive measures.",
    icon: VscGraphLine,
  },
  {
    id: 4,
    title: "Monitoring",
    capt: "The system continuously monitors the air quality and provides real-time updates via a user-friendly dashboard, allowing you to stay informed about changes in the environment",
    icon: MdOutlineMonitorHeart,
  },
];

export const AerozonixWorks = () => {
  return (
    <section className="flex flex-col gap-20 px-6 pb-20 md:px-40">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-center text-heading-s font-bold md:text-heading-m">
          How The Aerozonix Works
        </h2>
        <p className="text-center text-text-m md:w-1/2">
          The Aerozonix system uses cutting-edge technology to improve air
          quality by scanning, purifying, predicting, and monitoring airborne
          pollutants.
        </p>
      </div>
      <section className="grid grid-cols-1 gap-16 md:gap-20">
        {Aerozonix.map((item) => (
          <div key={item.id} className="grid grid-cols-1 gap-4">
            {item.id == 2 || item.id == 4 ? (
              <>
                <div className="flex justify-end">
                  <div className="grid grid-cols-1 gap-6 text-right md:w-1/2">
                    <div className="flex items-center gap-4">
                      {item.icon ? (
                        <item.icon
                          size={40}
                          className="text-blue-primary md:h-10 md:w-10"
                        />
                      ) : (
                        ""
                      )}

                      <h2 className="text-text-l font-semibold text-primary-darkblue md:text-heading-s">
                        {item.title}
                      </h2>
                    </div>
                    <p>{item.capt}</p>
                  </div>
                </div>
              </>
            ) : item.id == 1 || item.id == 3 ? (
              <>
                <div className="flex flex-col gap-6 md:w-1/2">
                  <div className="flex items-center gap-4">
                    {item.icon ? (
                      <item.icon
                        size={40}
                        className="text-blue-primary md:h-10 md:w-10"
                      />
                    ) : (
                      ""
                    )}
                    <h2 className="text-right text-text-l font-semibold md:text-heading-s">
                      {item.title}
                    </h2>
                  </div>
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

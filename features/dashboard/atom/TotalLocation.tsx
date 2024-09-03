import { FaC, FaLocationDot } from "react-icons/fa6";

export const TotalLocation = () => {
  return (
    <div className="flex w-fit items-center gap-3 rounded-md bg-primary-darkblue px-6 py-2">
      <FaLocationDot className="text-white" />
      <p className="text-white">1 Location</p>
    </div>
  );
};

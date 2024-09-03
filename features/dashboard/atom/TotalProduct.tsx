import { GiDeliveryDrone } from "react-icons/gi";
export const TotalProduct = () => {
  return (
    <section className="justi flex w-fit items-center gap-3 rounded-md bg-primary-darkblue px-6 py-3">
      <GiDeliveryDrone className="text-white" />
      <p className="text-white">1 Drone </p>
    </section>
  );
};

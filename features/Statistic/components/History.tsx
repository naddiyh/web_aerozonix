import { Box } from "./atom/BoxHistory";
import { Daily } from "./atom/DailyButton";
import { AiOutlineHistory } from "react-icons/ai";
export const History = () => {
  return (
    <section className="flex">
      <section className="flex flex-col gap-6 rounded-md bg-[#E1EDFF] p-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <AiOutlineHistory className="h-6 w-6" />
            <h2 className="font-semibold text-primary-darkblue">History CO</h2>
          </div>
          <Daily />
        </div>
        <Box />
      </section>
    </section>
  );
};

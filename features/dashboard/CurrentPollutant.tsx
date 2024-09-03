export const CurrentPollutant = () => {
  return (
    <section className="flex max-w-[357px] flex-col gap-2 rounded-md border p-5">
      <div className="flex justify-between">
        <h2 className="font-semibold">Current Pollutant</h2>
        <p className="font-semibold">Pettarani</p>
      </div>
      <div className="flex justify-between">
        <p className="font-medium">CO 15 PPM</p>
        <div>
          <p className="font-medium text-secondary-darkteal">Good</p>
        </div>
      </div>

      <p className="text-justify text-text-s">
        Carbon monoxide (CO) is a colorless and odorless gas. When inhaled in
        large amounts, it can cause headaches, nausea, dizziness, and vomiting.
      </p>
    </section>
  );
};

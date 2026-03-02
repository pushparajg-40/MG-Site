import SquareChevronRight from "../ui/SquareChevronRight";

export default function OutcomesAndBenefits({
  items,
  title = "Outcomes and Benefits",
}: {
  items: string[];
  title?: string;
}) {
  return (
    <section className="scroll-animate lg:px-[150px] px-[30px] flex flex-col gap-16 py-8">
      <div>
        <h2 className="text-2xl font-extrabold text-[#1783F7] dark:text-white mb-6">
          {title}
        </h2>

        <div className="flex flex-col md:pl-8 gap-4">
          {items.map((outcome, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              {items.length > 1 && (
                <div>
                  <SquareChevronRight className="mt-1" />
                </div>
              )}
              <p className="text-[#687DA9] dark:text-white mb-1 text-lg font-medium">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

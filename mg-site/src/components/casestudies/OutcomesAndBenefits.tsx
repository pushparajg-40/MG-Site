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
                <span className="flex-shrink-0 mt-1 w-4 h-4 flex items-center justify-center border border-gray-400 rounded text-gray-400 text-[10px] font-bold">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-3 h-3"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </span>
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

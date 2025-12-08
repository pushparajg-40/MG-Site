export default function OutcomesAndBenefits({ items }: { items: string[] }) {
  return (
    <section className="scroll-animate lg:px-[150px] px-[30px] flex flex-col gap-16 py-8">
      <div>
        <h2 className="text-2xl font-extrabold text-[#1783F7] dark:text-white mb-6">
          Outcomes and Benefits
        </h2>

        <div className="flex flex-col md:pl-8 gap-4">
          {items.map((outcome, idx) => (
            <div key={idx} className="flex gap-3 items-start">
              {items.length > 1 && (
                <img
                  src="/assets/arrow.svg"
                  data-light="/assets/arrow.svg"
                  data-dark="/assets/updated/crossArrowWhite.svg"
                  className="theme-image mt-[2px]"
                  alt=""
                />
              )}
              <p className="text-[#687DA9] dark:text-white mb-1 text-xl font-medium">
                {outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

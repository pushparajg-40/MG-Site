import SquareChevronRight from "../ui/SquareChevronRight";

export default function TechUsed({
  items,
  title = "Technologies Used",
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
        <div className="grid-cols-2 grid md:pl-8 gap-6">
          {items.map((tech, idx) => (
            <div key={idx} className="flex gap-3">
              <div>
                <SquareChevronRight className="mt-1" />
              </div>
              <p className="text-[#687DA9] dark:text-white mb-1 text-lg font-medium">
                {tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

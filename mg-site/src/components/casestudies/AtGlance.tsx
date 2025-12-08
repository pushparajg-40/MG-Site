interface GlanceProps {
  arrowLight: string;
  arrowDark: string;
  items: any[];
}

export default function AtAGlance({
  arrowLight,
  arrowDark,
  items,
}: GlanceProps) {
  return (
    <section className="scroll-animate bg-[#F6FAFF] dark:bg-[#181818] transition-all duration-500 ease-in py-10 max-w-6xl relative lg:left-[150px] lg:top-[-90px]">
      <div className="px-6">
        <p className="text-[#1783F7] dark:text-white text-2xl mb-6">
          At a Glance
        </p>
        <div className="grid md:grid-cols-2 gap-5 lg:mt-[30px]">
          {items.map((item, idx) => (
            <div key={idx}>
              <div className="flex gap-3">
                <img
                  src={arrowLight}
                  data-light={arrowLight}
                  data-dark={arrowDark}
                  className="theme-image"
                  alt=""
                />
                <p className="font-semibold text-[#687DA9] dark:text-white mb-1 text-xl">
                  {item.title}
                </p>
              </div>
              <p className="text-[#667085] dark:text-white pl-6">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

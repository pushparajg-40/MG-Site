export interface OurRoleProps {
  title: string;
  value: string;
  items: any[];
}

export default function OurRole({ title, value, items }: OurRoleProps) {
  return (
    <section className="scroll-animate bg-[#F6FAFF] dark:bg-[#181818] transition-all duration-500 ease-in py-5 max-w-4xl relative lg:left-[180px] lg:top-[-100px]">
      <div className="px-6">
        <h2 className="text-[#1783F7] dark:text-white font-bold  text-xl md:text-2xl mb-2">
          {title}
        </h2>
        <p className="text-[#181818] dark:text-white text-sm mb-2">{value}</p>
        <ul className="my-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start space-x-3 text-[#687DA9] dark:text-white my-3 text-sm"
            >
              <span className="flex-shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center border border-gray-400 rounded text-gray-400 text-[10px] font-bold">
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
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export interface ChildProps {
  title: string;
  points?: string[];
  point?: string;
}

export interface AboutProps {
  title: string;
  subtitle: string;
  desc: string;
  childs: ChildProps[];
}

export function AboutSection({ title, subtitle, desc, childs }: AboutProps) {
  return (
    <div className="pt-[100px] dark:bg-[#181818] transition-all duration-500 ease-in">
      {/* Top Section */}
      <div className="flex flex-col justify-center items-center xl:px-[400px] px-[30px] md:px-[40px] pb-[40px] dark:bg-[#181818] transition-all duration-500">
        <h2 className="text-[#1783F7] dark:text-white font-bold text-4xl">
          {title}
        </h2>

        <p className="text-[#687DA9] dark:text-white text-center text-5xl mt-4">
          {subtitle}
        </p>

        <p className="text-[#667085] dark:text-white text-center mt-4">
          {desc}
        </p>
      </div>

      {/* Child Sections */}
      {childs && childs.length>0 && (
        <div className="grid md:grid-cols-2 px-[60px] pt-[80px] dark:bg-black transition-all duration-500 ease-in gap-8">
          {childs.map((child, index) => (
            <div key={index} className="lg:pr-[80px]">
              <h2
                className={`text-[#687DA9] dark:text-white text-3xl font-bold ${
                  index === 1 ? "mt-[50px] md:mt-0" : ""
                }`}
              >
                {child.title}
              </h2>

              <ul className="text-[#666666] dark:text-white mt-4 pl-[20px] list-disc space-y-2">
                {child.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

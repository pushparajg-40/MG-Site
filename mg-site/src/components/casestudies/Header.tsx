export interface HeaderProps {
  title: string;
  subtitle: string;
  desc: string;
  bannerImage: string;
}

export default function Header({
  title,
  subtitle,
  desc,
  bannerImage,
}: HeaderProps) {
  return (
    <section className="scroll-animate mx-auto pl-6 py-10 dark:bg-[#000000] transition-all duration-500 ease-in">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 lg:pl-[150px] lg:pt-[50px] lg:pr-[100px]">
          <h1 className="text-[#1783F7] dark:text-white text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-2xl leading-relaxed text-[#667085] dark:text-white mb-4">
            {subtitle}
          </p>
          <p className="text-base leading-relaxed text-[#667085] dark:text-white">
            {desc}
          </p>
        </div>
        <div className="max-w-2xl">
          <img
            src={bannerImage}
            alt="Airports visualization"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

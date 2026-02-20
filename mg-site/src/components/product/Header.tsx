export interface HeaderProps {
  title: string;
  subtitle: string;
  subcaption: string;
  desc: string;
  bannerImage: string;
}

export default function Header({
  title,
  subtitle,
  subcaption = "",
  desc,
  bannerImage,
}: HeaderProps) {
  return (
    <section className="scroll-animate mx-auto my-4 pl-4 py-10 dark:bg-[#000000] transition-all duration-500 ease-in">
      <div className="flex flex-col lg:flex-row lg:justify-end gap-8">
        <div className="lg:w-3/6">
          <h1 className="text-[#1783F7] md:text-center dark:text-white text-5xl font-bold mb-2">
            {title}
          </h1>
          <p className="text-3xl md:text-center font-light leading-relaxed text-[#667085] dark:text-white">
            {subtitle}
          </p>
          {subcaption && (
            <h3 className="text-lg md:text-center leading-relaxed text-[#667085] dark:text-white mt-4 mb-2">
              {subcaption}
            </h3>
          )}
          <p className="text-xs md:text-center leading-relaxed text-[#667085] dark:text-white">
            {desc}
          </p>
        </div>
        <div className="lg:w-2/6 md:w-full">
          <img
            src={bannerImage}
            alt={title}
            className="w-full md:h-80 h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

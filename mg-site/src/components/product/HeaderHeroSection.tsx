export interface HeaderProps {
  bannerTitle: string;
  sectionTitle: string;
  description: string;
  bannerImage: string;
}

export default function HeaderHeroSection({
  bannerTitle,
  sectionTitle,
  description,
  bannerImage,
}: HeaderProps) {
  return (
    <section className="scroll-animate mx-auto dark:bg-[#000000] transition-all duration-500 ease-in">
      <div className="flex flex-col gap-4">
        <div
          className={`w-full py-12 lg:py-28 md:py-20 flex items-center justify-center`}
          style={{ backgroundImage: `url(${bannerImage})`, objectFit: "contain", backgroundRepeat:"no-repeat", backgroundPosition:"50% 0%" }}
        >
          <h3 className="text-[#1783F7] text-center font-bold dark:text-white text-5xl">
            {bannerTitle}
          </h3>
        </div>
        <div className="py-2 px-36">
          <h1 className="text-[#1783F7] dark:text-white text-center text-3xl font-medium mb-4">
            {sectionTitle}
          </h1>
          <p className="text-base leading-relaxed text-[#667085] text-center dark:text-white">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

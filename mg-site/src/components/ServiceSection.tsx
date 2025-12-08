interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
  iconDark: string;
}

interface ServiceSectionProps {
  features: ServiceFeature[];
  serviceSectionDescription: string;
}

export default function ServiceSection({
  features,
  serviceSectionDescription,
}: ServiceSectionProps) {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 w-full px-6 py-12 lg:pl-[120px]">
          <h3 className="text-[#1783F7] dark:text-white text-lg font-semibold mb-3">
            What We Offer
          </h3>
          <p className="text-lg md:text-3xl text-[#687DA9] dark:text-white font-medium leading-relaxed">
            {serviceSectionDescription}
          </p>
        </div>

        <div
          className="md:w-2/3 w-full px-6 py-12 md:rounded-tl-3xl md:rounded-bl-3xl md:pl-16 lg:pr-[220px] lg:ml-[100px]
                bg-[linear-gradient(to_bottom_right,_#E8F5FF,_#FBFFFA,_#E8F1EF,_#D3ECFF)] dark:bg-none dark:bg-[#181818] transition-all duration-500 ease-in"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-start gap-3">
                <img
                  src={feature.icon}
                  data-light={feature.icon}
                  data-dark={feature.iconDark}
                  alt="Icon"
                  className="w-[55px] h-[55px] mt-1 theme-image"
                />
                <div>
                  <h4 className="font-semibold text-xl text-[#687DA9] dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-base text-[#667085] dark:text-white mt-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

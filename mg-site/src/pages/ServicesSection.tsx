interface ServiceItem {
  text: string;
}

interface ServiceSectionProps {
  title: string;
  description: string;
  image: string;
  whatWeOffer: ServiceItem[];
  whyChooseUs: ServiceItem[];
  buttonText?: string;
  buttonLink?: string;
  bgColor?: string;
}

export default function ServiceSection({
  title,
  description,
  image,
  whatWeOffer,
  whyChooseUs,
  buttonText = "Read More",
  buttonLink = "#",
  bgColor = "bg-white dark:bg-black",
}: ServiceSectionProps) {
  return (
    <section
      className={`py-16 px-4 md:pl-20 ${bgColor} transition-all duration-500 ease-in`}
    >
      <div className="mb-10 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#687DA9] dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-[#666666] dark:text-white">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-auto md:h-[450px] object-cover aspect-square md:aspect-auto"
          />
        </div>

        <div className="flex flex-col gap-10 text-gray-800">
          <div>
            <h3 className="text-[#1783F7] dark:text-white text-base text-xl mb-4">
              What We Offer
            </h3>
            <ul className="space-y-2 text-[#666666] dark:text-white">
              {whatWeOffer.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>
                    <img
                      src="assets/arrow.svg"
                      data-light="assets/arrow.svg"
                      data-dark="assets/updated/crossArrowWhite.svg"
                      className="theme-image"
                      alt=""
                    />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#1783F7] dark:text-white text-base text-xl mb-4">
              Why Choose Us
            </h3>
            <ul className="space-y-2 text-[#666666] dark:text-white">
              {whyChooseUs.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>
                    <img
                      src="assets/arrow.svg"
                      data-light="assets/arrow.svg"
                      data-dark="assets/updated/crossArrowWhite.svg"
                      className="theme-image"
                      alt=""
                    />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex md:block justify-center">
              <a href={buttonLink}>
                <button className="font-semibold py-2 px-6 rounded-full flex items-center mt-5 bg-gradient-to-r from-[#8B8B8B] to-[#1783F7] hover:from-[#787878] hover:to-[#0653A7] text-white dark:from-white dark:to-white dark:hover:from-gray-200 dark:hover:to-gray-400 dark:text-black">
                  {buttonText}
                  <img
                    src="assets/getInArrow.svg"
                    className="pl-2 theme-image"
                    data-light="assets/getInArrow.svg"
                    data-dark="assets/updated/crossArrow.svg"
                    alt=""
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

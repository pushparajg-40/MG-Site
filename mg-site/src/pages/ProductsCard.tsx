import { useNavigate } from "react-router-dom";

interface Capability {
  text: string;
}

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  capabilities: Capability[];
  buttonLink?: string;
  bgColor?: string;
  imagePosition?: "left" | "right";
}

export default function ProductCard({
  title,
  subtitle,
  description,
  image,
  capabilities,
  buttonLink = "#",
  bgColor = "bg-white dark:bg-black",
  imagePosition = "left",
}: ProductCardProps) {
  const isImageLeft = imagePosition === "left";
  const navigate = useNavigate();
  return (
    <section
      className={`${bgColor} py-20 overflow-x-hidden transition-all duration-500 ease-in`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-start gap-16">
        {isImageLeft && (
          <div className="w-full lg:w-1/2 flex justify-center relative hidden lg:block">
            <div className="absolute w-full max-w-[600px] h-[400px] bg-[#f3f7ff] dark:bg-[#3F3F3F] rounded-lg z-0 top-[30px] hidden md:block"></div>
            <img
              src={image}
              alt={title}
              className="w-full max-w-[600px] relative z-10 top-[-20px]"
            />
          </div>
        )}

        <div className={`w-full ${isImageLeft ? "lg:w-1/2" : "lg:w-1/2"}`}>
          <h3 className="text-3xl font-semibold text-[#687DA9] dark:text-white mb-2 text-center md:text-left">
            {title}
          </h3>
          <h4 className="text-xl text-[#1783f7] dark:text-white mb-4 text-center md:text-left">
            {subtitle}
          </h4>
          <p className="text-[#666666] dark:text-white mb-8 text-center md:text-left">
            {description}
          </p>

          <div className="w-full lg:w-1/2 flex justify-center relative block lg:hidden">
            <div className="absolute w-full max-w-[600px] h-[400px] bg-[#f3f7ff] rounded-lg z-0 top-[30px] hidden lg:block"></div>
            <img
              src={image}
              alt={title}
              className="w-full max-w-[600px] relative z-10 top-[-20px]"
            />
          </div>

          <h5 className="text-lg font-semibold text-[#687DA9] dark:text-white mb-4">
            Key Capabilities
          </h5>
          <ul className="space-y-2 text-[#666666] dark:text-white text-base">
            {capabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <img
                  src="assets/arrow.svg"
                  data-light="assets/arrow.svg"
                  data-dark="assets/updated/crossArrowWhite.svg"
                  className="theme-image flex-shrink-0 mt-0.5"
                  alt=""
                />
                <span>{cap.text}</span>
              </li>
            ))}
          </ul>

          <div className="flex md:block justify-center">
            <button
              onClick={() => {
                navigate(buttonLink);
              }}
              className="font-semibold py-2 px-6 rounded-full flex items-center mt-5 bg-gradient-to-r from-[#8B8B8B] to-[#1783F7] hover:from-[#787878] hover:to-[#0653A7] text-white dark:from-white dark:to-white dark:hover:from-gray-200 dark:hover:to-gray-400 dark:text-black"
            >
              Read More
              <img
                src="assets/getInArrow.svg"
                className="pl-2 theme-image"
                data-light="assets/getInArrow.svg"
                data-dark="assets/updated/crossArrow.svg"
                alt=""
              />
            </button>
          </div>
        </div>

        {!isImageLeft && (
          <div className="w-full lg:w-1/2 flex justify-center relative hidden lg:block">
            <div className="absolute w-full max-w-[600px] h-[400px] bg-white dark:bg-[#3F3F3F] rounded-lg z-0 top-[40px] hidden md:block"></div>
            <img
              src={image}
              alt={title}
              className="w-full max-w-[600px] relative z-10 top-[-20px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}

interface WhyChooseUsCardProps {
  number: number;
  title: string;
  description: string;
  image: string;
}

export default function WhyChooseUsCard({
  number,
  title,
  description,
  image,
}: WhyChooseUsCardProps) {
  return (
    <div
      className="flex-shrink-0 w-[280px] lg:w-auto flex flex-col items-center text-center"
      style={{ scrollSnapAlign: "start" }}
    >
      <img src={image} alt={title} className="mb-4 object-contain" />
      <div className="relative z-10 bg-white dark:bg-black mb-4 rounded-[50%]">
        <span className="w-14 h-14 rounded-full border-2 border-blue-300 text-blue-500 dark:border-white dark:text-white flex items-center justify-center font-bold text-lg">
          {number}
        </span>
      </div>
      <div className="px-4">
        <h3 className="font-semibold text-[#687DA9] dark:text-white mb-1 text-xl">
          {title}
        </h3>
        <p className="text-sm text-[#667085] dark:text-white ">{description}</p>
      </div>
    </div>
  );
}

interface StrengthCardProps {
  title: string;
  description: string;
  image: string;
}

export default function StrengthCard({
  title,
  description,
  image,
}: StrengthCardProps) {
  return (
    <div className="md:flex border border-[#DFE7EB] dark:border-[#FFFFFF] overflow-hidden md:pr-5">
      <img
        src={image}
        alt={title}
        className="w-full md:w-48 h-[10rem] md:h-full lg:h-48 object-cover object-top"
      />
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-[#687DA9] dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-[#667085] dark:text-white mt-2">
          {description}
        </p>
      </div>
    </div>
  );
}

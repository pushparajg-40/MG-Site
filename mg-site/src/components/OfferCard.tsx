interface OfferCardProps {
  number: string;
  title: string;
  description: string;
  image: string;
}

export default function OfferCard({
  number,
  title,
  description,
  image,
}: OfferCardProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-6 py-6">
      <span className="text-[#1783F7] dark:text-white text-xl font-bold w-10">
        {number}
      </span>
      <img
        src={image}
        alt={title}
        className="md:w-36 md:h-20 object-cover rounded-md"
      />
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        <div className="md:w-1/2 lg:w-1/3 mb-2 md:mb-0">
          <h4 className="text-2xl font-semibold text-[#687DA9] dark:text-white">
            {title}
          </h4>
        </div>
        <p className="text-[#667085] dark:text-white md:w-2/3 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

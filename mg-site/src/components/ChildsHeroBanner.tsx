interface HeroBannerProps {
  title: string;
  image: string;
  type: string;
}

export default function ChildHeroBanner({
  title,
  image,
  type,
}: HeroBannerProps) {
  let h = "h-[60vh]";

  return (
    <div className="w-full">
      <div className={`relative  w-full ${h}`}>
        <img
          src={image}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        <div className="relative z-10 flex   items-end h-full px-4 pb-[20px] md:px-[80px]">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {title}
            {type === "service" && (
              <>
                <br />
                Service
              </>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
}

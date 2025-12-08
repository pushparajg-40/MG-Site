export default function IndustriesHero() {
  return (
    <div className="w-full">
      <div className="relative h-[180px] md:h-[280px] w-full">
        <img
          src="assets/industryBanner.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 flex justify-center items-center h-full">
          <h1 className="text-white text-3xl md:text-5xl font-semibold text-center">
            Industries
          </h1>
        </div>
      </div>
    </div>
  );
}

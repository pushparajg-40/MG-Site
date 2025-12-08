export function DashboardSection({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="flex justify-center dark:bg-[#181818] pb-[20px] transition-all duration-500 ease-in">
      <img src={imageSrc} alt="Customer Dashboard" />
    </div>
  );
}

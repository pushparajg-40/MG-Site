interface Location {
  name: string;
  coords: [number, number];
  address: string;
}

interface LocationsListProps {
  locations: Location[];
  onLocationHover: (location: Location) => void;
}

export default function LocationsList({
  locations,
  onLocationHover,
}: LocationsListProps) {
  return (
    <div className="lg:w-2/5 md:p-4 pl-[10px] md:pl-0 md:p-8 flex flex-col md:items-center order-1 md:order-2">
      <h3 className="text-lg font-semibold text-[#1783F7] mb-4">
        Our Locations
      </h3>
      <ul className="space-y-4 text-[#5F6368] dark:text-white md:pl-[60px]">
        {locations.map((location, idx) => (
          <li
            key={idx}
            className="hover:text-[#202124] dark:hover:text-white hover:font-bold cursor-pointer transition-colors"
            onMouseEnter={() => onLocationHover(location)}
          >
            {location.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

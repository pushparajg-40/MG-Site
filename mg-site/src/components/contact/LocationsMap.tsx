import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Location {
  name: string;
  coords: [number, number];
  address: string;
}

interface LocationsMapProps {
  locations: Location[];
  hoveredLocation: Location | null;
}

export default function LocationsMap({
  locations,
  hoveredLocation,
}: LocationsMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<{
    light: L.TileLayer | null;
    dark: L.TileLayer | null;
  }>({ light: null, dark: null });

  useEffect(() => {
    if (!containerRef.current) return;

    if (mapRef.current) {
      mapRef.current.remove();
    }

    const map = L.map(containerRef.current).setView(
      [12.9550333, 77.7128925],
      10
    );

    const lightTiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      { attribution: "&copy; OpenStreetMap contributors" }
    );

    const darkTiles = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      { attribution: "&copy; CARTO" }
    );

    tilesRef.current = { light: lightTiles, dark: darkTiles };

    const isDark = document.documentElement.classList.contains("dark");
    (isDark ? darkTiles : lightTiles).addTo(map);

    locations.forEach((location) => {
      const marker = L.marker(location.coords).addTo(map);
      marker.bindPopup(`<b>${location.name}</b><br>${location.address}`);
    });

    mapRef.current = map;

    const handleResize = () => {
      map.invalidateSize();
    };

    window.addEventListener("resize", handleResize);

    const observer = new MutationObserver(() => {
      const nowDark = document.documentElement.classList.contains("dark");
      const wasDark = isDark;

      //   if (
      //     nowDark !== wasDark &&
      //     tilesRef.current.light &&
      //     tilesRef.current.dark
      //   ) {
      //     if (nowDark) {
      //       map.removeLayer(tilesRef.current.light);
      //       map.addLayer(tilesRef.current.dark);
      //     } else {
      //       map.removeLayer(tilesRef.current.dark);
      //       map.addLayer(tilesRef.current.light);
      //     }
      //   }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [locations]);

  useEffect(() => {
    if (hoveredLocation && mapRef.current) {
      mapRef.current.setView(hoveredLocation.coords, 10);
    }
  }, [hoveredLocation]);

  return (
    <div
      ref={containerRef}
      className="h-[320px] lg:h-[320px] xl:h-[350px] w-full rounded-2xl"
    />
  );
}

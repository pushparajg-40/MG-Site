import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import LocationsMap from "../components/contact/LocationsMap";
import ContactForm from "../components/contact/ContactForm";
import LocationsList from "../components/contact/LocationList";
import ContactFormSection from "../components/ContactForm";

interface Location {
  name: string;
  coords: [number, number];
  address: string;
}

const locations: Location[] = [
  {
    name: "Coimbatore",
    coords: [11.0005776, 76.9588358],
    address: "Coimbatore, Tamil Nadu, India",
  },
  {
    name: "Bangalore",
    coords: [12.9550333, 77.7128925],
    address: "Bangalore, Karnataka, India",
  },
  {
    name: "Hyderabad",
    coords: [17.385, 78.4867],
    address: "Hyderabad, Telangana, India",
  },
  {
    name: "Bhubaneswar",
    coords: [20.2961, 85.8245],
    address: "Bhubaneswar, Odisha, India",
  },
  {
    name: "Kuala Lumpur",
    coords: [3.139, 101.6869],
    address: "Kuala Lumpur, Malaysia",
  },
  {
    name: "Cincinnati",
    coords: [39.1031, -84.512],
    address: "Cincinnati, Ohio, USA",
  },
  {
    name: "Singapore",
    coords: [1.3521, 103.8198],
    address: "Singapore",
  },
];

function ContactUs() {
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);

  return (
    <div className="dark:bg-black">
      <HeroBanner
        type=""
        title="Contact Us"
        image="assets/contactUs/contactus-banner.png"
      />

      <ContactFormSection></ContactFormSection>

      <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 dark:bg-black">
        <div className="w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-3/5 md:p-8 order-2 md:order-1 mt-[50px] md:mt-0">
              <LocationsMap
                locations={locations}
                hoveredLocation={hoveredLocation}
              />
            </div>

            <LocationsList
              locations={locations}
              onLocationHover={setHoveredLocation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

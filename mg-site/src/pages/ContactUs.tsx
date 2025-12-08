import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import LocationsMap from "../components/contact/LocationsMap";
import ContactForm from "../components/contact/ContactForm";
import LocationsList from "../components/contact/LocationList";

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

      <div
        className="min-h-screen flex items-center justify-center
        bg-[linear-gradient(135deg,rgba(232,245,255,1)_0%,rgba(251,255,250,1)_30%,rgba(232,241,239,1)_55%,rgba(211,236,255,1)_100%)]
        dark:bg-none dark:bg-[#181818]
        py-16"
      >
        <div className="container mx-auto flex flex-col lg:flex-row gap-10 px-6 lg:px-[200px]">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#687DA9] dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-[#667085] dark:text-white mb-6">
              At Mindgraph, we're dedicated to providing innovative solutions to
              meet your unique challenges. Whether you have questions, need
              support, or want to explore how our services can benefit you,
              we're here to help.
              <br />
              <br />
              <a
                href="mailto:info@mind-graph.com"
                className="text-[#687DA9] font-extrabold dark:text-white hover:underline dark:opacity-70"
              >
                info@mind-graph.com
              </a>
            </p>

            <div className="flex flex-col md:flex-row gap-6 mt-[60px] hidden md:flex">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#687DA9] dark:text-white mb-2">
                  Contact Support
                </h3>
                <p className="text-[#667085] dark:text-white dark:opacity-70">
                  At Mindgraph, your satisfaction is our top priority. Our
                  dedicated support team is ready to assist you promptly with
                  any technical issues, billing inquiries, or service needs.
                </p>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#687DA9] dark:text-white mb-2">
                  Feedback & Suggestions
                </h3>
                <p className="text-[#667085] dark:text-white dark:opacity-70">
                  We value your feedback and suggestions to help us improve.
                  Share your ideas for enhancing our services or new features
                  you'd like to see to create better experiences for all our
                  clients.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />

          <div className="flex flex-col md:flex-row gap-6 md:mt-[60px] md:hidden">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#687DA9] mb-2">
                Contact Support
              </h3>
              <p className="text-[#667085]">
                At Mindgraph, your satisfaction is our top priority. Our
                dedicated support team is ready to assist you promptly with any
                technical issues, billing inquiries, or service needs.
              </p>
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-semibold text-[#687DA9] mb-2">
                Feedback & Suggestions
              </h3>
              <p className="text-[#667085]">
                We value your feedback and suggestions to help us improve. Share
                your ideas for enhancing our services or new features you'd like
                to see to create better experiences for all our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

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

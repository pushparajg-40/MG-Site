import "react-phone-number-input/style.css";
import ContactFormV2 from "./ContactFormV2";

export default function FooterContactForm() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 bg-black">
      <div className="lg:relative w-full">
        {/* Background Image */}
        <img
          src="/assets/contact-form-footer-bg.jpg"
          alt="Contact background"
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-80"
        />

        {/* Form Container */}
        <div className="lg:relative lg:bottom-16 z-10 flex justify-end items-center lg:pr-12">
          <ContactFormV2 isFooterFormSize={true} />
        </div>
      </div>
    </div>
  );
}

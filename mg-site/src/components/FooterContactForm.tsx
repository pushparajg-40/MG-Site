import "react-phone-number-input/style.css";
import ContactFormV2 from "./ContactFormV2";

export default function FooterContactForm() {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 bg-white dark:bg-black transition-all duration-500 ease-in">
      <div className="lg:relative w-full">
        {/* Background Image */}
        <img
          src="/assets/contact-form-footer-bg.jpg"
          alt="Contact background"
          className="hidden lg:block absolute inset-0 w-full object-cover"
        />

        {/* Title and description */}
        <div className="hidden lg:flex absolute inset-0 z-10 items-center pl-20 max-w-[55%]">
          <div>
            <h3 className="text-white text-4xl leading-tight font-semibold">
              Let’s work together,
              <br />
              Get started.
            </h3>

            <p className="text-white dark:text-white text-base mt-6 max-w-md">
              We’re here to provide fast, accurate,
              <br />
              and helpful responses—just ask!
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="lg:relative lg:bottom-24 z-10 flex justify-end items-center lg:pr-12">
          <ContactFormV2 isFooterFormSize={true} />
        </div>
      </div>
    </div>
  );
}

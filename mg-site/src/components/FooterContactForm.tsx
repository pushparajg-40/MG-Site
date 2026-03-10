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
          className="hidden lg:block absolute inset-0 w-full object-cover
            opacity-100 dark:opacity-100
            brightness-75 dark:brightness-100"
        />

        {/* Title and description */}
        <div className="hidden lg:flex absolute inset-0 z-10 items-center pl-20 max-w-[55%]">
          <div>
            <h3
              className="text-white text-4xl leading-tight font-semibold
              dark:text-white"
            >
              Let's work together,
              <br />
              Get started.
            </h3>
            <p className="text-white text-base mt-6 max-w-md">
              We're here to provide fast, accurate,
              <br />
              and helpful responses—just ask!
            </p>
          </div>
        </div>

        {/* Mobile title — visible only on small screens */}
        <div className="lg:hidden mb-6 px-2">
          <h3 className="text-[#1F3F68] dark:text-white text-3xl leading-tight font-semibold">
            Let's work together,
            <br />
            Get started.
          </h3>
          <p className="text-[#667085] dark:text-white text-base mt-4 max-w-md">
            We're here to provide fast, accurate,
            <br />
            and helpful responses—just ask!
          </p>
        </div>

        {/* Form Container */}
        <div className="lg:relative lg:bottom-24 z-10 flex justify-end items-center lg:pr-12">
          <ContactFormV2 isFooterFormSize={true} />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ContactForm from "./contact/ContactForm";

function ContactFormSection() {
  return (
    <>
      {" "}
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
    </>
  );
}

export default ContactFormSection;

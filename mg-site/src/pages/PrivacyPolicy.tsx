import ContactFormSection from "../components/ContactForm";

export interface PrivacySection {
  id: string;
  title: string;
  content: string | string[];
}

export const privacyPolicySections: PrivacySection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `This Policy applies to all information provided to, collected, processed, and otherwise utilised by Mindgraph Technologies Private Limited, Mindgraph Solutions Sdn. Bhd., Mindgraph Pte. Ltd., and Mindgraph LLC (Hereinafter collectively referred to as “Mind-Graph”).

Welcome to Mind-Graph. We are committed to protecting your personal information and your right to privacy. We want to ensure you're informed about the information we gather, how it's utilized, and how it may be shared.

We encourage you to review our Privacy Policy, which is designed to help you use our services in a way that suits you best.

In this Privacy Policy, we detail our practices for collecting, using, sharing, retaining, and transferring information, as well as your rights in these matters. If you have any questions or concerns about our policy, or our practices regarding your personal information, please get in touch with us at info@mind-graph.com.`,
  },

  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: [
      `We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us. The types of information we collect could include:`,
      `1. Voluntarily provided information which may include your name, address, email address, billing and/or credit card information etc., which may be used when you purchase products and/or services and to deliver the services you have requested.`,
      `2. Information automatically collected when visiting our website, which may include cookies, third party tracking technologies and server logs.`,
      `Please be assured that we collect personal information only when you knowingly and willingly provide it through surveys, membership forms, and email communication.`,
      `We may collect and use your personal information to operate our website and to deliver the services you request. At times, we may use identifiable information to keep you informed of other possible services that may be available to you from MindGraph.`,
      `We may also contact you for surveys or research questionnaires related to your opinion of current or potential services.`,
      `It is strongly recommended that you review the privacy policies of any external websites you visit, to better understand how they collect and share user information.`,
    ],
  },

  {
    id: "how-we-use-information",
    title: "3. How We Use Your Information",
    content: `We use personal information collected via our website for various business purposes described below. We process your personal information for these purposes in reliance on:

• Our legitimate business interests  
• The need to enter into or perform a contract with you  
• Your consent  
• Compliance with legal obligations  

We may also analyse browsing behaviour to understand which services and/or products are most popular among our users.`,
  },

  {
    id: "sharing",
    title: "4. Sharing Your Information",
    content: [
      `We only share and disclose your information in the following situations:`,
      `1. Compliance with Laws`,
      `2. Vital Interests and Legal Rights`,
      `3. Vendors, Consultants, and Other Third-Party Service Providers`,
      `4. Business Transfer`,
      `5. Affiliates`,
      `6. Business Partners`,
      `7. With your Consent`,
      `MindGraph does not sell, rent or lease any customer lists or names to third parties.`,
      `We may disclose your personal information only when legally required or necessary to comply with applicable laws, statutes, or legal processes. Such disclosures occur only after entering into an agreement of non-disclosure.`,
    ],
  },

  {
    id: "cookies",
    title: "5. Cookies and Other Tracking Technologies",
    content: `Our website may use cookies, tracking technologies, and similar tools to improve your experience and analyse site usage patterns.

These technologies help us:

• Understand user behaviour  
• Improve website functionality  
• Track visits and traffic  
• Provide personalized experiences  

You may choose to accept or decline cookies through your browser settings.`,
  },

  {
    id: "data",
    title: "6. Data Security",
    content: `We are dedicated to protecting your personal information and employ strong security measures to safeguard your data.

Our security practices include:

• Industry-standard encryption during transmission and storage  
• Strict access control to personal data  
• Confidentiality obligations for staff  
• Regular security reviews and system updates  
• Preventive actions against unauthorized access  

We also ensure that any third-party service providers are bound by strict confidentiality and data protection obligations.

However, users must also take precautions — such as keeping login credentials secure.`,
  },

  {
    id: "privacy-rights",
    title: "7. Your Privacy Rights",
    content: `In certain regions (such as the European Economic Area), you have enhanced rights over your personal information.

Depending on your location, you may have rights to:

• Access your data  
• Correct inaccuracies  
• Delete personal information  
• Restrict processing  
• Withdraw consent  

You may review, change, or terminate your account at any time.`,
  },

  {
    id: "retain-data",
    title: "8. How long we retain your personal data",
    content: `We retain your personal data only for as long as necessary:

• To fulfil legitimate business purposes  
• To provide requested services  
• To comply with applicable laws  

Once data is no longer needed, we will delete it or store it in a form that no longer identifies you.`,
  },

  {
    id: "updates",
    title: "9. Updates to This Policy",
    content: `We may update this Privacy Policy periodically to reflect changes to our practices, legal requirements, or operational processes.

When significant changes occur, we may actively notify you, if required by applicable law.`,
  },

  {
    id: "contactUs",
    title: "10. Contact Us",
    content: `If you have any questions or concerns about this Privacy Policy, you may contact us at:

✉ info@mind-graph.com`,
  },
];

function PrivacyPolicy() {
  const scrollToSection = (id: string, headerSelector = "header") => {
    const element = document.getElementById(id);
    if (!element) return;

    const header = document.querySelector<HTMLElement>(headerSelector);
    const headerHeight = header ? header.offsetHeight : 0;

    const extraOffset = 12; // px
    const offset = headerHeight + extraOffset;

    const y = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: Math.max(0, Math.floor(y)),
      behavior: "smooth",
    });
  };
  return (
    <>
      {/* Smooth Scroll */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        h1::after {
          content: "";
          display: block;
          height: 2px;
          width: 50px;
          background-color: #ff6647;
          margin-top: 0 !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-[300px] bg-cover bg-center bg-[#204596] dark:bg-black transition-all duration-500 ease-in">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-3xl md:text-6xl font-semibold uppercase">
            Privacy Policy
          </p>
        </div>
      </section>

      {/* Content Layout */}
      <div className="max-w-7xl ms-[20px] md:mx-[60px] py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 border-r border-gray-200 pr-4">
          <h1 className="text-xl font-bold text-[#055CC0] dark:text-white mb-6 uppercase">
            Privacy Policy
          </h1>

          <nav className="space-y-3 px-1">
            {privacyPolicySections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="block text-left w-full text-[#055CC0] dark:text-white font-semibold hover:opacity-70"
              >
                {sec.title}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-2 space-y-10">
          {privacyPolicySections.map((section) => (
            <section key={section.id} id={section.id}>
              <h1 className="text-xl font-bold text-[#055CC0] dark:text-white mb-4 uppercase">
                {section.title}
              </h1>

              {/* If content is array → render bullet list / paragraphs */}
              {Array.isArray(section.content) ? (
                <div className="space-y-4 text-[#667085] dark:text-white leading-[30px]">
                  {section.content.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </div>
              ) : (
                <p className="text-[#667085] dark:text-white leading-[30px] whitespace-pre-line">
                  {section.content}
                </p>
              )}
            </section>
          ))}
        </main>
      </div>

      <ContactFormSection />
    </>
  );
}

export default PrivacyPolicy;

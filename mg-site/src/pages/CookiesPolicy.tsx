import ContactFormSection from "../components/ContactForm";
import PageTransition from "../components/PageTransition";

interface CookieSection {
  id: string;
  title: string;
  content: string;
}

const cookiePolicySections: CookieSection[] = [
  {
    id: "objective",
    title: "1. Objective",
    content: `The Cookies policy (‘Policy’) of Mindgraph Technologies Private Limited, Mindgraph Solutions Sdn. Bhd., Mindgraph Pte. Ltd., and Mindgraph LLC (hereinafter collectively referred to as “Mind-Graph” or “Company”), provides external users with detailed information about the cookies that the Company’s website uses and how users can control cookie placement by limiting or forbidding a website to place cookies on various electronic devices.

The Cookies Policy will help the Company maintain full disclosure with its users and create transparency in the collection and tracking of user information including private information. To provide the user with a more personalized and responsive service, the Company needs to remember and store information about how the user interacts with the website of the Company.

Whenever the user uses the website of the Company, information may be collected, tracked, and stored by cookies and other technologies of the Company. By using the website, the user agrees to the Company's use of cookies as described in this Cookie Policy.`,
  },

  {
    id: "applicability",
    title: "2. Applicability",
    content: `The Policy applies to the external users and visitors who visit the websites of the Company.`,
  },

  {
    id: "purpose",
    title: "3. Purpose",
    content: `The purpose of the Policy is to ensure the use of cookies which are necessary to enable the user to move around the Website and use its features.

The Company also uses functional cookies to record and track the information about the choices the user has made and to allow the Company to modify the website accordingly.

In addition, the Company may use web beacons, tracking pixels and similar services to understand more about the visitors to the Company website and to count visitor numbers and performance cookies to track how many individual users access the Company website and how often. This information is used for statistical purposes and to improve the workability of the website.`,
  },

  {
    id: "definitions",
    title: "4. Definitions",
    content: `Cookies are unique identifiers that are stored on the hard disks of electronic devices. While opening or searching for content on the browser, cookies recognize the data and keep track of the content which will get saved, and how long the stored data without the website owner’s knowledge that might impact the business.`,
  },

  {
    id: "data",
    title: "5. Data Usage",
    content: `The Company uses different kinds of cookies used in digital marketing while marketing the business of the Company.

Advertising and retargeting cookies save information from the user’s browsing history to record the Company's interests and browsing path on the website.

The Company uses advertising and targeting cookies enabling the Company to target advertising based on the user’s activity on the Website.`,
  },

  {
    id: "consent",
    title: "6. Cookie Consent",
    content: `Users must provide explicit consent to cookies code while opening the website of the Company of their choice. This consent is collected via a cookie banner or pop-up that appears upon accessing the website.`,
  },

  {
    id: "customise-cookie",
    title: "7. Customising The Cookie Consent",
    content: `Users can customize their cookie preferences via the website’s cookie consent manager.

When the website is accessed, a pop-up window allows users to select their preferred cookie settings, ensuring they have control over which cookies are enabled.`,
  },

  {
    id: "managing",
    title: "8. Managing Cookies",
    content: `The Company collects personal data via cookies and other similar tracking technologies with prior consent from the user.

The Company will maintain a record of the types of cookies that the user has authorized the Company to use and ensure adherence to the user preferences.

Users who do not wish to accept cookies may leave the website or adjust their browser settings to block cookies.`,
  },

  {
    id: "third-party",
    title: "9. Third-Party Cookies",
    content: `The Company may allow third-party service providers, such as analytics providers or advertisers, to place cookies on your device when you visit our website.

These cookies are governed by the third parties’ privacy policies, and we encourage you to review them.

The Company does not have control over the information collected by these cookies. However, we ensure that third parties comply with relevant data protection regulations when processing your data.`,
  },

  {
    id: "compliance",
    title: "10. Compliance with Law",
    content: `The Company uses all the collected information (including the personal information) through cookies in compliance with:

• The Information Technology Act, 2000  
• The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011  
• Any other applicable laws, including the Digital Personal Data Protection Act 2023  

The Company ensures that data is processed fairly, lawfully, and in a transparent manner.`,
  },

  {
    id: "data-retention",
    title: "11. Data Retention",
    content: `Data collected via cookies will only be retained for as long as necessary to fulfil the purpose outlined in this Policy or as required by the law.

The Company periodically reviews the necessity of retaining this data, ensuring compliance with legal requirements and user preferences.`,
  },

  {
    id: "contact",
    title: "12. Contact Information",
    content: `Users can contact the Company at the information provided below in case of any issue or for any detailed information on the Company’s Cookie Policy.

Review and Amendments to this Policy  
The Cookie Policy is subject to periodic reviews and updates from time to time or in case of a change in the business requirements or applicable regulations and legislation.`,
  },

  {
    id: "popup-window",
    title: "13. Popup Window Content",
    content: `Mindgraph uses cookies and similar technologies to operate this website and to provide you with a more personalized user experience.

These technologies help track and conduct analytics such as counting visits and traffic sources, provide advertisements, and interact with third parties.

By clicking "Accept cookies" you agree to the placement of cookies on your device.

You can manage your cookie preferences or withdraw your consent at any time by clicking "Customize cookies" on your device.

For more information, please review our Cookie Policy.`,
  },
];

function CookiesPolicy() {
  // Smooth scroll handler
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
      <style>{`
        h1::after {
          content: "";
          display: block;
          height: 2px;
          width: 50px;
          background-color: #ff6647;
          margin-top: 0 !important;
        }
      `}</style>
      <PageTransition>
        {/* HERO SECTION */}
        <section className="relative h-[300px] bg-cover bg-center bg-[#204596] dark:bg-black transition-all duration-500 ease-in">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl md:text-6xl font-semibold uppercase">
              COOKIES POLICY
            </p>
          </div>
        </section>

        {/* CONTENT SECTION */}
        <div className="max-w-7xl ms-[20px] md:mx-[60px] py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* SIDEBAR */}
          <aside className="md:col-span-1 border-r border-gray-200 pr-4">
            <h1 className="text-xl font-bold text-[#055CC0] dark:text-white mb-6 uppercase">
              Cookies Policy
            </h1>

            <nav className="space-y-3 px-1">
              {cookiePolicySections.map((sec) => (
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

          {/* MAIN CONTENT */}
          <main className="md:col-span-2 space-y-10">
            {cookiePolicySections.map((sec) => (
              <section id={sec.id} key={sec.id}>
                <h1 className="text-xl font-bold text-[#055CC0] dark:text-white mb-4 uppercase">
                  {sec.title}
                </h1>
                <p className="text-[#667085] dark:text-white leading-[30px] whitespace-pre-line">
                  {sec.content}
                </p>
              </section>
            ))}
          </main>
        </div>

        <ContactFormSection />
      </PageTransition>
    </>
  );
}

export default CookiesPolicy;

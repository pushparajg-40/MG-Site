import ContactFormSection from "../components/ContactForm";
export const termsData = {
  headerTitle: "Terms & Conditions – MindGraph",
  pageTitle: "Terms & Conditions - MindGraph",

  intro: `This Policy applies to all users and visitors of the website www.mind-graph.com, 
  owned and operated by Mindgraph Technologies Private Limited, Mindgraph Solutions Sdn. Bhd., 
  Mindgraph Pte. Ltd., and Mindgraph LLC (Hereinafter collectively referred to as “Mindgraph”). 
  Mindgraph offers software and other related technology services (referred to collectively as the "Services") 
  through its www.mind-graph.com This document delineates the policies governing how Mindgraph gathers and manages 
  your personal information when you engage with our website (www.mind-graph.com), By accessing the Site, 
  you implicitly agree to uphold and be legally bound by the stipulations articulated within these Terms 
  of Service ("Terms"). These Terms regulate your usage of the Site and Services, including all Collective Content, 
  as well as your involvement in any related Program. They establish a legally binding agreement between you and Mindgraph.
   Failure to comply with these Terms may incur civil and criminal consequences. These Terms and Conditions (the “Terms”) 
   delineate the rights and responsibilities of an unregistered website user or visitor (“user” or “you”) 
   regarding your use of the Site. By accessing or using the Site, including as an unregistered website visitor,
    you agree to comply with these Terms, our Privacy Policy, and our Cookies Policy, accessible on the Site. 
    These Terms solely apply to your use of the Site and the content available on or through the Site as an 
    unregistered website user or visitor. If you use or access any of our physical spaces, restricted-access 
    web-based services (requiring a login), broker or referral programs, or other services, your usage is 
    subject to the terms and conditions provided or accepted during your sign-up. Additionally, if you book or 
    avail any products or services through our partners or other service providers, you are subject to their 
    respective terms and conditions. We may periodically make modifications, deletions, or additions to the 
    Site or these Terms, and your continued use of the Site constitutes acceptance of such changes. 
    We reserve the right to modify our Terms and Conditions at any time without prior notice. To stay 
    informed about any changes, please periodically review this policy. By visiting this Website, you 
    agree to be bound by these terms and conditions. If you disagree, please refrain from using or accessing
     our Website. #Terms and Conditions`,

  sections: [
    {
      id: "site-contents",
      title: "Site Contents",
      sidebarTitle: "Site Contents",
      content: `All materials, including but not limited to images, details, data, illustrations, designs, icons, photographs, video clips, text, software, graphics, scripts, logos, and other materials (collectively, the "Contents") displayed on this site are exclusively owned (either directly or indirectly) by the Company and/or its content providers. The Contents are protected by copyrights, trademarks, service marks, trade dress, and other intellectual or ownership rights owned by the Company.`,
    },
    {
      id: "use-of-site",
      title: "Use of Site and Restrictions",
      sidebarTitle: "Use of Site and Restrictions",
      content: `The site and its Contents are intended for your personal,      non-commercial use only. Any other use, including modification,      removal, deletion, transmission, publication, distribution,      uploading, posting, redistribution, re-licensing, selling,      duplicating, republishing, or any other dissemination without the      express written permission of the Company is strictly prohibited.`,
    },
    {
      id: "online-conduct",
      title: "Online Conduct",
      sidebarTitle: "Online Conduct",
      content: `You agree to use the site for lawful purposes only. Prohibited      activities include posting or transmitting unlawful, harmful,      threatening, abusive, harassing, defamatory, vulgar, obscene,      profane, or hateful material.`,
    },
    {
      id: "accuracy",
      title: "Accuracy of Information",
      sidebarTitle: "Accuracy of Information",
      content: `Information provided on this site is for general informational      purposes and the Company makes no warranties regarding its       accuracy or completeness.`,
    },
    {
      id: "links",
      title: "Links to Third-Party Sites",
      sidebarTitle: "Links to Third-Party Sites",
      content: `This site may contain links to third-party websites. The Company      is not responsible for the content or practices of those sites.`,
    },
    {
      id: "disclaimer",
      title: "Disclaimer of Warranties and Limitations of Liability",
      sidebarTitle: "Disclaimer of Warranties & Liability",
      content: `The Company disclaims all warranties and shall not be held liable      for any damages arising from the use of this site.`,
    },
    {
      id: "indemnification",
      title: "Indemnification",
      sidebarTitle: "Indemnification",
      content: `You agree to indemnify and hold harmless the Company, its      affiliates, and employees from any claims arising out of your use      of this site.`,
    },
  ],
};

function Terms() {
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
      <style>
        {`  h1::after {
            content: "";
            display: block;
            height: 2px;
            width: 50px;
            background-color: #ff6647;
            margin-top: 0 !important;
        }`}
      </style>
      {/* <!-- Hero Section --> */}
      <section className="relative h-[300px] bg-cover bg-center bg-[#204596] dark:bg-black transition-all duration-500 ease-in">
        {/* <!-- style="background-image: url('assets/blog_banner.png');" --> */}

        <div className="absolute inset-0  flex items-center justify-center">
          <p className="text-white  text-3xl md:text-5xl font-semibold uppercase text-center ">
            {termsData.headerTitle}
          </p>
        </div>
      </section>

      {/* <!-- heading--> */}
      <section className="pt-[20px] md:pt-[50px] px-4 md:px-[60px]">
        <h1 className="uppercase text-[#055CC0] dark:text-white text-2xl font-bold">
          {termsData.pageTitle}
        </h1>
        <p className="text-[#667085] dark:text-white text-[16px] leading-[32px] mt-[20px]  pr-0 md:pr-[50px]">
          {termsData.intro}
        </p>
      </section>

      {/* <!-- Content Section--> */}
      <div className="max-w-7xl ms-[20px] md:mx-[60px]  py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Sidebar --> */}
        <aside
          id="sidebar"
          className="md:col-span-1 border-r border-gray-200 pr-4"
        >
          <h1 className="text-xl font-bold text-[#055CC0] dark:text-white mb-6">
            TERMS & CONDITION
          </h1>
          <p className="text-lg font-bold text-[#055CC0] dark:text-white mb-6">
            1. Ownership and Use of Site Contents
          </p>
          <nav id="sidebarNav" className="space-y-3 px-4">
            {termsData.sections.map((terms) => {
              return (
                <>
                  {" "}
                  <button
                    key={terms.id}
                    onClick={() => scrollToSection(terms.id)}
                    className="block text-left w-full text-[#055CC0] dark:text-white font-semibold hover:opacity-70"
                  >
                    {terms.title}
                  </button>
                </>
              );
            })}
          </nav>
        </aside>

        {/* <!-- Main Content --> */}
        <main className="md:col-span-2 space-y-6">
          <h1 className="text-xl font-bold text-[#055CC0] dark:text-white mb-6 uppercase">
            Ownership and Use of Site Contents
          </h1>

          {/* <!-- Section 1 --> */}

          {termsData.sections.map((sec) => (
            <section id={sec.id} key={sec.id}>
              <h1 className="text-xl font-bold text-[#055CC0] dark:text-white mb-4 uppercase">
                {sec.title}
              </h1>
              <p className="text-[#667085] dark:text-white  whitespace-pre-line">
                {sec.content}
              </p>
            </section>
          ))}
        </main>
      </div>

      {/* Contact Form */}
      <ContactFormSection></ContactFormSection>
    </>
  );
}

export default Terms;

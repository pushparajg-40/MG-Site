import { useEffect, useRef } from "react";

interface SolutionListProps {
  subtitle: string;
  items: string[];
}

export default function SolutionList({ subtitle, items }: SolutionListProps) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".solution-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 500);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="scroll-animate lg:px-[150px] mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-[#1783F7] dark:text-white mb-6">
        Our Solution
      </h2>
      <p className="text-md text-[#1783F7] dark:text-white mb-4">{subtitle}</p>

      <div
        ref={sectionRef}
        className="mt-4 flex flex-col gap-4"
        id="solution-items"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="solution-item flex items-center gap-4 border border-[#BFBFBF] border-opacity-40 rounded-2xl p-3 transition-all duration-500"
          >
            <div className="rounded-[50%] border text-black dark:text-white text-2xl w-[50px] h-[50px] text-center p-2 flex-shrink-0 flex items-center justify-center">
              {idx + 1}
            </div>
            <p className="text-xl text-black dark:text-white font-medium">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

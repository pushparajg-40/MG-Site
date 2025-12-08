import { useEffect, useRef } from "react";
import type { ChildProps } from "./AboutSection";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: ChildProps[];
}

export function FeaturesSection({
  title,
  subtitle,
  features,
}: FeatureSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".feature-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="mt-[50px] md:mt-[100px] 2xl:px-[100px] bg-[#F6FAFF] dark:bg-[#181818] pt-[20px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[#1783F7] dark:text-white text-2xl">{title}</h2>
        <p className="text-[#687DA9] dark:text-white text-center text-5xl mt-4 xl:px-[300px] px-0">
          {subtitle}
        </p>
      </div>

      <div
        ref={containerRef}
        className="grid md:grid-cols-3 px-[20px] lg:px-[0px] mt-[80px]"
      >
        {features.map((feature: any, index: any) => (
          <div
            key={index}
            className="feature-card lg:pr-[80px] opacity-0 translate-y-10 transition-all duration-700 ease-out"
            style={{
              transitionDelay: `${index * 50}ms`,
            }}
          >
            <div
              className={
                index > 2
                  ? "mt-[40px] md:mt-[80px]"
                  : index > 0
                  ? "mt-[40px] md:mt-0"
                  : ""
              }
            >
              <h2 className="text-[#687DA9] dark:text-white text-3xl font-bold">
                {feature.title}
              </h2>
              {feature.points?.length > 0 && (
                <ul className="text-[#666666] dark:text-white mt-4 pl-[20px] list-disc space-y-2">
                  {feature.points.map((item: any, itemIndex: any) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {feature.point && (
                <p className="text-[#667085] dark:text-white mt-4 font-normal text-base leading-[25.89px] pb-5">
                  {feature.point}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .feature-card.reveal {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}

import { useEffect, useRef } from "react";
import type { ChildProps } from "./AboutSection";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  desc?: string;
  features: ChildProps[];
  type: string;
}

export function FeaturesSection({
  title,
  subtitle,
  desc,
  features,
  type,
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
      <div
        className={`flex flex-col justify-center ${
          type == "normal" ? "items-center" : "items-start"
        }`}
      >
        <h2 className="text-[#1783F7] dark:text-white text-2xl">{title}</h2>
        <p
          className={`text-[#687DA9] dark:text-white  text-5xl mt-4  px-0 ${
            type == "normal" ? "text-center xl:px-[300px]" : "pr-[300px]"
          }`}
        >
          {subtitle}
        </p>
        {desc && (
          <p className="text-[#667085] mt-4 dark:text-white text-base font-normal leading-[1.5] md:w-[768px] md:h-[72px] pr-2 md:pr-0">
            {desc}
          </p>
        )}
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

import React from "react";
import type { AboutProps } from "./AboutSection";

function AboutImageSection({ title, subtitle, desc, childs }: AboutProps) {
  return (
    <>
      <div className="pt-[100px] dark:bg-[#181818] transition-all duration-500 ease-in">
        <section className="flex flex-col justify-center items-center pt-20 pb-8 dark:bg-[#000000]  transition-all duration-500 ease-in">
          <p className="text-[#1783F7] dark:text-white font-semibold text-4xl pb-7">
            {title}
          </p>
          <p className="text-[#687DA9] dark:text-white font-normal text-[48px] leading-[1.2] text-center pb-5">
            {subtitle}
          </p>
        </section>

        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-10 justify-items-center items-start dark:bg-[#000000] transition-all duration-500 ease-in">
          {childs.map((child) => {
            return (
              <>
                <div className="flex flex-col justify-center items-start">
                  <p className="text-[#687DA9] dark:text-white font-semibold text-2xl pb-5">
                    {child.title}
                  </p>
                  <p className="text-[#667085] dark:text-white font-normal text-base leading-[25.89px] pb-5">
                    {child.point}
                  </p>
                </div>
              </>
            );
          })}
        </section>

        <div className="flex justify-center pt-10 dark:bg-[#000000] transition-all duration-500 ease-in">
          <img src="assets/mathops/mathops-image-2.png" alt="image" />
        </div>
      </div>
    </>
  );
}

export default AboutImageSection;

import { useState } from "react";
import { ChevronUp } from "lucide-react";

export default function Solution({
  items,
  desc,
}: {
  items: any[];
  desc: string;
}) {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="lg:px-[150px] mx-auto px-4 py-12">
      <h2 className="text-2xl text-[#1783F7] dark:text-white mb-6">
        Our Solution
      </h2>
      {desc.length > 0 && <p>{desc}</p>}

      <div className="space-y-3">
        {items.map((item: any) => (
          <div
            key={item.id}
            className="border border-blue-100 dark:border-[#BFBFBF] dark:border-opacity-40 rounded-lg cursor-pointer"
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
          >
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 flex items-center justify-center border border-[#B2F0FB] dark:border-[#FFFFFF] text-[#687DA9] dark:text-[#FFFFFF] font-semibold rounded-full">
                  {item.id}
                </div>
                <span className="text-[#687DA9] dark:text-white font-semibold text-xl">
                  {item.title}
                </span>
              </div>
              <div
                className={`transition-transform duration-500 ${
                  openId === item.id ? "rotate-180" : ""
                }`}
              >
                <img
                  src="/assets/upArrow.svg"
                  data-dark="/assets/updated/upArrowDark.svg"
                  data-light="/assets/upArrow.svg"
                  className="w-5 h-5 theme-image"
                  alt=""
                />
              </div>
            </div>

            {openId === item.id && (
              <div className="px-12 pb-4 text-sm text-[#667085] dark:text-white space-y-2 transition-all duration-500 ease-out">
                <ul className="list-disc ml-7 space-y-2 text-[#667085] dark:text-white">
                  {item.content.map((line: any, idx: any) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

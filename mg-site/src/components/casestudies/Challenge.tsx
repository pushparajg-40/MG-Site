interface ChallengeProps {
  title: string;
  desc: string;
  challenges: string[];
}

export default function Challenge({ title, desc, challenges }: ChallengeProps) {
  return (
    <section className="scroll-animate lg:pl-[150px] lg:pr-[100px] px-6 flex flex-col md:flex-row items-center md:mt-[100px] lg:mt-[-100px]">
      <div>
        <h2 className="text-4xl font-extrabold text-[#1783F7] dark:text-white mb-4">
          {title}
        </h2>
        <h3 className="text-lg mb-4 text-[#687DA9] dark:text-white leading-[24px]">
          {desc}
        </h3>
        <ul className="list-disc mt-8 ml-5 space-y-4 text-[#667085] dark:text-white">
          {challenges.map((challenge, idx) => (
            <li key={idx} className="flex gap-3">
              <img
                src="/assets/arrow.svg"
                data-light="/assets/arrow.svg"
                data-dark="/assets/updated/crossArrowWhite.svg"
                className="theme-image mt-[-2px]"
                alt=""
              />
              <p className="text-[#687DA9] dark:text-white mb-1 text-md font-medium">
                {challenge}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        <img
          src="/assets/kpmg_challenge.png"
          alt="ESG Dashboard"
          className="mx-auto max-w-full md:max-w-2xl"
        />
      </div>
    </section>
  );
}

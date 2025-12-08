const TECHNOLOGIES = [
  "/assets/updated/react.svg",
  "/assets/updated/cloud.svg",
  "/assets/updated/net.svg",
  "/assets/updated/azure.svg",
  "/assets/updated/vscode.svg",
];

export default function TechnologiesUsed() {
  return (
    <section className="scroll-animate lg:px-[150px] px-[30px] py-8">
      <h2 className="text-2xl font-extrabold text-[#1783F7] dark:text-white mb-6">
        Technologies Used
      </h2>
      <div className="flex bg-white dark:bg-[#181818] rounded-2xl justify-evenly py-6 px-6 overflow-x-auto">
        {TECHNOLOGIES.map((tech, idx) => (
          <img
            key={idx}
            src={tech}
            alt={`Technology ${idx + 1}`}
            className="h-[50px]"
          />
        ))}
      </div>
    </section>
  );
}

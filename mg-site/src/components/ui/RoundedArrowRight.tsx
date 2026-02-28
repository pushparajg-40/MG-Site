import { cn } from "../../lib/utils";

export default function RoundedArrowRight({
  className,
}: {
  className: string;
}) {
  return (
    <div>
      <img
        src="/assets/arrow-right-rounded.svg"
        alt="Arrow right rounded"
        className={cn("w-6 h-6", className)}
      />
    </div>
  );
}

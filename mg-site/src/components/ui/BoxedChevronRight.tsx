import { cn } from "../../lib/utils";

export interface BoxedChevronRightIconProps {
  className?: string;
}

export default function BoxedChevronRightIcon({
  className,
}: BoxedChevronRightIconProps) {
  return (
    <>
      <span className="flex-shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center border border-gray-400 rounded text-gray-400 text-[10px] font-bold">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={cn("w-3 h-3", className)}
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </span>
    </>
  );
}

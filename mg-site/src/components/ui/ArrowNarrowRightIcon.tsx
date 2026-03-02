import { cn } from "../../lib/utils";

export interface ArrowNarrowRightIconProps {
  className?: string;
  strokeWidth?: number;
}

export default function ArrowNarrowRightIcon({
  className,
  strokeWidth = 1.8,
}: ArrowNarrowRightIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-4 h-4", className)}
    >
      <path
        d="M4 12H20M20 12L14 6M20 12L14 18"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

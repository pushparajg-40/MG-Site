interface RoundedArrowRightIconProps {
  size?: number;
  bgColor?: string;
  arrowColor?: string;
  borderColor?: string;
  className?: string;
}

export default function RoundedArrowRightIcon({
  size = 32,
  bgColor = "#030712",
  arrowColor = "#e5e7eb",
  borderColor,
  className,
}: RoundedArrowRightIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle */}
      <circle
        cx="12"
        cy="12"
        r="11"
        fill={bgColor}
        stroke={borderColor}
        strokeWidth={borderColor ? 2 : 0}
      />

      {/* Arrow line */}
      <line
        x1="8"
        y1="12"
        x2="15"
        y2="12"
        stroke={arrowColor}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Arrow head */}
      <polyline
        points="12,9 15,12 12,15"
        fill="none"
        stroke={arrowColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface Props {
  size?: number;
  strokeColor?: string;
  borderColor?: string;
  strokeWidth?: number;
  className?: string;
}

export default function SquareChevronRight({
  size = 20,
  strokeColor = "#e5e7eb",
  borderColor = "#e5e7eb",
  strokeWidth = 2,
  className,
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded Square */}
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="6"
        fill="none"
        stroke={borderColor}
        strokeWidth={strokeWidth}
      />

      {/* Chevron (no shaft) */}
      <polyline
        points="10,8 15,12 10,16"
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

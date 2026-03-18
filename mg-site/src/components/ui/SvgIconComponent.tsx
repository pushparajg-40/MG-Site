type SvgIconProps = {
  icon: React.ElementType;
  size?: number;
  width?: number | string;
  height?: number | string;
  className?: string;
};

export default function SvgIconComponent({
  icon: IconSvg,
  size,
  width,
  height,
  className = "",
}: SvgIconProps) {
  // Use explicit width/height if provided, else fall back to size, else default to undefined (native SVG size)
  const finalWidth = width ?? size;
  const finalHeight = height ?? size;

  return (
    <div className={`text-gray-600 dark:text-white ${className}`}>
      <IconSvg
        width={finalWidth}
        height={finalHeight}
        className="stroke-current fill-current [&_path]:fill-current [&_line]:stroke-current"
      />
    </div>
  );
}

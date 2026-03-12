type SvgIconProps = {
  icon: React.ElementType;
  size?: number;
  className?: string;
};

export default function SvgIconComponent({
  icon: IconSvg,
  size = 16,
  className = "",
}: SvgIconProps) {
  return (
    <div>
      <IconSvg
        width={size}
        height={size}
        className={`stroke-gray-600 [&_path]:fill-gray-600 dark:stroke-white dark:[&_path]:fill-white ${className}`}
      />
    </div>
  );
}

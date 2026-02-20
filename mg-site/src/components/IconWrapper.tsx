import type { ComponentPropsWithoutRef, ElementType } from "react";

interface IconWrapperProps extends ComponentPropsWithoutRef<"svg"> {
  icon: ElementType;
  size?: number | string;
}

const IconWrapper = ({ icon: Icon, size = 24, ...props }: IconWrapperProps) => {
  return (
    <Icon
      width={size}
      height={size}
      {...props}
    />
  );
};

export default IconWrapper;

import React from "react";
import { FeatherIconNames } from "feather-icons";

interface IconProps {
  name: FeatherIconNames;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color, className }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <use
        xlinkHref={`node_modules/feather-icons/dist/feather-sprite.svg#${name}`}
      />
    </svg>
  );
};

export default Icon;

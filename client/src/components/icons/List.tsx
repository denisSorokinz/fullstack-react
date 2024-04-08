import { FC } from "react";
import { SVGProps } from ".";

const ListView: FC<SVGProps> = ({
  width = "100%",
  height = "100%",
  fill = "currentColor",
  stroke = "currentColor",
  className,
}) => (
  <svg
    width={width}
    height={height}
    fill={fill}
    stroke={stroke}
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke={"currentColor"} strokeLinecap="round" strokeWidth="1.5">
      <path d="m2 11.4c0-1.1583.24173-1.4 1.4-1.4h17.2c1.1583 0 1.4.2417 1.4 1.4v1.2c0 1.1583-.2417 1.4-1.4 1.4h-17.2c-1.15827 0-1.4-.2417-1.4-1.4z" />
      <path d="m2 3.4c0-1.15827.24173-1.4 1.4-1.4h17.2c1.1583 0 1.4.24173 1.4 1.4v1.2c0 1.15827-.2417 1.4-1.4 1.4h-17.2c-1.15827 0-1.4-.24173-1.4-1.4z" />
      <path d="m2 19.4c0-1.1583.24173-1.4 1.4-1.4h17.2c1.1583 0 1.4.2417 1.4 1.4v1.2c0 1.1583-.2417 1.4-1.4 1.4h-17.2c-1.15827 0-1.4-.2417-1.4-1.4z" />
    </g>
  </svg>
);

export default ListView;

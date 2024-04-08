import { FC } from "react";
import { SVGProps } from ".";

const Cards: FC<SVGProps> = ({
  width = "100%",
  height = "100%",
  fill,
  stroke,
  className,
}) => (
  <svg
    width={width}
    height={height}
    fill={fill || "currentColor"}
    stroke={stroke || "currentColor"}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="4 4 16 16"
  >
    <path d="M14,5v6.5H10V5ZM5,7A2.00226,2.00226,0,0,1,7,5H9v6.5H5ZM7,19a2.0023,2.0023,0,0,1-2-2V12.5H9V19Zm3,0V12.5h4V19Zm9-2a2.00226,2.00226,0,0,1-2,2H15V12.5h4Zm0-5.5H15V5h2a2.00222,2.00222,0,0,1,2,2Z" />
  </svg>
);

export default Cards;

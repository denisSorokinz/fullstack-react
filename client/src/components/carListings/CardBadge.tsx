import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { FC, PropsWithChildren } from "react";

type Props = {
  className?: ClassValue;
};
const CardBadge: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return (
    <div
      className={cn(
        className,
        "absolute right-8 top-2 right-2 rounded-lg bg-amber-500 shadow-2xl shadow-black px-2 py-1"
      )}
    >
      {children}
    </div>
  );
};

export default CardBadge;

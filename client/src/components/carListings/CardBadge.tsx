import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { FC, PropsWithChildren } from "react";

type Props = {
  className?: ClassValue;
};
const CardBadgeList: FC<PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        className,
        "absolute right-2 top-2 "
      )}
    >
      {children}
    </div>
  );
};

const Item: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return <></>;
};
(CardBadgeList as any).Item = Item;

export default CardBadgeList;

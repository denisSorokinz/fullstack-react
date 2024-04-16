"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";

export const flipClassName = "should-3d-flip";
export const noFlipClassName = "prevent-3d-flip";

type Props = {
  front: React.ReactNode;
  back: React.ReactNode;
  isFlipped?: boolean;
  allowEdit?: boolean;
  dispatchFlip?: () => void;
};
const FlipBox: FC<Props> = ({
  front,
  back,
  isFlipped = false,
  dispatchFlip,
}) => {
  const handleClick = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!dispatchFlip) return;

    const target = ev.target as HTMLElement;

    if (
      target.classList.contains(noFlipClassName) ||
      target.closest(`.${noFlipClassName}`)
    ) {
      return;
    }

    if (
      target.classList.contains(flipClassName) ||
      target.closest(`.${flipClassName}`)
    ) {
      dispatchFlip();
    }
  };

  return (
    <div className="perspective group h-full w-full" onClick={handleClick}>
      <div
        className={cn(
          "preserve-3d relative h-full w-full rounded-md bg-slate-300 p-2 shadow-md shadow-slate-700 duration-500",
          isFlipped && "rotate-y-180 shadow-none"
        )}
      >
        <div className="backface-hidden h-full w-full bg-slate-200 p-2 shadow-lg">
          {front}
        </div>
        <div className="rotate-y-180 backface-hidden relative -top-full h-full w-full overflow-hidden bg-slate-200 p-2 shadow-md">
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipBox;

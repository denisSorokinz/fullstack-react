"use client";

import { FC, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const flipClassName = "should-3d-flip";
export const noFlipClassName = "prevent-3d-flip";

const paddingOffset = 16;

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
  const containerRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  const backHeightRef = useRef<number>();

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

  useEffect(() => {
    if (!(containerRef.current && frontRef.current && backRef.current)) return;

    const hasBackContent = backRef.current.childElementCount > 0;
    if (!hasBackContent) return;
    const backHeight = Array.from(backRef.current.children).reduce(
      (acc, item) => acc + +item.clientHeight,
      0
    );

    backHeightRef.current = backHeight;
  }, []);
  useEffect(() => {
    if (
      !(
        containerRef.current &&
        frontRef.current &&
        backHeightRef.current &&
        backHeightRef.current > 0
      )
    ) {
      return;
    }

    containerRef.current.style.height = !isFlipped
      ? `${frontRef.current.clientHeight + paddingOffset}px`
      : `${backHeightRef.current + paddingOffset * 2}px`;
  }, [isFlipped]);

  return (
    <div className="perspective group h-full w-full" onClick={handleClick}>
      <div
        className={cn(
          "preserve-3d relative h-full w-full rounded-md bg-slate-300 p-2 shadow-md shadow-slate-700 transition-all duration-500",
          isFlipped && "rotate-y-180 shadow-none"
        )}
        ref={containerRef}
      >
        <div
          className="backface-hidden w-full bg-slate-200 p-2 shadow-lg"
          ref={frontRef}
        >
          {front}
        </div>
        <div
          className="rotate-y-180 backface-hidden absolute left-2 top-2 w-[calc(100%_-_16px)] overflow-hidden bg-slate-200 p-2 shadow-md"
          ref={backRef}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipBox;

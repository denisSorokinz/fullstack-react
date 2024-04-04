"use client";

import React, { FC, useEffect, useRef, useState } from "react";

import "./style.scss";
import { UseFormRegisterReturn, useFormContext } from "react-hook-form";
import { RANGE_MODIFIERS } from "@/types/filters";

type Props = {
  slug: string;
  to: number;
  from?: number;
};

function fillSlider(
  min: number,
  max: number,
  nextFrom: number,
  nextTo: number,
  controlRangeRef: React.RefObject<HTMLInputElement>
) {
  if (!controlRangeRef.current) return;

  const rangeDistance = max - min;
  const fromPosition = nextFrom - min;
  const toPosition = nextTo - min;

  controlRangeRef.current.style.background = `linear-gradient(
    to right,
    ${"#e3e3e3"} 0%,
    ${"#e3e3e3"} ${(fromPosition / rangeDistance) * 100}%,
    ${"#00f"} ${(fromPosition / rangeDistance) * 100}%,
    ${"#00f"} ${(toPosition / rangeDistance) * 100}%, 
    ${"#e3e3e3"} ${(toPosition / rangeDistance) * 100}%, 
    ${"#e3e3e3"} 100%)
  `;
}

const Range: FC<Props> = ({ slug, to: max, from: min = 0 }) => {
  const context = useFormContext();
  const registerFrom = context?.register(`${slug}-${RANGE_MODIFIERS.FROM}`, {
    min,
    max,
    valueAsNumber: true,
  });
  const registerTo = context?.register(`${slug}-${RANGE_MODIFIERS.TO}`, {
    min,
    max,
    valueAsNumber: true,
  });

  const [from, setFrom] = useState(min);
  const [to, setTo] = useState(max);

  const controlRangeRef = useRef<HTMLInputElement>(null);

  const handleRangeChange = (changed: RANGE_MODIFIERS, nextValue: number) => {
    let nextFrom = from;
    let nextTo = to;

    if (changed === RANGE_MODIFIERS.FROM) {
      nextFrom = nextValue;
      setFrom(nextValue);
    }
    if (changed === RANGE_MODIFIERS.TO) {
      nextTo = nextValue;
      setTo(nextValue);
    }

    fillSlider(min, max, nextFrom, nextTo, controlRangeRef);
  };

  useEffect(() => {
    fillSlider(min, max, min, max, controlRangeRef);

    // setInterval(() => console.log({ values: context?.getValues() }), 3000);
  }, []);

  return (
    <div className="range-container">
      <div className="mb-4">
        ({from} - {to})
      </div>
      <input
        {...registerFrom}
        type="range"
        min={min}
        max={max}
        defaultValue={min}
        onChange={(ev) => {
          registerFrom.onChange(ev);

          handleRangeChange(RANGE_MODIFIERS.FROM, +ev.currentTarget.value);
        }}
        className="range-input range-input--from"
      ></input>
      <input
        {...registerTo}
        type="range"
        min={min}
        max={max}
        defaultValue={max}
        onChange={(ev) => {
          registerTo.onChange(ev);

          handleRangeChange(RANGE_MODIFIERS.TO, +ev.currentTarget.value);
        }}
        ref={(r) => {
          registerTo.ref(r);

          (controlRangeRef as any).current = r;
        }}
        className="range-input"
      ></input>
    </div>
  );
};

export default Range;

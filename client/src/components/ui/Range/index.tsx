"use client";

import React, { FC, useEffect, useRef } from "react";

import "./style.scss";
import { RANGE_MODIFIERS } from "@/types/filters";

type Props = {
  max: number;
  min: number;
  from: number;
  to: number;
  onChange?: (nextValue: number[]) => void;
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
    ${"#3b82f6"} ${(fromPosition / rangeDistance) * 100}%,
    ${"#3b82f6"} ${(toPosition / rangeDistance) * 100}%, 
    ${"#e3e3e3"} ${(toPosition / rangeDistance) * 100}%, 
    ${"#e3e3e3"} 100%)
  `;
}

const Range: FC<Props> = ({ max, min, from, to, onChange }) => {
  const controlRangeRef = useRef<HTMLInputElement>(null);

  const handleRangeChange = (changed: RANGE_MODIFIERS, nextValue: number) => {
    let nextFrom = changed === RANGE_MODIFIERS.FROM ? nextValue : from;
    let nextTo = changed === RANGE_MODIFIERS.TO ? nextValue : to;

    if (onChange) onChange([nextFrom, nextTo]);
  };

  useEffect(() => {
    fillSlider(min, max, from, to, controlRangeRef);
  }, [from, to]);

  return (
    <div className="range-container">
      <div className="mb-4">
        ({from} - {to})
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={from}
        onChange={(ev) => {
          handleRangeChange(RANGE_MODIFIERS.FROM, +ev.currentTarget.value);
        }}
        className="range-input range-input--from"
      ></input>
      <input
        type="range"
        min={min}
        max={max}
        value={to}
        onChange={(ev) => {
          handleRangeChange(RANGE_MODIFIERS.TO, +ev.currentTarget.value);
        }}
        ref={controlRangeRef}
        className="range-input"
      ></input>
    </div>
  );
};

export default Range;

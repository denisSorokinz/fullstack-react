"use client";

import React, { FC, useEffect, useState } from "react";

import "./style.scss";

type Props = {
  to: number;
  from?: number;
};

const Range: FC<Props> = ({ to, from = 0 }) => {
  return (
    <div className="range-container">
      <input
        type="range"
        min={from}
        max={to}
        value={to * 0.1}
        className="range-input"
      ></input>
      <input
        type="range"
        min={from}
        max={to}
        value={to * 0.9}
        className="range-input range-input--from"
      ></input>
    </div>
  );
};

export default Range;

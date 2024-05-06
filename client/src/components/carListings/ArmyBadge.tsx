"use client";

import { ArmyScoreMeta, armyScoreGrade } from "@/types/listings";
import React, { FC, useState } from "react";
import { Button } from "../shadcn/button";
import { Helmet } from "../icons";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  armyScore: ArmyScoreMeta;
};
const ArmyBadge: FC<Props> = ({ armyScore }) => {
  const [isExpanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  const getMarkerBgClass = (grade: armyScoreGrade): Parameters<typeof cn> => [
    {
      "bg-green-400": grade === "good",
      "bg-yellow-600": grade === "okay",
      "bg-red-400": grade === "bad",
      "bg-slate-700": grade === "exclude",
    },
  ];

  return (
    <Button
      variant={"ghost"}
      className={
        "relative flex items-center gap-2 rounded-lg bg-amber-500 px-2 py-1 font-bold shadow-2xl shadow-black"
      }
      onClick={toggleExpanded}
    >
      <i>
        <Helmet width={16} height={16} />
      </i>
      <span>{armyScore.score}</span>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute right-[calc(100%_+_8px)] top-0 origin-top-right rounded-md bg-amber-400 p-2 transition-colors hover:bg-amber-500"
          >
            <ul className="flex list-none flex-col gap-2">
              <li className="flex items-center justify-between gap-2">
                <span>Ціна</span>
                <i
                  className={cn(
                    "h-4 w-4 rounded-full",
                    getMarkerBgClass(armyScore.price)
                  )}
                ></i>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>Пробіг</span>
                <i
                  className={cn(
                    "h-4 w-4 rounded-full",
                    getMarkerBgClass(armyScore.mileage)
                  )}
                ></i>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>Рік</span>
                <i
                  className={cn(
                    "h-4 w-4 rounded-full",
                    getMarkerBgClass(armyScore.year)
                  )}
                ></i>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>Кузов</span>
                <i
                  className={cn(
                    "h-4 w-4 rounded-full",
                    getMarkerBgClass(armyScore.bodyType)
                  )}
                ></i>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default ArmyBadge;

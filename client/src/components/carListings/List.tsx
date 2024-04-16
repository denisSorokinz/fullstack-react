"use client";

import { FC, useCallback, useState } from "react";
import CarListing from "@/components/carListings/CarListing";
import { type CarListing as CarListingType } from "@/types/listings";
import ViewSwitcher from "./ViewSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import FlipBox, { flipClassName } from "../FlipBox";
import { cn } from "@/lib/utils";
import { getArmyScore } from "@/lib";
import { Helmet, Pen } from "../icons";
import EditListing from "./EditListing";

export type ListViewType = "cards" | "list";

const CarListingList: FC<{
  listings: CarListingType[];
  allowEdit?: boolean;
}> = ({ listings, allowEdit }) => {
  // todo: optimistic listings state
  const [view, setView] = useState<ListViewType>("cards");

  const [editingId, setEditingId] = useState<CarListingType["id"] | null>(null);

  const handleFlip = (id: number) => {
    setEditingId((current) => (id !== current ? id : null));
  };

  const listingItem = useCallback(
    (listing: CarListingType) => {
      const armyScore = getArmyScore(listing);

      const badges = (
        <div className="badges absolute right-2 top-2 z-10 flex gap-2">
          {armyScore >= 3 && (
            <div
              className={
                "flex h-8 items-center gap-2 rounded-lg bg-amber-500 px-2 py-1 font-bold shadow-2xl shadow-black"
              }
            >
              <i>
                <Helmet width={16} height={16} />
              </i>
              <span>{armyScore}</span>
            </div>
          )}
          {allowEdit && (
            <div
              className={`${cn(
                "flex h-8 cursor-pointer items-center gap-2 rounded-lg bg-amber-300 px-2 py-1 font-bold shadow-2xl shadow-black",
                flipClassName
              )}`}
            >
              <i>
                <Pen width={20} height={20} />
              </i>
            </div>
          )}
        </div>
      );

      if (!allowEdit)
        return (
          <div className="relative h-full">
            {badges}
            <CarListing listing={listing} view={view} />
          </div>
        );

      return (
        <FlipBox
          isFlipped={editingId === listing.id}
          dispatchFlip={() => {
            console.log("[dispatch]", listing.id);

            handleFlip(listing.id);
          }}
          front={
            <div className="relative h-full">
              {badges}
              <CarListing listing={listing} view={view} />
            </div>
          }
          back={<EditListing listing={listing} />}
        />
      );
    },
    [editingId]
  );

  if (listings.length === 0)
    return <h3>Авто за вказаними критеріями не знайдено</h3>;

  return (
    <div className="flex flex-col gap-2">
      <ViewSwitcher view={view} setView={setView} />
      <AnimatePresence initial={false}>
        {view === "cards" && (
          <motion.ul
            key="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {listings.map((l) => (
              <li key={l.id}>{listingItem(l)}</li>
            ))}
          </motion.ul>
        )}
        {view === "list" && (
          <motion.ul
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            {listings.map((l) => (
              <li key={l.id}>{listingItem(l)}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarListingList;

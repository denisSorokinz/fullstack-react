"use client";

import { FC, useState } from "react";
import Image from "next/image";
import UsedCarQueryResult from "@/types/UsedCarQueryResult";
import CarListing from "@/components/carListings/ListItem";
import { type CarListing as CarListingType } from "@/types/listings";
import ViewSwitcher from "./ViewSwitcher";
import { motion, AnimatePresence } from "framer-motion";

export type ListViewType = "cards" | "list";

const CarListingList: FC<{ listings: CarListingType[] }> = ({ listings }) => {
  const [view, setView] = useState<ListViewType>("cards");

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
              <li key={l.id}>
                <CarListing listing={l} view={view} />
              </li>
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
              <li key={l.id}>
                <CarListing listing={l} view={view} />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarListingList;

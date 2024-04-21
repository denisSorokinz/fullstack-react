"use client";

import { FC, useState } from "react";
import { type CarListing as CarListingType } from "@/types/listings";
import ViewSwitcher from "./ViewSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { DashboardStoreState,  } from "@/stores/dashboard";
import EditableCarListing from "./EditableCarListing";
import { getArmyScore } from "@/lib";

export type ListViewType = "cards" | "list";

type Props = {
  listings: CarListingType[];
} & {
  allowEdit?: boolean;
  onToggleEditing?: DashboardStoreState["onToggleEditing"];
  onEdit?: (
    listing: Pick<CarListingType, "id"> & Partial<CarListingType>
  ) => void;
};
const CarListingList: FC<Props> = ({
  listings,
  allowEdit,
  onToggleEditing,
  onEdit,
}) => {
  const [view, setView] = useState<ListViewType>("cards");

  const [editingId, setEditingId] = useState<CarListingType["id"] | null>(null);

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
                <EditableCarListing
                  listing={l}
                  view={view}
                  armyScore={getArmyScore(l)}
                  allowEdit={allowEdit}
                  isEditing={editingId === l.id}
                  onToggleEditing={() => {
                    setEditingId((current) => (l.id !== current ? l.id : null));

                    onToggleEditing && onToggleEditing(l.brandId);
                  }}
                  onEdit={onEdit}
                />
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
                <EditableCarListing
                  listing={l}
                  view={view}
                  armyScore={getArmyScore(l)}
                  allowEdit={allowEdit}
                  isEditing={editingId === l.id}
                  onToggleEditing={() => {
                    setEditingId((current) => (l.id !== current ? l.id : null));

                    onToggleEditing && onToggleEditing(l.brandId);
                  }}
                  onEdit={onEdit}
                />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarListingList;

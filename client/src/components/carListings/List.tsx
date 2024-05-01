"use client";

import { FC, useEffect, useMemo, useState } from "react";
import { type CarListing as CarListingType } from "@/types/listings";
import ViewSwitcher from "./ViewSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { DashboardStoreState } from "@/stores/dashboard";
import EditableCarListing from "./EditableCarListing";
import { getArmyScore } from "@/lib";
import { useListingsStore } from "@/stores/listings";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

export type ListViewType = "cards" | "list";

type Props = {
  listings: CarListingType[];
  allowEdit?: boolean;
  editingId?: number | null;
  onToggleEditing?: DashboardStoreState["onToggleEditing"];
  onEdit?: (
    listing: Pick<CarListingType, "id"> & Partial<CarListingType>
  ) => void;
  onDelete?: (listingId: CarListingType["id"]) => void;
};
const CarListingList: FC<Props> = ({
  listings,
  allowEdit,
  editingId,
  onToggleEditing,
  onEdit,
  onDelete,
}) => {
  const {
    favoriteIds,
    view,
    pagination,
    onToggleFavorite,
    onChangePage,
    setListings,
    selectValue,
  } = useListingsStore((store) => store);

  if (listings.length === 0)
    return <h3>Авто за вказаними критеріями не знайдено</h3>;

  // todo: refactor
  // const listingsJsx = useMemo(
  //   () =>
  //     listings.map((l) => (
  //       <li key={l.id}>
  //         <EditableCarListing
  //           listing={l}
  //           view={view}
  //           isEditing={editingId === l.id}
  //           armyScore={getArmyScore(l)}
  //           allowEdit={allowEdit}
  //           onToggleEditing={() => {
  //             onToggleEditing && onToggleEditing(l);
  //           }}
  //           onEdit={onEdit}
  //         />
  //       </li>
  //     )),
  //   [listings, allowEdit, editingId]
  // );

  // todo: refactor
  return (
    <div className="flex flex-col gap-2">
      {/* <ViewSwitcher view={view} setView={setView} /> */}
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
                  isEditing={editingId === l.id}
                  isFavorited={favoriteIds?.includes(l.id)}
                  armyScore={getArmyScore(l)}
                  allowEdit={allowEdit}
                  onToggleEditing={() => {
                    onToggleEditing && onToggleEditing(l);
                  }}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onToggleFavorite={onToggleFavorite}
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
                  isEditing={editingId === l.id}
                  isFavorited={favoriteIds?.includes(l.id)}
                  armyScore={getArmyScore(l)}
                  allowEdit={allowEdit}
                  onToggleEditing={() => {
                    onToggleEditing && onToggleEditing(l);
                  }}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  onToggleFavorite={onToggleFavorite}
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

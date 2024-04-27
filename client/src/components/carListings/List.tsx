"use client";

import { FC, useMemo, useState } from "react";
import { type CarListing as CarListingType } from "@/types/listings";
import ViewSwitcher from "./ViewSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import { DashboardStoreState } from "@/stores/dashboard";
import EditableCarListing from "./EditableCarListing";
import { getArmyScore } from "@/lib";

export type ListViewType = "cards" | "list";

type Props = {
  listings: CarListingType[];
} & {
  allowEdit?: boolean;
  editingId?: number | null;
  onToggleEditing?: DashboardStoreState["onToggleEditing"];
  favoriteListingIds?: Array<CarListingType["id"]>;
  view?: ListViewType;
  onEdit?: (
    listing: Pick<CarListingType, "id"> & Partial<CarListingType>
  ) => void;
  onDelete?: (listingId: CarListingType["id"]) => void;
  onToggleFavorite?: (listingId: CarListingType["id"]) => void;
};
const CarListingList: FC<Props> = ({
  listings,
  favoriteListingIds,
  allowEdit,
  editingId,
  onToggleEditing,
  onEdit,
  onDelete,
  onToggleFavorite,
  view = 'cards'
}) => {
  // const [view, setView] = useState<ListViewType>("cards");
  console.log({ favoriteListingIds });

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
                  isFavorited={favoriteListingIds?.includes(l.id)}
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
                  isFavorited={favoriteListingIds?.includes(l.id)}
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

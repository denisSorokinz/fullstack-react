"use client";

import { FC, useCallback, useEffect, useState } from "react";
import CarListing from "@/components/carListings/CarListing";
import { type CarListing as CarListingType } from "@/types/listings";
import ViewSwitcher from "./ViewSwitcher";
import { motion, AnimatePresence } from "framer-motion";
import FlipBox, { flipClassName } from "../FlipBox";
import { cn } from "@/lib/utils";
import { fetchBrands, fetchModelsByBrand, getArmyScore } from "@/lib";
import { Helmet, Pen } from "../icons";
import { DashboardStoreState, useDashboardStore } from "@/stores/dashboard";
import EditableCarListing, { ListingEditProps } from "./EditableCarListing";

export type ListViewType = "cards" | "list";

type Props = {
  listings: CarListingType[];
} & (
  | {
      allowEdit?: false;
    }
  | {
      allowEdit?: true;
      editProps: {
        onToggleEditing: DashboardStoreState["onToggleEditing"];
        onEdit: (
          listing: Pick<CarListingType, "id"> & Partial<CarListingType>
        ) => void;
      };
    }
);
const CarListingList: FC<Props> = ({ listings, ...props }) => {
  // todo: optimistic listings state
  const [view, setView] = useState<ListViewType>("cards");

  const [editingId, setEditingId] = useState<CarListingType["id"] | null>(null);

  const carListing = (listing: CarListingType) => {
    let editProps = { allowEdit: false } as ListingEditProps;
    if (props.allowEdit) {
      editProps = {
        allowEdit: true,
        isEditing: editingId === listing.id,
        onToggleEditing: () => {
          setEditingId((current) =>
            listing.id !== current ? listing.id : null
          );

          props.editProps.onToggleEditing(listing.brandId);
        },
        onEdit: props.editProps.onEdit,
      };
    }

    return (
      <EditableCarListing
        listing={listing}
        view={view}
        armyScore={getArmyScore(listing)}
        {...editProps}
      />
    );
  };

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
              <li key={l.id}>{carListing(l)}</li>
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
              <li key={l.id}>{carListing(l)}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarListingList;

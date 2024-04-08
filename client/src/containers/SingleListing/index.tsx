"use client";

import { FC } from "react";
import { CarListingExpanded } from "@/types/listings";
import { Mileage } from "@/components/icons";
import Gallery from "@/components/Gallery";
import { MODAL_TYPES, useModalsStore } from "@/stores/modals";

type Props = {
  listing: CarListingExpanded;
};

const SingleListing: FC<Props> = ({ listing }) => {
  const slides = listing.images.map((img, idx) => ({ img, id: idx }));

  const openModal = useModalsStore((state) => state.openModal);
  const handleSlideClick = (slideIdx: number) =>
    openModal({
      type: MODAL_TYPES.GALLERY,
      initialProps: { activeSlide: slideIdx, slides },
    });

  return (
    <div className="container grid grid-cols-2 gap-4">
      <div>
        <Gallery slides={slides} onSlideClick={handleSlideClick} />
      </div>
      <div className="prose flex flex-col gap-1">
        <h1 className="mb-2 text-3xl">
          {listing.brand} {listing.model} ({listing.year})
        </h1>
        <strong className="block text-xl font-bold text-green-500">
          ${listing.price}
        </strong>
        <div className="flex items-center gap-1">
          <Mileage width={16} height={16} fill="#ababab" />
          <span className="text-sm">{listing.mileage} т. км.</span>
        </div>
        <p className="mt-1">{listing.description}</p>
      </div>
    </div>
  );
};

export default SingleListing;

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { CarListing } from "../types/listings";

const CarListing: FC<{ listing: CarListing }> = ({ listing }) => {
  const title = `${listing.brand} ${listing.model}`;

  return (
    <Link href={`/listing/${listing.slug}`}>
      <div className="w-80 h-56 relative">
        <Image src={listing.thumbnailUrl} alt={title} fill={true} className="object-cover" />
      </div>
      <h2>{title}</h2>
      <h3>${listing.priceUsd}</h3>
    </Link>
  );
};

export default CarListing;

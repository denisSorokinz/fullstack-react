import { FC } from "react";
import Image from "next/image"
import UsedCarQueryResult from "../types/UsedCarQueryResult";
import CarListing from "./CarListing";
import { type CarListing as CarListingType } from "../types/listings";

const CarListingList: FC<{ listings: CarListingType[] }> = ({ listings }) => {
  console.log({ listings })
  return (
    <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {listings.map((l) => (
        <li key={l.id}>
          <CarListing listing={l} />
        </li>
      ))}
    </ul>
  );
};

export default CarListingList;

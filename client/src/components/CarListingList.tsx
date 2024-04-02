import { FC } from "react";
import Image from "next/image"
import UsedCarQueryResult from "../types/UsedCarQueryResult";
import CarListing from "./CarListing";
import { type CarListing as CarListingType } from "../types/listings";

const CarListingList: FC<{ listings: CarListingType[] }> = ({ listings }) => {
  console.log({ listingsSize: listings.length })

  if(listings.length === 0) return <h3>Авто за вказаними критеріями не знайдено</h3>

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

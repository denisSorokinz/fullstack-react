import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { CarListing as CarListingType } from "@/types/listings";
import { Mileage, Helmet, Pen } from "@/components/icons";
import { ListViewType } from "@/components/carListings/List";
import RenderOnMount from "@/components/RenderOnMount";
import { getArmyScore } from "@/lib";
import CardBadgeList from "./CardBadge";
import FlipBox, { flipClassName } from "../FlipBox";
import { cn } from "@/lib/utils";

type Props = {
  listing: CarListingType;
  view: ListViewType;
  allowEdit?: boolean;
};
const CarListing: FC<Props> = ({ listing, view, allowEdit = false }) => {
  const title = `${listing.brand} ${listing.model}`;

  const armyScore = getArmyScore(listing);

  // const badges = (
  //   <div className="absolute right-2 top-2 flex gap-2">
  //     {armyScore >= 3 && (
  //       <div
  //         className={
  //           "flex h-8 items-center gap-2 rounded-lg bg-amber-500 px-2 py-1 font-bold shadow-2xl shadow-black"
  //         }
  //       >
  //         <i>
  //           <Helmet width={16} height={16} />
  //         </i>
  //         <span>{armyScore}</span>
  //       </div>
  //     )}
  //     {allowEdit && (
  //       <div
  //         className={`${cn(
  //           "flex h-8 cursor-pointer items-center gap-2 rounded-lg bg-amber-300 px-2 py-1 font-bold shadow-2xl shadow-black",
  //           flipClassName
  //         )}`}
  //       >
  //         <i>
  //           <Pen width={20} height={20} />
  //         </i>
  //       </div>
  //     )}
  //   </div>
  // );

  let content;

  if (view === "cards")
    content = (
      <div className="flex h-full flex-col overflow-hidden rounded-md bg-slate-200 transition hover:bg-slate-300 hover:shadow-xl prose-a:no-underline">
        <Link
          prefetch={false}
          href={`/listing/${listing.id}`}
          className="prose prose-sm relative flex h-full flex-col"
        >
        <div className="relative h-60 w-full">
          <Image
            src={listing.thumbnailUrl}
            alt={title}
            fill={true}
            className="object-cover"
            style={{ margin: 0 }}
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-4 duration-300">
          <h2 className="mb-8 mt-0 text-slate-700">
            {title} ({listing.year})
          </h2>
          <div className="flex flex-wrap items-center justify-between">
            <span className="flex items-center gap-2 text-lg">
              <i>
                <Mileage width={20} height={20} />
              </i>
              {listing.mileage} т.км.
            </span>
            <span className="mb-0 text-lg text-green-600">
              ${listing.price}
            </span>
          </div>
        </div>
        </Link>
      </div>
    );

  if (view === "list")
    content = (
      <div className="h-full overflow-hidden rounded-md bg-slate-200 shadow-lg transition hover:bg-slate-300 hover:shadow-xl prose-a:no-underline">
        <Link
          prefetch={false}
          href={`/listing/${listing.slug}`}
          className="relative flex h-full w-full"
        >
          <div className="relative h-60 flex-1">
            <Image
              src={listing.thumbnailUrl}
              alt={title}
              fill={true}
              className="object-cover"
              style={{ margin: 0 }}
            />
          </div>
          <div className="prose prose-sm flex max-w-none flex-1 flex-shrink flex-grow-[3] flex-col justify-between p-4 duration-300">
            <h2 className="mb-8 mt-0 text-xl text-slate-600">
              {title} ({listing.year})
            </h2>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-lg">
                <i>
                  <Mileage width={20} height={20} />
                </i>
                {listing.mileage} т.км.
              </span>
              <div className="flex items-end justify-between">
                <span className="mb-0 text-lg text-green-600">
                  ${listing.price}
                </span>
                <RenderOnMount
                  render={() => (
                    <span className="mb-0 text-slate-400">
                      {new Date(listing.createdAt).toLocaleDateString()}
                    </span>
                  )}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    );

  return content;
};

export default CarListing;

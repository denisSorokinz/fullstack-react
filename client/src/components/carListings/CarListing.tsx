import React, { FC, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { CarListing as CarListingType } from "@/types/listings";
import { Mileage, Helmet, Pen, Heart } from "@/components/icons";
import { ListViewType } from "@/components/carListings/List";
import RenderOnMount from "@/components/RenderOnMount";
import { getArmyScore } from "@/lib";
import CardBadgeList from "./CardBadge";
import FlipBox, { flipClassName } from "../FlipBox";
import { cn } from "@/lib/utils";

export type CarListingProps = {
  listing: CarListingType;
  view: ListViewType;
  armyScore?: number;
  isFavorited?: boolean;
  onToggleFavorite?: (listingId: CarListingType["id"]) => void;
};
const CarListing: FC<CarListingProps> = ({
  listing,
  view,
  armyScore = 0,
  isFavorited,
  onToggleFavorite,
}) => {
  const title = `${listing.brand} ${listing.model}`;

  let content;

  const armyBadge = armyScore >= 3 && (
    <div
      className={
        "flex items-center gap-2 rounded-lg bg-amber-500 px-2 py-1 font-bold shadow-2xl shadow-black"
      }
    >
      <i>
        <Helmet width={16} height={16} />
      </i>
      <span>{armyScore}</span>
    </div>
  );

  if (view === "cards")
    content = (
      <div className="group/card relative flex h-full flex-col overflow-hidden rounded-md bg-slate-200 transition hover:bg-slate-300 hover:shadow-xl prose-a:no-underline">
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
        <div className="absolute right-2 top-2 flex h-8 items-center gap-2">
          {armyBadge}
          {onToggleFavorite && (
            <button
              className={cn(
                "group/heart cursor-pointer rounded-lg bg-slate-100 p-1 transition-colors hover:bg-slate-200",
                { "bg-red-500 hover:bg-red-600": isFavorited }
              )}
              onClick={() => onToggleFavorite(listing.id)}
            >
              <i>
                <Heart
                  width={22}
                  height={22}
                  className={cn(
                    "text-red-500 transition-colors group-hover/heart:text-red-600",
                    {
                      "text-slate-100 group-hover/heart:text-slate-200":
                        isFavorited,
                    }
                  )}
                />
              </i>
            </button>
          )}
        </div>
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

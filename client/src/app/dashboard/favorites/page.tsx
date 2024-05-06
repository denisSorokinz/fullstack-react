"use client";

import CarListingList from "@/components/carListings/List";
import { ENDPOINTS } from "@/constants";
import useBatchFetcher from "@/hooks/useBatchFetcher";
import { useListingsStore } from "@/stores/listings";
import { CarApiResponse, CarApiOperations } from "@/types/http";
import { CarListingExpanded } from "@/types/listings";
import { useMemo } from "react";

function FavoritesPage() {
  const { favoriteIds } = useListingsStore((store) => store);

  const favoritesEndpoints = useMemo(() => {
    console.log("[refresh endpoints]");

    return favoriteIds.map((id) => `${ENDPOINTS.CARS_API}/listings/${id}`);
  }, [favoriteIds]);
  const [loading, responses] =
    useBatchFetcher<CarApiResponse<CarApiOperations.getListing>>(
      favoritesEndpoints
    );
  const favorites = responses
    .map((res) => res.success && res.data[CarApiOperations.getListing])
    .filter(Boolean) as CarListingExpanded[];

  return (
    <div className="flex-1">
      <CarListingList listings={favorites} />
    </div>
  );
}

export default FavoritesPage;

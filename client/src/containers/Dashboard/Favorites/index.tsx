"use client";

import CarListingList from "@/components/carListings/List";
import { ENDPOINTS } from "@/constants";
import useBatchFetcher from "@/hooks/useBatchFetcher";
import { toggleListingFavorites } from "@/lib/actions";
import { useDashboardStore } from "@/stores/dashboard";
import { CarApiResponse, CarApiOperations } from "@/types/http";
import { CarListingExpanded } from "@/types/listings";
import { useMemo } from "react";

const FavoritesContent = () => {
  const { favoriteListingIds, setFavoriteIDs, selectValue } = useDashboardStore(
    (store) => ({
      favoriteListingIds: store.favoriteListingIds,
      selectValue: store.selectValue,
      setFavoriteIDs: store.setFavorites,
    })
  );

  const favoritesEndpoints = useMemo(() => {
    console.log("[refresh endpoints]");

    return favoriteListingIds.map(
      (id) => `${ENDPOINTS.CARS_API}/listings/${id}`
    );
  }, [favoriteListingIds]);
  const [loading, responses] =
    useBatchFetcher<CarApiResponse<CarApiOperations.getListing>>(
      favoritesEndpoints
    );
  const favorites = responses
    .map((res) => res.success && res.data[CarApiOperations.getListing])
    .filter(Boolean) as CarListingExpanded[];
  console.log({ favorites });

  const handleToggleFavorite = async (listingId: number) => {
    const { success, message, data } = await toggleListingFavorites(listingId);

    if (!(success && data)) {
      console.log("[toggleFavorite failed]:", message);
      return;
    }

    const nextFavorites = selectValue("favoriteListingIds").filter(
      (id) => id !== listingId
    );
    if (data.isFavorited) nextFavorites.push(listingId);

    setFavoriteIDs(nextFavorites);
  };

  return (
    <CarListingList
      listings={favorites}
      view="list"
      favoriteListingIds={favoriteListingIds}
      onToggleFavorite={handleToggleFavorite}
    />
  );
};

export default FavoritesContent;

import { FormEvent, Suspense } from "react";
import DashboardContent from "@/containers/Dashboard";
// import protectedRoute from "@/components/protectedRoute";
import ProtectedRouteCmp from "@/components/ProtectedRouteCmp";
import { fetchBrands, fetchCarListings, fetchFilters } from "@/lib";
import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/forms/SearchForm";
import { getDefaultFilters } from "@/lib/filters";
import { FILTER_NAMES } from "@/constants";
import {
  DashboardProvider,
  DashboardProviderProps,
} from "@/contexts/dashboard";
import { ISelectFilter } from "@/types/filters";
import { getFavorites } from "@/lib/actions";

const DashboardPage = async () => {
  const filterData = await fetchFilters();
  const listings = (await fetchCarListings()) || [];
  const favoritesRes = await getFavorites();

  const filters = getDefaultFilters(filterData!);

  const brands = (await fetchBrands()) || [];

  const initProps: DashboardProviderProps["initProps"] = {
    listings,
    filterData,
    brands,
  };
  if (favoritesRes.success)
    initProps.favoriteListingIds = favoritesRes.favorites;

  return (
    <ProtectedRouteCmp>
      <DashboardProvider initProps={initProps}>
        <DashboardContent initialFilters={filters} />
      </DashboardProvider>
    </ProtectedRouteCmp>
  );

  // return (
  //   <Suspense fallback={<h1>Loading dashboard content...</h1>}>
  //     <DashboardContent />
  //   </Suspense>
  // );
};

export default DashboardPage;

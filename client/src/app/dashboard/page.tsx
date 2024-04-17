import { FormEvent, Suspense } from "react";
import DashboardContent from "@/containers/Dashboard";
// import protectedRoute from "@/components/protectedRoute";
import ProtectedRouteCmp from "@/components/ProtectedRouteCmp";
import { fetchBrands, fetchCarListings, fetchFilters } from "@/lib";
import CarListingList from "@/components/carListings/List";
import SearchForm from "@/components/forms/SearchForm";
import { getDefaultFilters } from "@/lib/filters";
import { FILTER_NAMES } from "@/constants";
import { DashboardProvider } from "@/contexts/dashboard";
import { ISelectFilter } from "@/types/filters";

const DashboardPage = async () => {
  const filterData = await fetchFilters();
  const listings = (await fetchCarListings()) || [];

  const filters = getDefaultFilters(filterData!);

  const brands = (await fetchBrands()) || [];

  return (
    <ProtectedRouteCmp>
      <DashboardProvider
        initProps={{
          listings,
          filterData,
          brands,
        }}
      >
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

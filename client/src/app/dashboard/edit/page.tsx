import { FormEvent, Suspense } from "react";
import DashboardContent from "@/containers/Dashboard";
// import protectedRoute from "@/components/protectedRoute";
import ProtectedRoute from "@/components/ProtectedRoute";
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
import { getFavorites, isAuthorizedFor } from "@/lib/actions";
import { cookies } from "next/headers";

async function EditListingsPage() {
  // const { isAuthorized: canView, message } = await isAuthorizedFor({
  //   action: "view:page",
  //   payload: "/dashboard/edit",
  // });

  // if (!canView) return <h1>{message || "No sufficient permissions"}</h1>;

  const filterData = await fetchFilters();
  const filters = getDefaultFilters(filterData!);

  return (
    <ProtectedRoute path="/dashboard/edit">
      <DashboardContent initialFilters={filters} />
    </ProtectedRoute>
  );

  // return (
  //   <Suspense fallback={<h1>Loading dashboard content...</h1>}>
  //     <DashboardContent />
  //   </Suspense>
  // );
}

export default EditListingsPage;

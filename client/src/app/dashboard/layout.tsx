import ProtectedRoute from "@/components/ProtectedRoute";
import {
  DashboardProvider,
  DashboardProviderProps,
} from "@/contexts/dashboard";
import { fetchBrands, fetchCarListings, fetchFilters } from "@/lib";
import { getFavorites, isAuthorizedFor } from "@/lib/actions";
import Link from "next/link";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const filterData = await fetchFilters();
  const listings = (await fetchCarListings()) || [];
  const favoritesRes = await getFavorites();

  const brands = (await fetchBrands()) || [];

  const initProps: DashboardProviderProps["initProps"] = {
    listings,
    filterData,
    brands,
  };
  if (favoritesRes.success)
    initProps.favoriteListingIds = favoritesRes.favorites;

  // const canViewEditListings = isAuthorizedFor({
  //   action: "view:page",
  //   payload: "/dashboard/edit",
  // });

  return (
    <ProtectedRoute path="/dashboard/*">
      <DashboardProvider initProps={initProps}>
        <div className="flex min-h-screen w-full gap-8">
          <aside className="w-1/4 rounded-md bg-slate-300 p-4 dark:bg-slate-500">
            <ul className="space-y-4">
              {true && (
                <li>
                  <Link
                    href={"/dashboard/edit"}
                    className="block w-full rounded-md bg-slate-500 p-2 text-center text-xl text-slate-100 transition-colors hover:bg-slate-600"
                  >
                    Edit Listings
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href={"/dashboard/favorites"}
                  className="block w-full rounded-md bg-slate-500 p-2 text-center text-xl text-slate-100 transition-colors hover:bg-slate-600"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </aside>
          {children}
        </div>
      </DashboardProvider>
    </ProtectedRoute>
  );
}

export default DashboardLayout;

import ProtectedRoute from "@/components/ProtectedRoute";
import { BASE_NEXT_URL } from "@/constants";
import {
  DashboardProvider,
  DashboardProviderProps,
} from "@/contexts/dashboard";
import { ListingsProvider } from "@/contexts/listings";
import { fetchBrands, fetchCarListings, fetchFilters } from "@/lib";
import { getAuthorizedResource } from "@/lib/actions";
import { ListingsStoreState } from "@/stores/listings";
import { CarApiOperations } from "@/types/http";
import { CarListing } from "@/types/listings";
import Link from "next/link";

async function DashboardLayout({ children }: { children: React.ReactNode }) {
  console.log("[dashboard layout]");

  const filterData = await fetchFilters();
  // const { listings, pagination } = (await fetchCarListings())!;

  const brands = (await fetchBrands()) || [];

  // const listingsStoreInitProps: Partial<ListingsStoreState> = {
  //   listings,
  // };

  const favoritesRes = await getAuthorizedResource<{
    favorites: Array<CarListing["id"]>;
  }>(`${BASE_NEXT_URL}/users/favorites`);
  // if (favoritesRes.success) {
  //   listingsStoreInitProps.favoriteIds = favoritesRes.data!.favorites;
  // }

  // const canViewEditListings = isAuthorizedFor({
  //   action: "view:page",
  //   payload: "/dashboard/edit",
  // });

  // todo: zustand store should be initialized as didInit flag, fetch all resources on client

  return (
    <ProtectedRoute path="/dashboard/*">
      <DashboardProvider initProps={{ filterData, brands }}>
        <ListingsProvider>
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
        </ListingsProvider>
      </DashboardProvider>
    </ProtectedRoute>
  );
}

export default DashboardLayout;

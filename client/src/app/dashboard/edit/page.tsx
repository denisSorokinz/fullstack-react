import DashboardContent from "@/containers/Dashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import { fetchFilters } from "@/lib";
import { getDefaultFilters } from "@/lib/filters";

async function EditListingsPage() {
  console.log('[edit listings page]');
  

  const filterData = await fetchFilters();
  const filters = getDefaultFilters(filterData!);

  return (
    <ProtectedRoute path="/dashboard/edit">
      <DashboardContent initialFilters={filters} />
    </ProtectedRoute>
  );
}

export default EditListingsPage;

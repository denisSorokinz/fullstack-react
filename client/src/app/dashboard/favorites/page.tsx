import { isAuthorizedFor } from "@/lib/actions";
import FavoritesContent from "@/containers/Dashboard/Favorites";

function FavoritesPage() {
  return (
    <div className="flex-1">
      <FavoritesContent />
    </div>
  );
}

export default FavoritesPage;

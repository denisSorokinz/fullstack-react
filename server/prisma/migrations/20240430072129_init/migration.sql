-- DropForeignKey
ALTER TABLE "FavoriteListing" DROP CONSTRAINT "FavoriteListing_listingId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteListing" DROP CONSTRAINT "FavoriteListing_userId_fkey";

-- AddForeignKey
ALTER TABLE "FavoriteListing" ADD CONSTRAINT "FavoriteListing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteListing" ADD CONSTRAINT "FavoriteListing_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

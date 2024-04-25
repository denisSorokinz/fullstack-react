/*
  Warnings:

  - The primary key for the `FavoriteListing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `slug` on the `FavoriteListing` table. All the data in the column will be lost.
  - Added the required column `userId` to the `FavoriteListing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "FavoriteListing" DROP CONSTRAINT "FavoriteListing_listingId_fkey";

-- AlterTable
ALTER TABLE "FavoriteListing" DROP CONSTRAINT "FavoriteListing_pkey",
DROP COLUMN "slug",
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "listingId" DROP DEFAULT,
ADD CONSTRAINT "FavoriteListing_pkey" PRIMARY KEY ("userId", "listingId");
DROP SEQUENCE "FavoriteListing_listingId_seq";

-- AddForeignKey
ALTER TABLE "FavoriteListing" ADD CONSTRAINT "FavoriteListing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteListing" ADD CONSTRAINT "FavoriteListing_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

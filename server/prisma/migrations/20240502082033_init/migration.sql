-- CreateEnum
CREATE TYPE "BodyTypes" AS ENUM ('SUV', 'OTHER');

-- AlterTable
ALTER TABLE "Listing" ADD COLUMN     "bodyType" "BodyTypes" NOT NULL DEFAULT 'OTHER';

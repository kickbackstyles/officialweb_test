/*
  Warnings:

  - You are about to drop the column `itemId` on the `Image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Color" DROP CONSTRAINT "Color_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_itemId_fkey";

-- DropForeignKey
ALTER TABLE "Size" DROP CONSTRAINT "Size_itemId_fkey";

-- AlterTable
ALTER TABLE "Color" ALTER COLUMN "itemId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Image" DROP COLUMN "itemId",
ADD COLUMN     "colorId" INTEGER;

-- AlterTable
ALTER TABLE "Size" ALTER COLUMN "itemId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "itemId" INTEGER,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Color" ADD CONSTRAINT "Color_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Size" ADD CONSTRAINT "Size_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

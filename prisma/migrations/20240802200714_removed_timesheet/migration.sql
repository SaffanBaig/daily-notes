/*
  Warnings:

  - You are about to drop the column `noteTimeSheetId` on the `note` table. All the data in the column will be lost.
  - You are about to drop the `note_timsheets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "note" DROP CONSTRAINT "note_noteTimeSheetId_fkey";

-- DropForeignKey
ALTER TABLE "note_timsheets" DROP CONSTRAINT "note_timsheets_userId_fkey";

-- AlterTable
ALTER TABLE "note" DROP COLUMN "noteTimeSheetId",
ADD COLUMN     "userId" TEXT;

-- DropTable
DROP TABLE "note_timsheets";

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

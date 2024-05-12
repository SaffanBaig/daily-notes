/*
  Warnings:

  - Added the required column `userId` to the `note_timsheets` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "note_timsheets" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "note_timsheets" ADD CONSTRAINT "note_timsheets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `NoteTimeSheet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "note" DROP CONSTRAINT "note_noteTimeSheetId_fkey";

-- DropTable
DROP TABLE "NoteTimeSheet";

-- CreateTable
CREATE TABLE "note_timsheets" (
    "id" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "note_timsheets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "note_timsheets_date_created_key" ON "note_timsheets"("date_created");

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_noteTimeSheetId_fkey" FOREIGN KEY ("noteTimeSheetId") REFERENCES "note_timsheets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

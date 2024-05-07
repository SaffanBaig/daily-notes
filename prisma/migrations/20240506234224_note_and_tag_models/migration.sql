-- CreateTable
CREATE TABLE "NoteTimeSheet" (
    "id" TEXT NOT NULL,
    "date_created" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NoteTimeSheet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "note" (
    "id" TEXT NOT NULL,
    "noteTimeSheetId" TEXT,
    "text" TEXT NOT NULL,

    CONSTRAINT "note_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "noteId" TEXT,
    "tag" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NoteTimeSheet_date_created_key" ON "NoteTimeSheet"("date_created");

-- AddForeignKey
ALTER TABLE "note" ADD CONSTRAINT "note_noteTimeSheetId_fkey" FOREIGN KEY ("noteTimeSheetId") REFERENCES "NoteTimeSheet"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_noteId_fkey" FOREIGN KEY ("noteId") REFERENCES "note"("id") ON DELETE SET NULL ON UPDATE CASCADE;

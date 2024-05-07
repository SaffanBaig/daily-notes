-- AlterTable
ALTER TABLE "note" ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'Untitled',
ALTER COLUMN "text" DROP NOT NULL;

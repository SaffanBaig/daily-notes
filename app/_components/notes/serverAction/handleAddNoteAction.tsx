"use server";
import prisma from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/session";
import { revalidatePath } from "next/cache";

export async function handleAddNoteAction() {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;
  let existingDate = await prisma.noteTimeSheet.findUnique({
    where: {
      dateCreated: new Date().toDateString(),
      userId: currentUser?.id,
    },
  });
  if (!existingDate) {
    existingDate = await prisma.noteTimeSheet.create({
      data: {
        dateCreated: new Date().toDateString(),
        userId: currentUser?.id,
      },
    });
  }

  await prisma.note.create({
    data: {
      noteTimeSheetId: existingDate.id,
      title: "Untitled",
    },
  });
  revalidatePath("/");
}

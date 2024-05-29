"use server";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/session";
import { revalidatePath } from "next/cache";

export async function handleDeleteNoteAction(noteId: string) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;

  await prisma.note.delete({
    where: {
      id: noteId,
    },
  });
  revalidatePath("/");
}

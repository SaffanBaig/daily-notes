"use server";
import prisma from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/session";
import { revalidatePath } from "next/cache";

export async function handleAddNoteAction() {
  console.log("ADD NOTE");
  const currentUser = await getCurrentUser();
  if (!currentUser) return;

  await prisma.note.create({
    data: {
      title: "Untitled",
      userId: currentUser?.id,
    },
  });
  revalidatePath("/");
}

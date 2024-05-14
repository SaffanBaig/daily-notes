"use server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function handleTitleUpdateAction(id: string, title: string) {
  await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/notes/${id}/title`, {
    method: "PUT",
    body: JSON.stringify({ title }),
  });
  revalidatePath("/");
}

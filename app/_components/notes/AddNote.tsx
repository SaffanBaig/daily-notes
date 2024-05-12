import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AddNoteButton from "./AddNoteButton";
import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/session";

const AddNote = async () => {
  const handleAddNote = async () => {
    "use server";
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
        text: "Untitled",
      },
    });
    revalidatePath("/dashboard");
  };
  return (
    <div className="w-full">
      <AddNoteButton handleAddNote={handleAddNote} />
      <hr />
    </div>
  );
};

export default AddNote;

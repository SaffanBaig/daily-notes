import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AddNoteButton from "./AddNoteButton";
import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";

const AddNote = async () => {
  const handleAddNote = async () => {
    "use server";
    console.log("Adding Note");
    let existingDate = await prisma.noteTimeSheet.findUnique({
      where: { dateCreated: new Date().toDateString() },
    });
    if (!existingDate) {
      existingDate = await prisma.noteTimeSheet.create({
        data: {
          dateCreated: new Date().toDateString(),
        },
      });
    }

    const note = await prisma.note.create({
      data: {
        noteTimeSheetId: existingDate.id,
        text: "",
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

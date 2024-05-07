import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AddNoteButton from "./AddNoteButton";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const AddNote = async () => {
  const handleAddNote = async () => {
    "use server";
    console.log("Adding Note");
    const prisma = new PrismaClient();
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

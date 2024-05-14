import AddNoteButton from "./AddNoteButton";
import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/session";
import { handleAddNoteAction } from "./serverAction/handleAddNoteAction";

const AddNote = async () => {
  return (
    <div className="w-full">
      <AddNoteButton />
      <hr />
    </div>
  );
};

export default AddNote;

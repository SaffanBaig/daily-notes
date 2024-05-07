import { Note, PrismaClient } from "@prisma/client";
import { Edit, Pencil } from "lucide-react";
import React from "react";
import List from "./list";

const NotesList = async () => {
  const getCurrentDateNotes = async (): Promise<Array<Note>> => {
    const date = new Date();
    const prisma = new PrismaClient();
    const noteTimesheet = await prisma.noteTimeSheet.findFirst({
      where: {
        dateCreated: date.toDateString(),
      },
      include: {
        notes: true,
      },
    });
    let noteTimeSheet: Array<Note> = [];
    if (noteTimesheet) {
      noteTimeSheet = noteTimesheet.notes;
    }
    return noteTimeSheet;
  };
  const notes = await getCurrentDateNotes();

  return (
    <div>
      <List notes={notes} />
    </div>
  );
};

export default NotesList;

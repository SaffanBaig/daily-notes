import React from "react";
import { getCurrentUser } from "@/app/lib/session";
import Item from "./item";
import { Note } from "@prisma/client";
import prisma from "@/app/lib/prisma";

interface NotesListProps {
  date: string;
}
const NotesList = async ({ date }: NotesListProps) => {
  const currentUser = await getCurrentUser();
  const noteTimeSheet = await prisma.noteTimeSheet.findFirst({
    where: {
      dateCreated: decodeURIComponent(date),
      userId: currentUser?.id,
    },
  });
  let notes: Note[] = [];
  if (noteTimeSheet) {
    notes = await prisma.note.findMany({
      where: {
        noteTimeSheetId: noteTimeSheet?.id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  return (
    <div>
      {notes && notes.map((note) => <Item key={note.id} note={note} />)}
    </div>
  );
};

export default NotesList;

import React, { useEffect, useState } from "react";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/session";
import Item from "./item";

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
    include: {
      notes: true,
    },
  });
  const notes = noteTimeSheet?.notes || [];

  return (
    <div>
      {notes.map((note) => (
        <Item key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;

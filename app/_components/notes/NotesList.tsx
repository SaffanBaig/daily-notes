import React from "react";
import { getCurrentUser } from "@/app/lib/session";
import Item from "./item";
import { Note } from "@prisma/client";
import prisma from "@/app/lib/prisma";

const NotesList = async () => {
  const currentUser = await getCurrentUser();

  const notes: Note[] = await prisma.note.findMany({
    where: {
      userId: currentUser?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      {notes && notes.map((note) => <Item key={note.id} note={note} />)}
    </div>
  );
};

export default NotesList;

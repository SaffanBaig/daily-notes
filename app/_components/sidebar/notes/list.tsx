import { Note } from "@prisma/client";
import { EllipsisVertical, Option, OptionIcon, Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

interface NotesListProps {
  notes: Note[];
}

const List = ({ notes }: NotesListProps) => {
  return (
    <div>
      {notes.map((note) => (
        <Link
          href={{ pathname: "/dashboard", query: { noteId: note.id } }}
          className="h-10 w-full bg-white rounded-md flex px-4 items-center justify-between my-2"
          key={note.id}
        >
          <p className="">{note.title}</p>
          <EllipsisVertical />
        </Link>
      ))}
    </div>
  );
};

export default List;

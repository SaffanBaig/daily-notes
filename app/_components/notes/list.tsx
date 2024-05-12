"use client";
import { Note } from "@prisma/client";
import { EllipsisVertical, Option, OptionIcon, Pencil } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface NotesListProps {
  notes: Note[];
}

const List = ({ notes }: NotesListProps) => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  return (
    <div>
      {notes.map((note) => (
        <Link
          href={{ pathname: `/dashboard/${note.id}`, query: { date: date } }}
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

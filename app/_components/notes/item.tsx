"use client";
import { cn } from "@/lib/utils";
import { Note } from "@prisma/client";
import { EllipsisVertical, Option, OptionIcon, Pencil } from "lucide-react";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import Dropdown from "./dropdown";

interface ItemProps {
  note: Note;
}

const Item = ({ note }: ItemProps) => {
  const router = useRouter();

  const [selectedNoteId, setSelectedNoteId] = useState<string>();

  const handleNoteSelect = (id: string) => {
    router.push(`/${id}`);
    // router.refresh();
  };
  return (
    <div>
      <div
        className={cn(
          "h-10 w-full bg-white rounded-md flex px-4 items-center justify-between my-2 cursor-pointer",
          {
            "bg-blue-500 text-white": selectedNoteId === note.id,
          }
        )}
        key={note.id}
        onClick={() => handleNoteSelect(note.id)}
      >
        <p className="">{note.title}</p>
        <Dropdown noteId={note.id} />
      </div>
    </div>
  );
};

export default Item;

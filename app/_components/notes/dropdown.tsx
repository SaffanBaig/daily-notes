"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import React from "react";
import { handleDeleteNoteAction } from "./serverAction/handleDeleteNoteAction";

interface DropdownProps {
  noteId: string;
}
const Dropdown = ({ noteId }: DropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-8 w-4 p-0">
        <EllipsisVertical className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent onClick={(e) => e.stopPropagation()}>
        <DropdownMenuItem
          onClick={async () => await handleDeleteNoteAction(noteId)}
        >
          Delete
        </DropdownMenuItem>
        <DropdownMenuItem>Rename</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;

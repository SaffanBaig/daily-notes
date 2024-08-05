"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import React, { useState } from "react";
import { handleDeleteNoteAction } from "./serverAction/handleDeleteNoteAction";
import RenameTitleDialog from "../rename-dialog";
import Loader from "../Loader";
import { useParams, useRouter } from "next/navigation";

interface DropdownProps {
  noteId: string;
}
const Dropdown = ({ noteId }: DropdownProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const router = useRouter();
  const handleDeleteNote = async (noteId: string) => {
    setIsLoading(true);
    await handleDeleteNoteAction(noteId);
    if (params.id == noteId) {
      router.push("/note");
    }
    setIsLoading(false);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-8 w-4 p-0">
        <EllipsisVertical className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent onClick={(e) => e.stopPropagation()}>
        <DropdownMenuItem onClick={async () => await handleDeleteNote(noteId)}>
          {isLoading ? <Loader /> : "Delete"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;

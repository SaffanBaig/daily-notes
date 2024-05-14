"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";
import { handleAddNoteAction } from "./serverAction/handleAddNoteAction";

const AddNoteButton = () => {
  return (
    <Button
      variant={"secondary"}
      className="w-full my-4"
      onClick={async () => await handleAddNoteAction()}
    >
      <PlusIcon className="mr-2 h-4 w-4" /> Add Note
    </Button>
  );
};

export default AddNoteButton;

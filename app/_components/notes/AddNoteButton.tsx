"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";
import { handleAddNoteAction } from "./serverAction/handleAddNoteAction";
import { useSearchParams } from "next/navigation";

const AddNoteButton = () => {
  const searchParams = useSearchParams();

  const isAddNoteDisabled = () => {
    const date = searchParams.get("date");
    if (!date || decodeURIComponent(date) != new Date().toDateString()) {
      return true;
    }
    return false;
  };

  return (
    <Button
      variant={"secondary"}
      className="w-full my-4"
      onClick={async () => await handleAddNoteAction()}
      disabled={isAddNoteDisabled()}
    >
      <PlusIcon className="mr-2 h-4 w-4" /> Add Note
    </Button>
  );
};

export default AddNoteButton;

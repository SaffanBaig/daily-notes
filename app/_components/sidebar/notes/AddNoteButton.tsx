"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

interface AddNoteProps {
  handleAddNote: () => void;
}
const AddNoteButton = ({ handleAddNote }: AddNoteProps) => {
  return (
    <Button className="w-full my-4" onClick={async () => await handleAddNote()}>
      <PlusIcon className="mr-2 h-4 w-4" /> Add Note
    </Button>
  );
};

export default AddNoteButton;

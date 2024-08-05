"use client";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { handleAddNoteAction } from "./serverAction/handleAddNoteAction";
import Loader from "../Loader";

const AddNoteButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleAddNote = async () => {
    setIsLoading(true);
    await handleAddNoteAction();
    setIsLoading(false);
  };
  return (
    <Button
      variant={"secondary"}
      className="w-full my-4"
      onClick={async () => await handleAddNote()}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PlusIcon className="mr-2 h-4 w-4" /> Add Note
        </>
      )}
    </Button>
  );
};

export default AddNoteButton;

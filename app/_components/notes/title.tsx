"use client";
import { Input } from "@/components/ui/input";
import { revalidateTag } from "next/cache";
import React, { useState } from "react";
import { handleTitleUpdateAction } from "./serverAction/handleTitleUpdateAction";

interface NoteTitleProps {
  title: string;
  id: string;
}
const NoteTitle = ({ title, id }: NoteTitleProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState(title);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = async () => {
    // await fetch(
    //   `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/notes/${id}/title`,
    //   {
    //     method: "PUT",
    //     body: JSON.stringify({ title: text }),
    //   }
    // );
    // revalidateTag("notesList");
    await handleTitleUpdateAction(id, text);
    setIsEditing(false);
  };
  return (
    <h1 className="text-3xl font-bold my-3" onDoubleClick={handleEditClick}>
      {isEditing ? (
        <Input
          className="text-3xl font-bold"
          type="text"
          value={text}
          onChange={handleChange}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          autoFocus
          onBlur={handleSubmit}
        />
      ) : (
        text
      )}
    </h1>
  );
};

export default NoteTitle;
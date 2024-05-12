"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface NoteTitleProps {
  title: string;
}
const NoteTitle = ({ title }: NoteTitleProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState(title);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <h1 className="text-3xl font-bold my-3" onDoubleClick={handleEditClick}>
      {isEditing ? (
        <Input
          className="text-3xl font-bold"
          type="text"
          value={text}
          onChange={handleChange}
          autoFocus
        />
      ) : (
        text
      )}
    </h1>
  );
};

export default NoteTitle;

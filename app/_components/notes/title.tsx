"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { handleTitleUpdateAction } from "./serverAction/handleTitleUpdateAction";
import { Check, Pencil } from "lucide-react";
import Loader from "../Loader";
import { Button } from "@/components/ui/button";

interface NoteTitleProps {
  title: string;
  id: string;
}
const NoteTitle = ({ title, id }: NoteTitleProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setText(title);
  }, [id, title]);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    await handleTitleUpdateAction(id, text);
    setIsEditing(false);
    setIsLoading(false);
  };
  return (
    <h1 className="text-3xl font-bold my-3" onDoubleClick={handleEditClick}>
      {isEditing ? (
        <div className="flex items-center">
          <div>
            <Input
              className="text-3xl font-bold"
              type="text"
              value={text}
              onChange={handleChange}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              autoFocus
              onBlur={handleSubmit}
            />
          </div>

          <div className="mx-2">
            <Button variant="outline" size="icon" onClick={handleSubmit}>
              {isLoading ? (
                <Loader />
              ) : (
                <Check className="h-5 w-5 text-green-800" />
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          {text}
          <Pencil
            className="text-green-800 cursor-pointer"
            onClick={handleEditClick}
          />
        </div>
      )}
    </h1>
  );
};

export default NoteTitle;

"use client";
import { Note } from "@prisma/client";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NoteTitle from "../notes/title";
import { useDebounceValue } from "usehooks-ts";

interface EditorProps {
  note: Note;
}
const Editor = ({ note: { id, text, title } }: EditorProps) => {
  console.log("EDITOR", id, text, title);
  // Dynamic import react quill as it uses browser api (ex: document)
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const [content, setContent] = useState("");
  const [debouncedText] = useDebounceValue(content, 500);
  // const [note, setNote] = useState<Note>();

  const updateNote = async () => {
    console.log("UPDATE NOTE ", debouncedText);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/notes/${id}/text`,
      {
        method: "PUT",
        body: JSON.stringify({ text: debouncedText }),
      }
    );
    console.log("CIM ", res);
  };
  useEffect(() => {
    if (debouncedText) {
      updateNote();
    }
  }, [debouncedText]);

  useEffect(() => {
    if (text) {
      setContent(text);
    }
  }, [id]);

  return (
    <div className="pl-72 h-full w-full px-4 py-4">
      <NoteTitle title={title} id={id} />
      <ReactQuill
        className="h-[500px]"
        theme="snow"
        modules={{
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
              { list: "ordered" },
              { list: "bullet" },
              { indent: "-1" },
              { indent: "+1" },
            ],
            ["link", "image"],
            ["clean"],
          ],
        }}
        value={content}
        onChange={setContent}
      />
    </div>
  );
};
export default Editor;

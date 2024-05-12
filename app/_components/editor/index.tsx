"use client";
import { Note } from "@prisma/client";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NoteTitle from "../notes/title";

interface EditorProps {
  id: string;
}
const Editor = ({ id }: EditorProps) => {
  // Dynamic import react quill as it uses browser api (ex: document)
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const [text, setText] = useState("");
  const [note, setNote] = useState<Note>();

  const fetchNote = async () => {
    try {
      const response = await fetch("/api/notes/" + id);
      const note = await response.json();
      setText(note.text);
      setNote(note);
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchNote();
    }
  }, [id]);

  return (
    <div className="h-full w-full px-4 py-4">
      {note && <NoteTitle title={note.title} />}
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
        value={text}
        onChange={setText}
      />
    </div>
  );
};
export default Editor;

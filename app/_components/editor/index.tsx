"use client";
import dynamic from "next/dynamic";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  // Dynamic import react quill as it uses browser api (ex: document)
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const params = useSearchParams();
  const query = params.get("noteId");
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("RAN ", query);

    const fetchNote = async () => {
      try {
        const response = await fetch("/api/notes/" + query);
        const note = await response.json();
        console.log("NOTE ", note);
        setText(note.text);
      } catch (error) {
        console.error("Error fetching note:", error);
      }
    };
    if (query) {
      fetchNote();
    }
  }, [query]);

  return (
    <div className="h-full">
      {query && (
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
      )}
    </div>
  );
};
export default Editor;

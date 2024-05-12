import Editor from "@/app/_components/editor";
import React from "react";

const Note = ({ params }: { params: { id: string } }) => {
  return <Editor id={params.id} />;
};

export default Note;

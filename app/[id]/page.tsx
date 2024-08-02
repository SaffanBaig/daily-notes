import React from "react";
import Editor from "../_components/editor";
import prisma from "../lib/prisma";
import { getCurrentUser } from "../lib/session";
import { Note } from "@prisma/client";

const NotePage = async ({ params }: { params: { id: string } }) => {
  if (!params?.id) {
    return <></>;
  }
  const currentUser = await getCurrentUser();
  if (!currentUser) return;
  const note = await prisma.note.findFirst({
    where: {
      id: params.id,
      userId: currentUser?.id,
    },
  });
  console.log("NOTE", note);
  return note && <Editor note={note} />;
};

export default NotePage;

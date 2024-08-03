export const dynamic = "force-dynamic";
import React from "react";

import { Note } from "@prisma/client";
import { getCurrentUser } from "@/app/lib/session";
import prisma from "@/app/lib/prisma";
import Editor from "@/app/_components/editor";

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

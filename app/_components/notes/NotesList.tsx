"use client";
import { Note } from "@prisma/client";
import { Edit, Pencil } from "lucide-react";
import React, { useEffect, useState } from "react";
import List from "./list";
import { prisma } from "@/app/lib/prisma";
import { getCurrentUser } from "@/app/lib/session";
import { useSearchParams } from "next/navigation";

const NotesList = () => {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const [notes, setNotes] = useState<Note[]>([]);
  const fetchNotes = async (date: string) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/notes?date=${date}`
    );
    const noteTimeSheet = await res.json();
    if (noteTimeSheet && noteTimeSheet.notes.length > 0) {
      setNotes(noteTimeSheet.notes);
    }
  };

  useEffect(() => {
    if (date) {
      fetchNotes(date);
    }
  }, [date]);

  return (
    <div>
      <List notes={notes} />
    </div>
  );
};

export default NotesList;

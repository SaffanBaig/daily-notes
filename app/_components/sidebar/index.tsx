import { Note, PrismaClient } from "@prisma/client";
import AddNote from "../notes/AddNote";
import NotesList from "../notes/NotesList";
import SwitchDate from "./switchdate";

const Sidebar = async ({
  searchParams,
}: {
  searchParams?: { date?: string };
}) => {
  console.log("SEARCH PARAMS ", searchParams);
  return (
    <div className="fixed h-full w-[250px] bg-blue-500 px-4 py-8 gap-4">
      <SwitchDate />
      <AddNote />
      <NotesList />
    </div>
  );
};

export default Sidebar;

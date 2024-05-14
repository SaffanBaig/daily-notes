// import { useSearchParams } from "next/navigation";
import AddNote from "../notes/AddNote";
import NotesList from "../notes/NotesList";
import SwitchDate from "./switchdate";

interface SidebarProps {
  date: string | undefined;
}
const Sidebar = ({ date }: SidebarProps) => {
  return (
    <div className="fixed h-full w-[250px] bg-slate-800 px-4 py-8 gap-4">
      <SwitchDate />
      <AddNote />
      {date && <NotesList date={date} />}
    </div>
  );
};

export default Sidebar;

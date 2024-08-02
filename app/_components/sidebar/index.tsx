import AddNote from "../notes/AddNote";
import NotesList from "../notes/NotesList";
import SwitchDate from "./switchdate";

const Sidebar = () => {
  return (
    <div className="fixed h-full w-64 bg-slate-800 px-4 py-8 gap-4">
      <h1 className="text-white text-3xl font-bold text-center mb-4">
        Daily Notes
      </h1>
      <AddNote />
      {<NotesList />}
    </div>
  );
};

export default Sidebar;

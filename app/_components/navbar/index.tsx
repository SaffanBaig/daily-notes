import { UserButton } from "@clerk/nextjs";
import SearchInput from "../search";

const Navbar = () => {
  return (
    <div className="w-full h-[60px] pl-[250px] pr-4 bg-green-500 flex justify-between items-center">
      <SearchInput />
      <UserButton />
    </div>
  );
};

export default Navbar;

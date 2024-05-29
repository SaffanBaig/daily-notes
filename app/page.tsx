import Image from "next/image";
import { redirect } from "next/navigation";
import Sidebar from "./_components/sidebar";
import Navbar from "./_components/navbar";
import Editor from "./_components/editor";

interface HomePageProps {
  searchParams: { date?: string; id?: string } | undefined;
}
export default function Home({ searchParams }: HomePageProps) {
  return (
    <div className="h-screen">
      <Sidebar date={searchParams?.date} />
      <Navbar />
      <div className="pl-[250px]">
        {searchParams && searchParams?.id && <Editor id={searchParams.id} />}
      </div>
    </div>
  );
}

import { SignUp } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SignUp />
    </div>
  );
}

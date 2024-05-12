import { auth, currentUser } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import Sidebar from "../_components/sidebar";
import { prisma } from "../lib/prisma";
import { getCurrentUser } from "../lib/session";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const user = await getCurrentUser();
  if (!user) {
    const clerkUser = await currentUser();
    const email = clerkUser?.emailAddresses[0].emailAddress || "";

    await prisma.user.create({
      data: {
        clerkId: clerkUser?.id || null,
        email: email,
      },
    });
  }

  return (
    <div className="h-screen">
      <Sidebar />
      <Navbar />
      <div className="pl-[250px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;

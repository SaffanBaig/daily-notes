import Navbar from "../_components/navbar";
import Sidebar from "../_components/sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen">
      <Sidebar />
      <Navbar />
      <div className="pl-[250px]">{children}</div>
    </div>
  );
};

export default DashboardLayout;

import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import Dock from "@/Components/Dock";
import LayoutWrapper from "@/Components/LayoutWrapper";


export default function DashboardLayout({ children }) {
  return (
      <LayoutWrapper>{children}</LayoutWrapper>
  );
}

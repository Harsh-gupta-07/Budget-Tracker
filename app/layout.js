import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import Dock from "@/Components/Dock";
import LayoutWrapper from "@/Components/LayoutWrapper";
import { BudgetProvider } from "./context/BudgetContext";
import { AuthProvider } from "./context/AuthContext";
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Budget Tracker",
  description: "lol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AuthProvider>
          <BudgetProvider>
            {children}
          </BudgetProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}

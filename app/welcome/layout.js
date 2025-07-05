import { Poppins } from "next/font/google";
import "../globals.css";


export default function welcomeLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
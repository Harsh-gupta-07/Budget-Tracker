import { Poppins } from "next/font/google";
import "../globals.css";

export default function loginLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

import { Poppins } from "next/font/google";
import "./globals.css";
import Wrapper from "../context/AllContext";
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
      <body className={`${poppins.variable}antialiased`}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}

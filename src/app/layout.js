import { Poppins } from "next/font/google";
import "./globals.css";
const poppins = Poppins({ subsets: ["latin"], weight:["300"]});

export const metadata = {
  title: "CLIK",
  description: "Keep all your urls at one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}

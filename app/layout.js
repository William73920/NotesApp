import "./globals.css";
import { Inter } from "next/font/google";
import { UserProvider } from "./context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Notes App",
  description: "A note taking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}

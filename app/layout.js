import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

// own font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Finance Tracker",
  description: "One Stop Finance Plateform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header />
        <main className="min-h-screen">{children}</main>

        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>Made with 💗 by Slient Coder</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

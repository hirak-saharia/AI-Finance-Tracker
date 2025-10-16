import React from "react";
import { Button } from "./ui/button";
import { PenBox, LayoutDashboard } from "lucide-react";
import Link from "next/link";
//import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
//import { checkUser } from "@/lib/checkUser";
import Image from "next/image";

const Header = async () => {
  //await checkUser();

  return (
    <header className="fixed top-0 w-full bg-blue-900 backdrop-blur-md z-50 border-b border-blue-900">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/Saharia Zone.png"}
            alt="Welth Logo"
            width={200}
            height={60}
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links - Different for signed in/out users */}

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/dashboard"
            className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
          >
            <Button variant="outline">
              <LayoutDashboard size={18} />
              <span className="hidden md:inline">Dashboard</span>
            </Button>
          </Link>
          <a href="/transaction/create">
            <Button className="flex items-center gap-2">
              <PenBox size={18} />
              <span className="hidden md:inline">Add Transaction</span>
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

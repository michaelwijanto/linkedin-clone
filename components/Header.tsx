import { Briefcase, HomeIcon, MessageSquare, SearchIcon, UsersIcon } from "lucide-react";
import Link from "next/link"
import Image from "next/image";
import { SignInButton, SignedIn, UserButton, SignedOut } from "@clerk/nextjs";
import { Button } from "./ui/button";

function Header() {
  
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      <Image
        className="rounded-lg"
        src="https://links.papareact.com/b3z"
        width={40}
        height={40}
        alt="logo"
      />
      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-md flex-1 mx-2 max-w-96">
          <SearchIcon className="h4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="" className="icon">
          <HomeIcon className="h-5 " />
          <p>Home</p>
        </Link>

        <Link href="" className="icon hidden md:flex">
          <UsersIcon className="h-5" ></UsersIcon>
          <p>Network</p>
        </Link>

        <Link href="" className="icon hidden md:flex">
          <Briefcase className="h-5"></Briefcase>
          <p>Jobs</p>
        </Link>

        <Link href="" className="icon">
          <MessageSquare className="h-5"></MessageSquare>
          <p>Messaging</p>
        </Link>

        {/* User Button if signed in */}
        
        <SignedIn>
          <UserButton />
        </SignedIn>


        {/* Sign in Button if not signed in */}
        <SignedOut>
          <Button asChild>
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;

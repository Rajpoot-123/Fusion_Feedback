"use client";

import Link from "next/link";
import { Sparkles, Map, MessageSquare,Shield } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { useRouter } from "next/navigation";
export default function Navbar() {
  const navigate = useRouter();
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
              <Sparkles className="h-4 w-4 text-white" />
              </div>

              <span className="text-xl font-bold">
                Feedback Fusion
              </span>
            </div>
          </Link>
          <Link href="/roadmap" 
          className="text-sm hover:text-primary flex items-center gap-1"
          >
            <Map className="h-4 w-4"/>
            Roadmap
          </Link>
          <Link href="/feedback" 
          className="text-sm hover:text-primary flex items-center gap-1"
          >
            <MessageSquare className="h-4 w-4"/>
            Feedback
          </Link>
          {/* Admin Link */}
            <Link
              href="/admin"
              className="text-sm hover:text-primary transition-colors flex items-center gap-1"
            >
              <Shield className="h-4 w-4" />
              Admin
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Show when="signed-out">
              <Link
                href="/sign-in"
                className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 inline-flex items-center justify-center"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 inline-flex items-center justify-center"
              >
                Sign Up
              </Link>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
    </nav>
  );
}
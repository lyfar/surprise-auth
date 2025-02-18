"use client"
import { SignInButton, SignedOut } from "@clerk/nextjs"

export default function Home() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-5xl font-bold tracking-tight text-[#131316] mb-4">
          Auth starts here
        </h1>

        <p className="text-[#5E5F6E] mb-6 max-w-[30rem] mx-auto text-[1.0625rem]">
          A simple and powerful Next.js template featuring authentication
          and user management powered by Clerk.
        </p>

        <SignedOut>
          <SignInButton>
            <button className="px-4 py-2 rounded-full bg-[#131316] text-white text-sm font-semibold">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </main>
  )
}

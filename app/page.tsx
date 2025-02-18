import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold tracking-tight text-[#131316] mb-4">
          Surprise starts here
        </h1>
        <p className="text-[#5E5F6E] text-xl mb-8">
          Discover extraordinary experiences in Hong Kong. Join unique events 
          that blend tradition with innovation in Asia's most vibrant city.
        </p>
        <div className="flex justify-center gap-4">
          <SignedIn>
            <Link
              href="/events"
              className="px-6 py-3 rounded-full bg-[#131316] text-white text-sm font-semibold hover:bg-[#2b2b2f] transition-colors"
            >
              View Events
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="px-6 py-3 rounded-full bg-[#131316] text-white text-sm font-semibold hover:bg-[#2b2b2f] transition-colors">
                Sign in
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </main>
  )
}

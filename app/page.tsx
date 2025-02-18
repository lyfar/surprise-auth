import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";

export default function Page() {
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleColor="#FFFFFF"
          particleDensity={100}
          speed={2}
          className="w-full h-full"
        />
      </div>
      
      <div className="relative z-10 max-w-3xl text-center px-4">
        <h1 className="text-5xl text-white font-bold mb-6">
          Surprise starts here
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Discover extraordinary experiences in Hong Kong. Join unique events that blend tradition with innovation in Asia's most vibrant city.
        </p>
        <Link 
          href="/sign-in" 
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:opacity-90 transition-opacity"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

import { SignIn } from "@clerk/nextjs";
import { SparklesCore } from "@/components/ui/sparkles";

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
      
      <div className="relative z-10">
        <h1 className="text-4xl text-white font-bold mb-8 text-center">
          Welcome Back
        </h1>
        <div className="bg-opacity-50 bg-black p-4 rounded-lg backdrop-blur-md">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

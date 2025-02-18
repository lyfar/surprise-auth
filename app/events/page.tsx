import { UserButton } from "@clerk/nextjs";

export default function EventsPage() {
  return (
    <main className="max-w-[75rem] w-full mx-auto px-4">
      <div className="py-6">
        <header className="flex items-center justify-between w-full h-16 mb-8">
          <h1 className="text-2xl font-bold">Events</h1>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                userButtonAvatarBox: "size-8",
              },
            }}
          />
        </header>
        
        {/* You can add your events content here */}
        <div className="text-gray-500 text-center py-12">
          No events yet
        </div>
      </div>
    </main>
  );
} 
// FeedPage.tsx
import { VideoContainer } from "./VideoContainer";

export default function DashboardMain() {
  return (
    <main className=" ml-4 mt-3 rounded-2xl overflow-y-auto text-white px-2 md:px-10 py-6">
      <div className="max-w-6xl mx-auto w-full overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-6 px-2 md:px-0">Your Feed</h1>
        <div className="flex flex-col gap-8">
          <VideoContainer />
          <VideoContainer />
          <VideoContainer />
          <VideoContainer />
          <VideoContainer />
        </div>
      </div>
    </main>
  );
}
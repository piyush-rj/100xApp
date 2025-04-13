import { VideoComponent } from "./VideoComponent";
import { VideoDetails } from "./VideoDetails";

export function VideoContainer() {
  return (
    <div className="flex flex-col lg:flex-row w-full rounded-2xl overflow-hidden shadow-xl shadow-[#000000]/50 bg-gradient-to-br from-[#202020] to-[#000000]">        

        <div className="w-full lg:w-3/5 p-2 lg:p-4  flex justify-center items-center">
            <VideoComponent src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        </div>

        <div className="w-full lg:w-2/5 p-4 border-t lg:border-t-0 lg:border-l border-[#2a2a2a]">
            <VideoDetails />
        </div>
    </div>

  );
}

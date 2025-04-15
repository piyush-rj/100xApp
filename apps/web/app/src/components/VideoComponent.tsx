"use client";

import { useRef, useState, useEffect } from "react";

export function VideoComponent({ src }: { src: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1)

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
        video.play();
        setIsPlaying(true);
        } else {
        video.pause();
        setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (!video) return;

        const percent = (video.currentTime / video.duration) * 100;
        setProgress(percent);
        setCurrentTime(video.currentTime);
    };

    const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const video = videoRef.current;
        const bar = progressRef.current;
        if (!video || !bar) return;

        const rect = bar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const percent = clickX / rect.width;
        video.currentTime = percent * video.duration;
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (!video) return;
        const volume = parseFloat(e.target.value);
        setVolume(volume);
        video.volume = volume;
    };

    const handleLoadedMetadata = () => {
        const video = videoRef.current;
        if (video) {
        setDuration(video.duration);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
        video.addEventListener("ended", () => setIsPlaying(false));
        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        }
    }, []);

    return (
        <div className="relative w-full max-w-full mx-2 rounded-xl overflow-hidden bg-black group">
        {/* video element */}
        <video
            ref={videoRef}
            src={src}
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            className="w-full cursor-pointer"
            playsInline
        />

        <button
            onClick={togglePlay}
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
            {isPlaying ? (
            <span>❚❚</span> 
            ) : (
            <span>▶</span> 
            )}
        </button>

        <div
            ref={progressRef}
            className="absolute bottom-0 left-0 w-full h-2 bg-gray-700 cursor-pointer"
            onClick={handleSeek}
        >
            <div
            className="h-full bg-red-600 transition-all"
            style={{ width: `${progress}%` }}
            ></div>
        </div>

        {/* volume control */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-between items-center px-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <span>{`${Math.floor(duration / 60)}:${Math.floor(duration % 60)
            .toString()
            .padStart(2, "0")}`}</span>

            <div className="flex items-center space-x-2">
            <span className="text-gray-500 ">📢</span>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24"
            />
            </div>
        </div>
    </div>
  );
}

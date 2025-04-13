"use client";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

interface Comment {
  id: string;
  text: string;
  username: string;
  timestamp: Date;
}

export function VideoDetails() {
    const [open, setOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [username, setUsername] = useState("User_Name"); // Default username
    const [showAllComments, setShowAllComments] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const commentRef = useRef<HTMLDivElement>(null);

    const { data: session } = useSession();

    const videoId = "demo-video-1";

    useEffect(() => {
        const likedStatus = localStorage.getItem(`liked-${videoId}`);
        if (likedStatus === "true") {
        setLiked(true);
        setLikes(1);
        }
        
        const savedComments = localStorage.getItem(`comments-${videoId}`);
        if (savedComments) {
        try {
            const parsedComments = JSON.parse(savedComments);
            const formattedComments = parsedComments.map((comment: any) => ({
            ...comment,
            timestamp: new Date(comment.timestamp)
            }));
            setComments(formattedComments);
        } catch (e) {
            console.error("Failed to parse saved comments");
        }
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
        if (
            panelRef.current && 
            !panelRef.current.contains(e.target as Node)
        ) {
            setOpen(false);
        }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLike = () => {
        if (liked) {
        setLiked(false);
        setLikes((prev) => Math.max(0, prev - 1));
        localStorage.setItem(`liked-${videoId}`, "false");
        } else {
        setLiked(true);
        setLikes((prev) => prev + 1);
        localStorage.setItem(`liked-${videoId}`, "true");
        }
    };

    const handlePostComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (comment.trim()) {
        const newComment: Comment = {
            id: Date.now().toString(),
            text: comment,
            username: session?.user?.name || username,
            timestamp: new Date()
        };
        
        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        
        
        localStorage.setItem(`comments-${videoId}`, JSON.stringify(updatedComments));
        
        setComment("");
        setOpen(false);
        setShowAllComments(true);
    }
  };
  

    const getInitials = (name: string) => {
        return name.charAt(0).toUpperCase();
    };

    const caption = `caption`;

  return (
        <div className="p-4 text-white h-full">
        <div className="flex items-center">
            <div className="bg-gray-400 w-12 h-12 rounded-full flex justify-center items-center text-xl font-bold text-gray-900">
            {getInitials(username)}
            </div>
            <div className="ml-3 text-lg font-semibold">{username}</div>
        </div>

        <div className="mt-4 flex items-center space-x-4">
            {/* LIKE BUTTON */}
            <div
            onClick={handleLike}
            className={`flex flex-col items-center justify-center cursor-pointer ${
                liked ? "text-red-400" : "text-[#e4e4e4] hover:text-red-400"
            } transition duration-200 w-5`}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={liked ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
            </svg>
            <div className="h-4 mt-1 text-xs text-center leading-none">
                {likes > 0 ? likes : ""}
            </div>
            </div>

            <div
            className="relative flex flex-col items-center justify-center w-10 cursor-pointer text-[#e4e4e4] hover:text-[#cecece] transition-all transform duration-100"
            onClick={() => setOpen((prev) => !prev)}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
            </svg>
            <div className="h-4 mt-1 text-xs invisible">0</div>

            {open && (
                <div
                ref={panelRef}
                className="absolute top-full -left-10 z-50 w-[320px] bg-[#1e1e1e] text-white shadow-lg rounded-xl p-4 mt-2 max-h-[400px] overflow-y-auto transition-opacity duration-300 ease-in-out opacity-100"
                >
                <h4 className="font-semibold text-lg mb-3">Add Comment</h4>
                
                {/* Comment Input */}
                <div className="mb-4">
                    <form onSubmit={handlePostComment} className="flex flex-col">
                    <div className="flex items-start space-x-2">
                        {session?.user?.image ? (
                            <img 
                                src={session.user.image} 
                                alt={session.user.name || "User"} 
                                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                            />
                        ) : (
                            <div className="bg-gray-500 w-8 h-8 rounded-full flex justify-center items-center text-sm font-bold text-gray-100 flex-shrink-0">
                                {session?.user?.name ? getInitials(session.user.name) : getInitials(username)}
                            </div>
                        )}
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            placeholder="Write a comment..."
                            className="flex-grow h-20 p-2 bg-[#2c2c2c] text-white rounded-md text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 ml-auto px-4 py-1 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition"
                    >
                        Post
                    </button>
                    </form>
                </div>
                </div>
            )}
            </div>
        </div>

        <div className="mt-4 p-3 h-full pb-5 border-t border-gray-600 text-sm text-gray-300">
            <p
            className={`text-gray-300 transition-all duration-200 ease-in-out ${
                expanded ? "" : "line-clamp-2"
            }`}
            >
            {caption}
            </p>
            <button
            className="mt-2 text-xs text-gray-500 hover:text-gray-400 underline transition"
            onClick={() => setExpanded(!expanded)}
            >
            {expanded ? "Show Less" : "Show More"}
            </button>
        </div>
        
        {/* Comments Section in Main UI */}
        <div className="mt-2 border-t border-gray-700 pt-3">
            <div 
            className="flex items-center justify-between mb-3 cursor-pointer"
            onClick={() => setShowAllComments(!showAllComments)}
            >
            <h3 className="font-medium">
                Comments {comments.length > 0 && `(${comments.length})`}
            </h3>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform ${showAllComments ? "rotate-180" : ""}`}
            >
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
            </div>
            
            {showAllComments && (
            <div className="space-y-4 mt-2">
                {comments.length === 0 ? (
                <p className="text-gray-500 text-sm py-2">No comments yet. Be the first to comment!</p>
                ) : (
                comments.map((commentItem) => (
                    <div key={commentItem.id} className="flex space-x-2 pb-3 border-b border-gray-700 last:border-0">
                    <div className="bg-gray-500 w-8 h-8 rounded-full flex justify-center items-center text-sm font-bold text-gray-100 flex-shrink-0">
                        {getInitials(commentItem.username)}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1">
                        <span className="font-medium text-sm">{commentItem.username}</span>
                        {/* <span className="text-gray-500 text-xs">· {formatRelativeTime(commentItem.timestamp)}</span> */}
                        </div>
                        <p className="text-sm mt-1 break-words">{commentItem.text}</p>
                        <div className="flex mt-2 text-xs text-gray-500 space-x-4">
                        <button className="hover:text-gray-300">
                            <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                            Like
                            </span>
                        </button>
                        <button className="hover:text-gray-300">
                            <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                            Reply
                            </span>
                        </button>
                        </div>
                    </div>
                    </div>
                ))
                )}
                
                {/* Quick Comment Input in Comments Section */}
                <div className="flex items-start space-x-2 mt-4">
                {session?.user?.image ? (
                    <img 
                    src={session.user.image} 
                    alt={session.user.name || "User"} 
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                    />
                ) : (
                    <div className="bg-gray-500 w-8 h-8 rounded-full flex justify-center items-center text-sm font-bold text-gray-100 flex-shrink-0">
                    {session?.user?.name ? getInitials(session.user.name) : getInitials(username)}
                    </div>
                )}
                <div className="flex-1">
                    <form onSubmit={handlePostComment} className="flex">
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="flex-1 py-2 px-3 bg-[#2c2c2c] text-white rounded-l-full text-sm"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-r-full px-4 text-sm font-medium transition"
                    >
                        Post
                    </button>
                    </form>
                </div>
                </div>
            </div>
            )}
        </div>
        </div>
  );
}
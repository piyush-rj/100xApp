export function HoverText({ text }: { text: string }) {
    return (
      <div className="mb-2 mt-1">
        <div className="py-3 px-4  flex justify-center items-center text-md text-gray-300 cursor-pointer transition-all duration-200 ease-in-out tracking-wide hover:scale-[1.03] hover:text-white hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#1c1c1c] hover:shadow-md hover:shadow-yellow-900 hover:backdrop-blur-sm bg-transparent">
          {text}
        </div>
      </div>
    );
  }
  
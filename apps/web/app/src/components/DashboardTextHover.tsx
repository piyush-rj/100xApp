export default function HoverText({text}: {text: string}) {
    return (
        <div className="text-[#e4e4e4] cursor-pointer hover:text-[#a77eff] transition-all transform duration-200 hover:scale-105">
            {text}
        </div>
    )
}
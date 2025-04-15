export default function DashboardTextBox({text}: {text: string}){
    return <div>
        <span className="text-[16px] px-4 py-2 border-2 rounded-3xl border-purple-700 text-purple-400 cursor-pointer hover:border-purple-500 transition-all transform duration-300">
            {text}
        </span>
    </div>
}
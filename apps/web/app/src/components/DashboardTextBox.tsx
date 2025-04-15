export default function DashboardTextBox({text}: {text: string}){
    return <div>
        <span className="text-[16px] px-4 py-2 border-2 rounded-3xl border-purple-600 text-purple-300 bg-gradient-to-br from-purple-950 to-black cursor-pointer hover:text-purple-100 transition-all transform duration-300">
            {text}
        </span>
    </div>
}
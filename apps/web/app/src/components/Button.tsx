export function Button({text} : {text: string}){
    return <button className="px-[60px] py-2.5 bg-black rounded-md text-white tracking-wider text-[16px] hover:text-black hover:bg-white transition-all transform duration-300">
        {text}
    </button>
}
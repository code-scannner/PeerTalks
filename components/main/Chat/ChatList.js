import Link from "next/link";

export default function ChatList({profiles, setProfile, profile}) {
    return <>
        <ul className="overflow-auto">
            {profiles.map((elem, key) => {
                let active = key == profile;
                return <li key={key}>
                    <Link href="/chat" onClick={()=>setProfile(key)} className={`flex items-center px-3 py-2 text-sm transition duration-300 ease-in-out border-b border-gray-300 cursor-pointer ${active ? "bg-gray-100" : ""} hover:bg-gray-100 focus:outline-none`}>
                        <img className="object-cover w-10 h-10 rounded-full" src={elem.image} alt={elem.name} />
                        <div className="w-full pb-2">
                            <div className="flex justify-between">
                                <span className="block ml-2 font-semibold text-gray-600">{elem.name}</span>
                                <span className="block ml-2 text-sm text-gray-600">{elem.lastMsgTime}</span>
                            </div>
                            <span className="block ml-2 text-sm text-gray-600">{elem.lastMsg}</span>
                        </div>
                    </Link>
                </li>
            })}
        </ul>
    </>
}
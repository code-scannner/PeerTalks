"use client"
import Link from "next/link";

export default function ChatLabel({user}){
    const active = false;
    return <Link href={`/chat/${user.username}?fname=${user.fname}&pic=${user.pic}`} className={`flex items-center px-3 py-2 text-sm transition duration-300 ease-in-out border-b border-gray-300 cursor-pointer ${active ? "bg-gray-100" : ""} hover:bg-gray-100 focus:outline-none`}>
    <img className="object-cover w-10 h-10 rounded-full" src={user.pic && user.gender == "Female" ? "https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG-Image.png" : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"} alt={user.fname} />
    <div className="w-full pb-2">
        <div className="flex justify-between">
            <span className="block ml-2 font-semibold text-gray-600 capitalize truncate ">{user.fname} {user.lname}</span>
            {/* <span className="block ml-2 text-sm text-gray-600">{}</span> */}
        </div>
        {/* <span className="block ml-2 text-sm text-gray-600">{""}</span> */}
    </div>
</Link>
}
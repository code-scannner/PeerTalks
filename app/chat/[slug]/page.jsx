"use client"
import { useParams } from "next/navigation"

import { TbMessage2Search } from "react-icons/tb";
import { GrSearch } from "react-icons/gr";
import ChatBox from "@/components/main/Chat/ChatBox";
import MessageBox from "@/components/main/Chat/MessageBox";
import Link from "next/link";

export default function Messages() {
    const router = useParams();
    console.log(router);
    return <>
        <div className="w-full">
            <div className="relative flex items-center p-3 border-b border-gray-300">
                <img className="object-cover w-10 h-10 rounded-full" src={"Female" == "Female" ? "https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG-Image.png" : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"} alt="" />
                <span className="block ml-2 font-bold text-gray-600">Username</span>
                <span className="absolute w-3 h-3 bg-green-400 rounded-full left-10 top-3">
                </span>
            </div>
            <ChatBox />
            <MessageBox />
        </div>
    </>
}


function StartConversation() {
    return <div className="flex flex-col justify-center items-center gap-y-4">
        <TbMessage2Search className="text-slate-400 text-[10rem] mt-40" />
        <div className="text-gray-600 text-4xl font-fancy">Talk with Peers</div>
        <div className="text-gray-400">Start a conversation with peers you are connected with or search new peers</div>
        <button className="text-slate-500 flex gap-x-2 uppercase tracking-wider border-2 border-solid border-slate-600 hover:bg-slate-600 hover:text-white transition-colors duration-200 font-medium text-lg py-2 px-6 rounded-md">
            <Link href="/search">
                Search
            </Link>
            <GrSearch className="mt-[0.3rem]" />
        </button>
    </div>
}
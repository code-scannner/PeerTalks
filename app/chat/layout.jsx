"use client"
import ChatList from "@/components/main/Chat/ChatList";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbMessage2Search } from "react-icons/tb";
import { GrSearch } from "react-icons/gr";
import ChatBox from "@/components/main/Chat/ChatBox";
import MessageBox from "@/components/main/Chat/MessageBox";
export default function Home() {
    const [profile, setProfile] = useState(-1);
    const [chatProfiles, setChatProfiles] = useState([]);
    useEffect(() => {
        const username = localStorage.getItem("username");
        const password = localStorage.getItem("password");

        axios.get(`chat/api?username=${username}&password=${password}`)
            .then(function (response) {
                console.log(response.data.users)
                setChatProfiles(response.data.users)
            }).catch(function (error) {
                console.log(error);
            })
    }, []);
    return <>
        <div className="border rounded lg:grid lg:grid-cols-4 min-h-full h-screen">
            <div className="border-r border-gray-200 lg:col-span-1">
                <h2 className="my-4 mb-2 ml-3 text-md text-gray-600">Chats</h2>
                <ChatList profiles={chatProfiles} profile={profile} setProfile={setProfile} />
            </div>


            <div className=" lg:col-span-3 flex flex-col items-center w-full h-full gap-y-5" style={{
                background: `url("image/chatbg.jpg")`,
                backgroundColor: "hsl(278 100% 95%)",
                backgroundSize: "50%",
                backgroundBlendMode: "screen"
            }}>
                {profile >= 0 ? <div className="w-full">
                    <div className="relative flex items-center p-3 border-b border-gray-300">
                        <img className="object-cover w-10 h-10 rounded-full" src={chatProfiles[profile].pic && elem.gender == "Female" ? "https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG-Image.png" : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"} alt={chatProfiles[profile].fname} />
                        <span className="block ml-2 font-bold text-gray-600">{chatProfiles[profile].fname}</span>
                        <span className="absolute w-3 h-3 bg-green-400 rounded-full left-10 top-3">
                        </span>
                    </div>
                    <ChatBox />
                    <MessageBox />
                </div>
            :
            <StartConversation/>
            }
            </div>
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
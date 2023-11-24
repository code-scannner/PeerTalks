"use client"
import ChatBox from "@/components/main/Chat/ChatBox";
import ChatList from "@/components/main/Chat/ChatList";
import MessageBox from "@/components/main/Chat/MessageBox";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const [profile, setProfile] = useState(0);
    const [chatProfiles, setChatProfiles] = useState([]);
    useEffect(() => {
        axios.get(`chat/api`).then(function (response) {
            console.log(response.data.users)
            setChatProfiles(response.data.users)
          }).catch(function (error) {
            console.log(error);
          })
      },[]);
    return <>
        <div className="border rounded lg:grid lg:grid-cols-4 max-h-full">
            <div className="border-r border-gray-300 lg:col-span-1">
                <div className="mx-3 my-3">
                    <div className="relative text-gray-600">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6 text-gray-300">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                        <input type="search" className="block w-full py-2 pl-10 pr-3 bg-gray-100 rounded outline-none" name="search" placeholder="Search" required />
                    </div>
                </div>
                <h2 className="my-4 mb-2 ml-3 text-md text-gray-600">Chats</h2>
                <ChatList profiles={chatProfiles} profile={profile} setProfile={setProfile} />
            </div>
            <div className="hidden lg:col-span-3 lg:block">
                {chatProfiles.length > 0 && <div className="w-full">
                    <div className="relative flex items-center p-3 border-b border-gray-300">
                        <img className="object-cover w-10 h-10 rounded-full" src={chatProfiles[profile].pic && elem.gender == "Female" ? "https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG-Image.png" : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"} alt={chatProfiles[profile].fname} />
                        <span className="block ml-2 font-bold text-gray-600">{chatProfiles[profile].fname}</span>
                        <span className="absolute w-3 h-3 bg-green-400 rounded-full left-10 top-3">
                        </span>
                    </div>
                    <ChatBox />
                    <MessageBox />
                </div>}
            </div>
        </div>
    </>
}
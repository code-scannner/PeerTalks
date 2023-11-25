"use client"
import ChatBox from "@/components/main/Chat/ChatBox";
import ChatList from "@/components/main/Chat/ChatList";
import MessageBox from "@/components/main/Chat/MessageBox";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TbMessage2Search } from "react-icons/tb";
import { GrSearch } from "react-icons/gr";
export default function Home({children}) {
    const [profile, setProfile] = useState(0);
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
      },[]);
    return <>
        <div className="border rounded lg:grid lg:grid-cols-4 min-h-full h-screen">
            <div className="border-r border-gray-200 lg:col-span-1">
                <h2 className="my-4 mb-2 ml-3 text-md text-gray-600">Chats</h2>
                <ChatList profiles={chatProfiles} profile={profile} setProfile={setProfile} />
            </div>
            <div className=" lg:col-span-3 flex flex-col items-center w-full h-full gap-y-5" style={{
                background: `url("image/chatbg.jpg")`,
                backgroundColor:"hsl(278 100% 95%)",
                backgroundSize: "50%",
                backgroundBlendMode: "screen"
            }}>
                <TbMessage2Search className="text-[10rem] opacity-50 mt-40"/>
                <div className="text-gray-600 text-4xl font-fancy">Talk with Peers</div>
                <div className="text-gray-400">Start a conversation with peers you are connected with or search new peers</div>
                <button className="text-primary-500 flex gap-x-2 uppercase tracking-wider border-2 border-solid border-primary-600 hover:bg-primary-600 hover:text-white transition-colors duration-200 font-medium text-lg py-2 px-6 rounded-md">
                <Link href="/search">
                Search
                </Link>
                <GrSearch className="mt-[0.3rem]"/>

              </button>
            </div>
        </div>
    </>
}
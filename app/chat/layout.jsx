import ChatList from "@/components/main/Chat/ChatList";

export default function Home({children}) {

    return <>
        <div className="border rounded lg:grid lg:grid-cols-4 min-h-full h-screen">
            <div className="border-r border-gray-200 lg:col-span-1">
                <h2 className="my-4 mb-2 ml-3 text-md text-gray-600">Chats</h2>
                <ChatList/>
            </div>

            <div className=" lg:col-span-3 flex flex-col items-center w-full h-full gap-y-5" style={{
                background: `url("image/chatbg.jpg")`,
                backgroundColor: "hsl(278 100% 95%)",
                backgroundSize: "50%",
                backgroundBlendMode: "screen"
            }}>
                {children}
            </div>
        </div>
    </>
}


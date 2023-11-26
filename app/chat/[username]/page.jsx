import ChatBox from "@/components/main/Chat/ChatBox";
import MessageTyping from "@/components/main/Chat/MessageTyping";
import TopHeader from "@/components/main/Chat/TopHeader";

export default async function Messages({params, searchParams}) {
    const {username} = params;

    return <>
        <TopHeader username = {username}/>
        <ChatBox/>
        <MessageTyping/>
    </>
       
}


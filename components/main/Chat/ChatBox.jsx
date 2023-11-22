const messages = [
    {
        is_sender: false,
        message: "Hey Bob! How's it going?",
    },
    {
        is_sender: true,
        message: "Hi Alice! I'm good, thanks. Just finished a workout. How about you?"
    },
    {
        is_sender: false,
        message: "Nice! I'm doing well too. Just got back from a coffee shop. ☕️"
    },
    {
        is_sender: true,
        message: "Sounds great! Anything exciting happening today?"
    },
    {
        is_sender: false,
        message: "Not much, just catching up on some work. What about you?"
    },
    {
        is_sender: true,
        message: "Same here, trying to get ahead on some projects. By the way, have you watched that new movie everyone's talking about?"
    },
    {
        is_sender: false,
        message: "Not yet! Is it worth watching?"
    },
    {
        is_sender: true,
        message: "Definitely! We should plan a movie night. How about this weekend?"
    },
    {
        is_sender: false,
        message: "Sounds like a plan! I'm in. What's the movie called?"
    },
    {
        is_sender: true,
        message: "It's called 'Beyond the Stars'. Heard the storyline is amazing."
    },
    {
        is_sender: false,
        message: "Awesome! I'll check it out. Can't wait for the weekend now. 😄"
    },
    {
        is_sender: true,
        message: "Me neither! It's a date then. Anything else on your mind?"
    },
    {
        is_sender: false,
        message: "Nope, just looking forward to the weekend. Anything specific you want to do?"
    },
    {
        is_sender: true,
        message: "Maybe grab dinner before the movie? I heard there's a new Italian place downtown."
    },
    {
        is_sender: false,
        message: "Perfect! Italian sounds great. Let's do it."
    },
    {
        is_sender: true,
        message: "Great! Looking forward to it. Text me if anything comes up."
    },
    {
        is_sender: false,
        message: "Will do! Catch you later, Bob."
    },
    {
        is_sender: true,
        message: "See ya, Alice! Take care."
    },
    {
        is_sender: false,
        message: "Hey Bob! How's it going?",
    },
    {
        is_sender: true,
        message: "Hi Alice! I'm good, thanks. Just finished a workout. How about you?"
    },
    {
        is_sender: false,
        message: "Nice! I'm doing well too. Just got back from a coffee shop. ☕️"
    },
    {
        is_sender: true,
        message: "Sounds great! Anything exciting happening today?"
    },
    {
        is_sender: false,
        message: "Not much, just catching up on some work. What about you?"
    },
    {
        is_sender: true,
        message: "Same here, trying to get ahead on some projects. By the way, have you watched that new movie everyone's talking about?"
    },
    {
        is_sender: false,
        message: "Not yet! Is it worth watching?"
    },
    {
        is_sender: true,
        message: "Definitely! We should plan a movie night. How about this weekend?"
    },
    {
        is_sender: false,
        message: "Sounds like a plan! I'm in. What's the movie called?"
    },
    {
        is_sender: true,
        message: "It's called 'Beyond the Stars'. Heard the storyline is amazing."
    },
    {
        is_sender: false,
        message: "Awesome! I'll check it out. Can't wait for the weekend now. 😄"
    },
    {
        is_sender: true,
        message: "Me neither! It's a date then. Anything else on your mind?"
    },
    {
        is_sender: false,
        message: "Nope, just looking forward to the weekend. Anything specific you want to do?"
    },
    {
        is_sender: true,
        message: "Maybe grab dinner before the movie? I heard there's a new Italian place downtown."
    },
    {
        is_sender: false,
        message: "Perfect! Italian sounds great. Let's do it."
    },
    {
        is_sender: true,
        message: "Great! Looking forward to it. Text me if anything comes up."
    },
    {
        is_sender: false,
        message: "Will do! Catch you later, Bob."
    },
    {
        is_sender: true,
        message: "See ya, Alice! Take care."
    },
]

export default function ChatBox() {
    return (
        <div
            className="relative bg-primary-50 text-[0.93rem] w-full p-6 overflow-y-auto h-[80vh]"
            style={{
                background: `url("image/chatbg.jpg")`,
                backgroundColor:"hsl(278 100% 95%)",
                backgroundSize: "50%",
                backgroundBlendMode: "screen"
            }}
            >
            {/* <div className="absolute inset-0 opacity-20 h-full"
                style={{
                    background: `url("image/chatbg.jpg")`,
                    backgroundSize: "50%"
                }}
            /> */}

            <ul className="flex flex-col">
                {messages.map((elem, key, arr) => {
                    return (
                        <li key={key} className={`${arr[key - 1] && arr[key - 1].is_sender != elem.is_sender ? "mt-4" : "mt-0.5"} flex ${elem.is_sender ? "justify-end" : "justify-start"}`}>
                            <div className={`relative max-w-xl px-4 py-2 ${elem.is_sender ? "bg-primary-600/90 text-white rounded-s-xl rounded-e-md" : "text-gray-700 bg-white/90 rounded-e-xl rounded-s-md"} shadow-chat`}>
                                <span className="block">{elem.message}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
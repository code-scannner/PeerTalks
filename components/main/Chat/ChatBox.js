const messages = [
    {
        is_sender: false,
        message: "Hi",
    },
    {
        is_sender: true,
        message: "Hiii"
    },
    {
        is_sender: true,
        message: "How are you?"
    },
    {
        is_sender: false,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: true,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: true,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: false,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: true,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: false,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: true,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: false,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: true,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: false,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: true,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
    {
        is_sender: true,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor magna vitae fermentum ultricies. Aliquam nec tellus id nisl imperdiet auctor quis in magna."
    },
]

export default function ChatBox() {
    return (
        <div
            className="relative text-[0.93rem] w-full p-6 overflow-y-auto h-[80vh] bg-primary-50">
            <div className="absolute inset-0 opacity-10 h-full"
                style={{
                    background: `url("image/chatbg.jpg")`,
                    backgroundSize: "50%"
                }}
            />

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
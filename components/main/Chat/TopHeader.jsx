export default function TopHeader({user}) {
    return <div className="relative flex items-center p-3 border-b border-gray-300">
        <img className="object-cover w-10 h-10 rounded-full" src={user.pic && elem.gender == "Female" ? "https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG-Image.png" : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"} alt={user.username} />
        <span className="block ml-2 font-bold text-gray-600">{user.fname}</span>
        <span className="absolute w-3 h-3 bg-green-400 rounded-full left-10 top-3">
        </span>
    </div>
}
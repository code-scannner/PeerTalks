"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Chats",
        icon: <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>,
        link: "/chat"
    },
    {
        name: "Profile",
        icon: <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>,
        link: "/profile"
    },
    {
        name: "Help",
        icon: <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} xmlns="http://www.w3.org/2000/svg" d="M12 19H12.01M8.21704 7.69689C8.75753 6.12753 10.2471 5 12 5C14.2091 5 16 6.79086 16 9C16 10.6565 14.9931 12.0778 13.558 12.6852C12.8172 12.9988 12.4468 13.1556 12.3172 13.2767C12.1629 13.4209 12.1336 13.4651 12.061 13.6634C12 13.8299 12 14.0866 12 14.6L12 16" />
        </svg>,
        link: "/help"
    }
]

const excludedPaths = ["/","/register","/login"]

export default function NavBar() {
    const pathname = usePathname();
    return <nav className={`${!excludedPaths.includes(pathname) ? "" : "hidden"} border-r border-gray-200 bg-white fixed top-0 w-16 left-0 flex flex-col justify-between h-full py-4`}>
        <Link href={"/"} className={`p-2 text-primary-400 bg-primary-50 hover:text-primary-600 hover:bg-primary-100 transition-colors duration-200 rounded-full focus:outline-none mx-auto w-fit`}>
            <span className="sr-only">Peer Talks</span>
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </Link>
        <div className="flex flex-col items-center justify-center gap-y-7 px-2 py-4">
            {links.map(elem => {
                const active = pathname == elem.link;
                return <Link href={elem.link} key={elem.name} className={`p-2 ${!active ? "text-primary-400 bg-primary-50 hover:text-primary-600 hover:bg-primary-100" : "text-white bg-primary-600 hover:bg-primary-700"} transition-colors duration-200 rounded-full focus:outline-none`}>
                    <span className="sr-only">{elem.name}</span>
                    {elem.icon}
                </Link>
            })}

        </div>
        <Link href={"/logout"} className={`p-2 text-primary-400 bg-primary-50 hover:text-primary-600 hover:bg-primary-100 transition-colors duration-200 rounded-full focus:outline-none mx-auto w-fit`}>
            <span className="sr-only">logout</span>
            <svg className="w-7 h-7 p-1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" stroke="currentColor" fill="currentColor" version="1.1" id="Capa_1" viewBox="0 0 384.971 384.971" space="preserve">
                <g>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={40} d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03    C192.485,366.299,187.095,360.91,180.455,360.91z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={20} d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" />
                </g>
            </svg>
        </Link>
    </nav>

}
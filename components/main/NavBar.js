import Link from "next/link"

const links = [
    {
        name: "Home",
        icon: <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>,
        link: "/"
    },
    {
        name: "Chats",
        icon: <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>,
        link: "/"
    },
    {
        name: "Layout",
        icon: <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>,
        link: "/"
    },
    {
        name: "Profile",
        icon: <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>,
        link: "/"
    },
]

export default function NavBar() {
    return <nav className="bg-white fixed top-0 w-16 left-0 flex flex-col justify-center h-full">
        <div className="flex flex-col items-center justify-center gap-y-5 px-2 py-4">
            {links.map(elem => {
                let active = elem.name == 'Home';
                return <Link href={elem.link} key={elem.name} className={`p-2 ${!active ? "text-primary-400 bg-primary-50 hover:text-primary-600 hover:bg-primary-100" : "text-white bg-primary-600 hover:bg-primary-700"} transition-colors duration-200 rounded-full focus:outline-none focus:bg-primary-100  focus:ring-primary-800`}>
                    <span className="sr-only">{elem.name}</span>
                    {elem.icon}
                </Link>
            })}
        </div>
    </nav>

}
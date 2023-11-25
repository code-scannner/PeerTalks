"use client"
import axios from "axios";
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Search() {
    const [users, setUsers] = useState([]);
    const submit = (event) => {
        event.preventDefault();
        const search = event.target.search.value;
        axios.get(`search/api?search=${search}&username=${localStorage.getItem("username")}`)
            .then(function (response) {
                setUsers(response.data.users)
            }).catch(function (error) {
                console.log(error);
            })
    }
    return <>
        <div className="mx-3 my-3">
            <div className="relative text-gray-600">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6 text-gray-300">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </span>
                <form onSubmit={submit}>
                    <input type="search" name="search" className="block w-full py-2 pl-10 pr-3 bg-gray-100 rounded outline-none" placeholder="Search" required />
                </form>
            </div>
        </div>

        {users.length > 0 ?
        <div className="p-4 w-full grid grid-cols-5 gap-x-5 gap-y-5">
               { 
               users.map((elem)=>{
                return <UserCard user = {elem} key = {elem.username}/>
               })
               }
        </div> : 
        <div>Look for Peers</div>}

    </>
}

function UserCard({user}) {
    return <>
        <div className="min-w-[15rem] p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col gap-y-3 items-center">
                <img className="w-24 h-24 rounded-full shadow-md" src={user.pic} alt={user.username} />
                <h5 className="text-lg font-light text-gray-600 font-fancy">{"@"+user.username}</h5>
                <h5 className="text-lg font-light text-gray-600 font-fancy">{user.fname + " " + user.lname}</h5>
                <Link href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 ">Chat</Link>
            </div>
        </div>
    </>
}
"use client"

import axios from "axios";
import { useEffect, useState } from "react"

export default function FriendRequest() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const username = localStorage.getItem("username");
        axios
          .get(`/friendrequest/api?username=${username}`)
          .then(function (response) {
            setUsers(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
      }, [])
    return <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl">
            <div className="mb-4">
                <h1 className="font-semibold text-gray-800">Friend Requests</h1>
            </div>
            {
                users.map((elem)=>{
                    return <RequestCard user = {elem} key={elem.username} />
                })
            }

        </div>
    </div>

}


function RequestCard({user}) {
    return <div className="flex justify-center items-center">
        <div className="w-1/5">
            <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt={user.username} />
        </div>
        <div className="w-4/5">
            <div>
                <span className="font-semibold text-gray-800">{user.fname} {user.lname}</span>
                <span className="text-gray-400">wants to be your friend</span>
            </div>
            <div className="font-semibold">
                <button className="text-primary-600 mr-2">Accept</button>
                <button className="text-gray-400">Decline</button>
            </div>
        </div>
    </div>
}
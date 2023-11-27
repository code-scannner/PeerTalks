"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function FriendRequest() {
    const [users, setUsers] = useState([]);
    const filterUser = ({user})=>{
        setUsers(users.filter((elem)=>elem.username != user))
    }
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
                    return <RequestCard user = {elem} key = {elem.username} filterUser = { filterUser } />
                })
            }
        </div>
    </div>
  ) : (
    <Noreq />
  );
}

function RequestCard({user, filterUser}) {
    const submit = (accepted)=>{
        const username = localStorage.getItem("username");

        axios
        .post(`/friendrequest/api`,{
            sender : username,
            receiver : user.username,
            accepted : accepted,
        })
        .then(function (response) {
            if(!response.error){
                filterUser(user.username)
            }
            else console.log(response.error)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return <div className="flex justify-center items-center">
        <div className="w-1/5">
            <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt={user.username} />
        </div>
        <div className="w-4/5">
            <div>
                <span className="font-semibold text-gray-800">{user.fname} {user.lname}</span>
                <span className="text-gray-400">wants to be your friend</span>
            </div>
            <div className="font-semibold flex gap-x-3 mt-3">
            <button  onClick={()=>submit(true)} className="text-green-500 uppercase border-2 border-solid border-green-600 hover:bg-green-600 hover:text-white transition-colors duration-200 font-medium text-xs px-2 rounded-md">
            Accept
          </button>
          <button onClick={()=>submit(false)} className="text-red-500 uppercase border-2 border-solid border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 font-medium text-xs px-2 rounded-md">
            Decline
          </button>
            </div>
        </div>
      </div>
    </div>
  );
}

function Noreq() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-gray-500 text-2xl">No friend requests</div>
    </div>
  );
}

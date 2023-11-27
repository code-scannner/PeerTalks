"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function FriendRequest() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const username = localStorage.getItem("username");
    axios
      .get(`/friendrequest/api?username=${username}`)
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return users.length > 0 ? (
    <div className="h-screen bg-gradient-to-b from-primary-100 to-slate-100">
      <div>
        <h1 className="font-semibold text-slate-500 text-2xl text-center pt-5">
          Friend Requests
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-x-5 items-center mt-5">
        {users.map((elem) => {
          return <RequestCard user={elem} key={elem.username} />;
        })}
      </div>
    </div>
  ) : (
    <Noreq />
  );
}

function RequestCard({ user }) {
  return (
    <div className="flex justify-center items-center bg-white rounded-md mx-auto p-2 shadow-md w-96 ">
      <div className="w-1/5 p-4">
        <img
          className="w-12 h-12 rounded-full border border-gray-100 shadow-md"
          src="https://randomuser.me/api/portraits/women/20.jpg"
          alt={user.username}
        />
      </div>
      <div className="w-4/5">
        <div>
          <span className="font-semibold text-primary-700">
            {user.fname} {user.lname}
          </span>
          <span className="text-gray-400 text-sm">
            {" "}
            wants to be your friend
          </span>
        </div>
        <div className="font-semibold flex gap-x-3 mt-3">
          <button className="text-green-500 uppercase border-2 border-solid border-green-600 hover:bg-green-600 hover:text-white transition-colors duration-200 font-medium text-xs px-2 rounded-md">
            Accept
          </button>
          <button className="text-red-500 uppercase border-2 border-solid border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 font-medium text-xs px-2 rounded-md">
            Decline
          </button>
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

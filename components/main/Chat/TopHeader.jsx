"use client"
import axios from "axios";
import { useEffect, useState } from "react";

export default function TopHeader({username}) {
    const [user,setUser]=useState({});
    useEffect(() => {
      axios
        .get(`/profile/api?username=${username}`)
        .then(function (response) {
          setUser(response.data)
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }, [])
    return <div className="relative flex items-center p-3 border-b border-gray-300 bg-white w-full">
        <img className="object-cover w-10 h-10 rounded-full" src={user.pic && user.gender == "Female" ? "https://www.pngall.com/wp-content/uploads/5/Profile-Female-PNG-Image.png" : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"} alt={username} />
        <span className="block ml-2 font-bold text-gray-600 capitalize">{user.fname} {user.lname}</span>
    </div>
}
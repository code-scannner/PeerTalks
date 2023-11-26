"use client"
import { getUserDetails } from "@/helper/userauth";
import axios from "axios";
import { useEffect, useState } from "react";
import ChatLabel from "./ChatLabel";

export default function ChatList({ }) {
    
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const { username, password } = getUserDetails();

        axios.get(`/chat/api?username=${username}&password=${password}`)
            .then(function (response) {
                console.log('here the searching ')
                setUsers(response.data.users)
            }).catch(function (error) {
                console.log(error);
            })
    }, []);

    return <>
        <ul className="overflow-auto">
            {users.map((elem, key) => {
                return <li key={key}>
                    <ChatLabel user={elem} key={elem.username} />
                </li>
            })}
        </ul>
    </>
}
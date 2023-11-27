"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

export default function Notification() {
  useEffect(() => {
    const username = localStorage.getItem("username");
    axios
      .get(`/notification/api?username=${username}`)
      .then(function (response) {
        setNoti(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [noti, setNoti] = useState([]);

  const clearNotifications = () => {
    const username = localStorage.getItem("username");
    axios
      .delete(`/notification/api?username=${username}`)
      .then(function (response) {
        if (!response.error) setNoti([]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return noti.length > 0 ? (
    <div className="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow">
      {noti.length > 0 && (
        <div>
          <button onClick={clearNotifications}>
            <MdClose />
          </button>
          <span>Clear Notifications</span>
        </div>
      )}
      {noti.map((elem, key) => {
        return <NotificationCard noti={elem} key={key} />;
      })}
    </div>
  ) : (
    <NoNoti />
  );
}

function NotificationCard({ noti }) {
  return (
    <div className="flex">
      <img
        className="w-8 h-8 rounded-full"
        src="https://randomuser.me/api/portraits/women/20.jpg"
        alt={noti.senderuser}
      />
      <div className="ms-3 text-sm font-normal">
        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          {noti.fname} {noti.lname}
        </span>
        <div className="mb-2 text-sm font-normal">{noti.message}</div>
        <span className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center">
          {new Date(noti.time).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}
function NotificationCard({ noti }) {
  return (
    <div className="flex">
      <img
        className="w-8 h-8 rounded-full"
        src="https://randomuser.me/api/portraits/women/20.jpg"
        alt={noti.senderuser}
      />
      <div className="ms-3 text-sm font-normal">
        <span className="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
          {noti.fname} {noti.lname}
        </span>
        <div className="mb-2 text-sm font-normal">{noti.message}</div>
        <span className="inline-flex px-2.5 py-1.5 text-xs font-medium text-center">
          {new Date(noti.time).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}

function NoNoti() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-gray-500 text-2xl">No new notifications</div>
    </div>
  );
}

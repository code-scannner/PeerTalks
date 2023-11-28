"use client"
import axios from "axios";
import { useState } from "react";

export default function Profile({ params }) {
  const {username} = params;
  const [user, setUser] = useState({});
    axios
      .get(`/profile/api?username=${username}`)
      .then(function (response) {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  return (
    <>
      <div className="w-full bg-gradient-to-b from-primary-100 to-slate-100 h-72 flex justify-center items-center pb-5">
        <div className="flex items-center w-6/12">
          <img
            className="object-cover w-28 h-28 rounded-xl ring-4 ring-white shadow-lg"
            src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
            alt="profile"
          />
          <div className="ml-8 space-y-1">
            <h1 className="text-xl font-semibold">@{user.username}</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto px-8 py-5 bg-white shadow-profilepage transition-shadow rounded-md w-6/12 max-h-screen -translate-y-12">
        <div className="text-gray-600 text-lg font-semibold mb-4">
          Basic Info
        </div>

        <div className="mb-3">
          <label htmlFor="bio" className="text-gray-600 text-sm block mb-1">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={user.bio}
            className="w-full border rounded-md py-2 px-3 focus:outline-gray-300"
            rows="2"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="myEmail" className="text-gray-600 text-sm block mb-1">
            First Name
          </label>
          <input
            value={user.fname}
            name="email"
            className="w-full border rounded-md py-2 px-3 focus:outline-gray-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="myPhone" className="text-gray-600 text-sm block mb-1">
            Last Name
          </label>
          <input
            value={user.lname}
            id="myPhone"
            name="myPhone"
            className="w-full border rounded-md py-2 px-3  focus:outline-gray-300"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="myGender"
            className="text-gray-600 text-sm block mb-1"
          >
            Gender
          </label>
          <input
            id="myPhone"
            name="myPhone"
            className="w-full border rounded-md py-2 px-3 focus:outline-gray-300"
            value={user.gender}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="myCountry"
            className="text-gray-600 text-sm block mb-1"
          >
            Date of Birth
          </label>
          <input
            type="text"
            id="myCountry"
            value={user.DOB}
            name="myCountry"
            className="w-full border rounded-md py-2 px-3 focus:outline-gray-300"
          />
        </div>
      </div>
    </>
  );
}

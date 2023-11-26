"use client"
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [users,setUsers]=useState({});
  useEffect(() => {
    const username = localStorage.getItem("username");
    axios
      .get(`profile/api?username=${username}`)
      .then(function (response) {
        setUsers(response.data)
        console.log(users)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  
    return (
      <>
        {/* Header Section */}
        <div className="w-full bg-gradient-to-b from-primary-100 to-slate-100 h-72 flex justify-center items-center pb-5">
          <div className="flex items-center w-6/12">
            <img
              className="object-cover w-28 h-28 rounded-xl ring-4 ring-white shadow-lg"
              src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
              alt="profile"
            />
            <div className="ml-8 space-y-1">
              <h1 className="text-xl font-semibold">{users.username}</h1>
              <h2 className="text-sm text-gray-600">More Description</h2>
            </div>
          </div>
        </div>
  
        {/* Main Content Section */}
        <div className="mx-auto px-8 py-5 bg-white shadow-profilepage transition-shadow rounded-md w-6/12 min-h-screen -translate-y-12">
          <div className="text-gray-600 text-lg font-semibold mb-4">Basic Info</div>
  
          {/* Bio */}
          <div className="mb-4">
            <label htmlFor="bio" className="text-gray-600 text-sm block mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              className="w-full border rounded-md py-2 px-3 focus:outline-gray-300"
              rows="2"
            ></textarea>
          </div>
  
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="myEmail" className="text-gray-600 text-sm block mb-1">
              Email
            </label>
            <input
              type="email"
              name = "email"
              className="w-full border rounded-md py-2 px-3 focus:outline-gray-300"
            />
          </div>
  
          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="myPhone" className="text-gray-600 text-sm block mb-1">
              Phone
            </label>
            <input
              type="Phone"
              id="myPhone"
              name="myPhone"
              className="w-full border rounded-md py-2 px-3"
            />
          </div>
  
          {/* Gender */}
          <div className="mb-4">
            <label htmlFor="myGender" className="text-gray-600 text-sm block mb-1">
              Gender
            </label>
            <select className="w-full border rounded-md py-2 px-3">
              <option
               name = "gender" >
                Male
              </option>
              <option name = "gender">
                Female
              </option>
              <option name = "gender">
                Other
              </option>
            </select>
          </div>
  
          {/* Country */}
          <div className="mb-4">
            <label htmlFor="myCountry" className="text-gray-600 text-sm block mb-1">
              Country
            </label>
            <input
              type="text"
              id="myCountry"
              name="myCountry"
              className="w-full border rounded-md py-2 px-3"
            />
          </div>
  
          {/* Language */}
          <div className="mb-4">
            <label htmlFor="myLanguage" className="text-gray-600 text-sm block mb-1">
              Language
            </label>
            <input
              type="text"
              id="myLanguage"
              name="myLanguage"
              className="w-full border rounded-md py-2 px-3"
            />
          </div>
        </div>
      </>
    );
  }
  
"use client"
import Profilepic from "@/components/Profilepic";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [user,setUser]=useState({});
  useEffect(() => {
    const username = localStorage.getItem("username")
    axios
      .get(`profile/api?username=${username}`)
      .then(function (response) {
        setUser(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])
  
    return (
      <>
        <div className="w-full bg-gradient-to-b from-primary-100 to-slate-100 h-72 flex justify-center items-center pb-5">
          <div className="flex items-center w-6/12">
            <Profilepic gender={user.gender} className="h-24 w-24 border border-3 border-gray-600 bg-white shadow-lg"/>
            <div className="ml-8 space-y-1">
              <h1 className="text-xl font-semibold text-gray-600">@{user.username}</h1>
            </div>
          </div>
        </div>
  
        <div className="mx-auto px-8 py-5 bg-white shadow-profilepage transition-shadow rounded-md w-6/12 max-h-screen -translate-y-12">
          <div className="text-gray-600 text-lg font-semibold mb-4">Basic Info</div>
  
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
              name = "email"
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
              className="w-full border rounded-md py-2 px-3"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="myGender" className="text-gray-600 text-sm block mb-1">
              Gender
            </label>
            <select className="w-full border rounded-md py-2 px-3">
              <option
               name = "gender" selected={"Male" == user.gender}>
                Male
              </option>
              <option name = "gender" selected={"Female" == user.gender}>
                Female
              </option>
              <option name = "gender" selected={"Other" == user.gender}>
                Other
              </option>
            </select>
          </div>
  
          <div className="mb-4">
            <label htmlFor="myCountry" className="text-gray-600 text-sm block mb-1">
              Date of Birth
            </label>
            <input
              type="text"
              id="myCountry"
              value={user.DOB}
              name="myCountry"
              className="w-full border rounded-md py-2 px-3"
            />
          </div>
          <button
              type="submit"
              className="font-semibold  bg-primary-500 text-white  px-4 py-2 rounded-md hover:bg-primary-600 transition-colors "
            >Update</button>
        </div>
      </>
    );
  }
  
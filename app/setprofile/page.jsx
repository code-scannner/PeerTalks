"use client"
import React, { useState } from 'react';
import { LuImagePlus } from "react-icons/lu";
export default function UserProfile() {

    const [user, setUser] = useState({});

    // Function to handle profile picture upload
    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setUser({
                    ...user,
                    profilePic: reader.result
                });
            };

            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="from-primary-50 to-primary-300 bg-gradient-to-br flex items-center justify-center h-screen">
            <div className="flex shadow-md sm:w-full md:w-96 lg:w-9/12 rounded-lg min-h-[80vh]">
                <div className="bg-gradient-to-b from-primary-700/80  to-primary-300/80 w-5/12 rounded-l-lg flex flex-col justify-center items-center">
                    <div className=" w-full h-32 flex flex-col justify-center items-center">
                        <h3 className=" text-white text-xl">Set up</h3>
                        <h2 className="text-white text-4xl font-bold"> your profile</h2>
                    </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-r-lg w-7/12 flex flex-col justify-center">
                    <form id="profile-form">
                        <div className="mb-4">
                            <label htmlFor="profilePic" className="block text-gray-500 font-medium mb-2 text-center">
                                {!user.profilePic && <span>Add a profile picture</span>}
                                {user.profilePic ? (
                                    <div className='relative group mx-auto w-fit my-10 '>
                                        <div className='absolute rounded-full flex justify-center bg-black/40 transition-[colors,opacity] items-center inset-0 hover:opacity-100 opacity-0'>
                                            <LuImagePlus className="w-10 h-10 cursor-pointer text-gray-300" />
                                        </div>
                                        <img src={user.profilePic} alt="Profile" className="mb-2 rounded-full w-28 h-28 object-cover items-center mx-auto hover:" />
                                    </div>
                                ) : (
                                    <div className="mb-2 w-20 h-20 bg-gray-200 rounded-full mx-auto my-4 flex justify-center items-center">
                                        <LuImagePlus className="w-10 h-10 cursor-pointer" />
                                    </div>
                                )}
                                <input
                                    type="file"
                                    id="profilePic"
                                    name="profilePic"
                                    accept="image/*"
                                    onChange={handleProfilePicChange}
                                    className="form-input"
                                    hidden
                                />
                            </label>
                        </div>

                        <div className="flex gap-x-4">
                            <div className="w-1/2">
                                <input type="text" id="firstName" name="fname" required placeholder="First Name" className="w-full h-10 rounded-md p-3" />
                            </div>

                            <div className="w-1/2">
                                <input type="text" id="lastName" name="lname" required placeholder="Last Name" className="w-full h-10 rounded-md p-3" />
                            </div>
                        </div>
                        <div className="w-full mt-4">
                            <div className="w-full">
                                <select id="gender" name="gender" required className="w-full h-12 border rounded-md p-2" >
                                    <option value="Other" disable hidden>
                                        Gender
                                    </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="my-4">
                            <textarea
                                id="bio"
                                name="bio"
                                className="w-full border rounded-md py-2 px-3 focus:outline-gray-300"
                                placeholder='Bio'
                                rows="2"
                            ></textarea>
                        </div>
                        <button type="button" className="font-semibold tracking-wider mt-8 bg-primary-500 text-white px-4 py-3 rounded-md hover:bg-primary-600 transition-colors w-full">SAVE PROFILE</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
"use client"

import axios from "axios";

export default function Register(){

  const submit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    
    if(formObject.password != formObject.cpassword) return;

    axios.post('register/api', formObject).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })


  }

    return <>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md sm:w-full md:w-96 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form className="space-y-4" onSubmit={submit}>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name:
              </label>
              <input
                type="text"
                id="firstName"
                name="fname"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name:
              </label>
              <input
                type="text"
                id="lastName"
                name="lname"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender:
              </label>
              <select
                id="gender"
                name="gender"
                className="mt-1 p-2 w-full border rounded-md"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          {/* Add similar markup for other fields */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="cpassword"
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
    </>
}
"use client";

import axios from "axios";

export default function Register() {
  const submit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    if (formObject.password != formObject.cpassword) return;

    axios
      .post("register/api", formObject)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="bg-primary-100 flex items-center justify-center h-screen">
        <div className="flex shadow-md sm:w-full md:w-96 lg:w-1/2 rounded-lg">
          <div className=" bg-gradient-to-b from-primary-600 to-primary-300 w-1/3 bg-primary-600 rounded-l-lg flex flex-col justify-center items-center">
            <h3 className=" text-white text-lg">Welcome to</h3>
            <h2 className="text-white text-3xl font-bold">PEER TALKS</h2>
          </div>
          <div className="bg-white p-8 rounded-r-lg w-2/3">
            <h2 className="text-2xl font-bold mb-4 pr-2 text-gray-700 text-center">
              Sign Up
            </h2>
            <form className="space-y-4" onSubmit={submit}>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="fname"
                    className="mt-1 p-2 w-full border rounded-md "
                    required
                    placeholder="First Name"
                  />
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lname"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                    placeholder="Username"
                  />
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700"
                  >
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                    
                  >
                    <option value="Other" disable hidden>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              {/* Add similar markup for other fields */}
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                    placeholder="Password"
                  />
                </div>

                <div className="w-1/2">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="cpassword"
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-700 w-full"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

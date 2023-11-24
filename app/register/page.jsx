"use client";

import axios from "axios";
import Link from "next/link";

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

  let inputClass = "bg-white mt-1 p-2 w-full border border-gray-200 rounded-md focus:outline-none text-[0.95rem] focus:border-gray-400 transition-colors py-3 px-4";

  return (
    <>
      <div className="from-primary-50 to-primary-300 bg-gradient-to-br flex items-center justify-center h-screen">
        <div className="flex shadow-md sm:w-full md:w-96 lg:w-7/12 rounded-lg min-h-[70vh]">
          <div className="bg-gradient-to-br from-primary-500/20 to-primary-700/20 w-4/12 rounded-l-lg flex flex-col justify-center items-center">
            <div className="bg-primary-500 w-full pl-5 h-32 flex flex-col justify-center">
              <h3 className=" text-white text-xl">Welcome to</h3>
              <h2 className="text-white text-4xl font-bold">PEER TALKS</h2>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-r-lg w-2/3">
            <div className="ml-2 flex flex-col gap-y-1">
              <h2 className="text-2xl font-bold pr-2 text-gray-700">Sign Up</h2>
              <h3 className="text-gray-500 text-sm mb-6">Create an account to start chatting with Peers</h3>
            </div>
            <form className="flex flex-col gap-y-3" onSubmit={submit}>

              <div className="flex gap-x-4">
                <div className="w-1/2">
                  <input type="text" id="username" name="username" className={inputClass} required placeholder="Username" />
                </div>

                <div className="w-1/2">
                  <select id="gender" name="gender" className={inputClass} required >
                    <option value="Other" disable hidden>
                      Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="w-1/2">
                  <input type="text" id="firstName" name="fname" className={inputClass} required placeholder="First Name" />
                </div>

                <div className="w-1/2">
                  <input type="text" id="lastName" name="lname" className={inputClass} required placeholder="Last Name" />
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="w-1/2">
                  <input type="password" id="password" name="password" className={inputClass} required placeholder="Password" />
                </div>

                <div className="w-1/2">
                  <input type="password" id="confirmPassword" name="cpassword" className={inputClass} required placeholder="Confirm Password" />
                </div>
              </div>

              <button
                type="submit"
                className="font-semibold tracking-wider mt-8 bg-primary-500 text-white px-4 py-3 rounded-md hover:bg-primary-600 transition-colors w-full"
              >
                SIGN UP
              </button>

              <div className="mx-auto text-sm text-gray-900">
                Already have an account ? <Link href="/login" className="font-semibold text-gray-950 hover:text-black">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

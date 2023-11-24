 import Link from "next/link";
 export default function Login(){
  let inputClass = "bg-white mt-1 p-2 w-full border border-gray-200 rounded-md focus:outline-none text-[0.95rem] focus:border-gray-400 transition-colors py-3 px-4";

    return  <>
    <div className="from-primary-50 to-primary-300 bg-gradient-to-br flex items-center justify-center h-screen">
      <div className="flex shadow-md sm:w-full md:w-96 lg:w-7/12 rounded-lg min-h-[70vh]">
        <div className="bg-gradient-to-b from-primary-700/80  to-primary-300/80 w-4/12 rounded-l-lg flex flex-col justify-center items-center">
          <div className=" w-full h-32 flex flex-col justify-center items-center">
            <h3 className=" text-white text-xl">Step into</h3>
            <h2 className="text-white text-4xl font-bold">PEER TALKS</h2>
          </div>
        </div>
        <div className="bg-gray-50 p-8 rounded-r-lg w-2/3 flex flex-col justify-center">
          <div className="ml-2 flex flex-col gap-y-1 items-center">
            <h2 className="text-2xl font-bold pr-2 text-gray-700">Welcome Back !</h2>
            <h3 className="text-gray-500 text-sm mb-5">Log In to continue</h3>
          </div>
          <form className="flex flex-col gap-y-3">

            <div className="flex flex-col gap-y-5 items-center">
              <div className="w-7/12">
                <input type="text" id="username" name="username" className={inputClass} required placeholder="Username" />
              </div>
              <div className="w-7/12">
                <input type="password" id="password" name="password" className={inputClass} required placeholder="Password" />
              </div>
            </div>

            <button
              type="submit"
              className="font-semibold tracking-wider mt-8 bg-primary-500 text-white px-4 py-3 rounded-md mx-auto hover:bg-primary-600 transition-colors w-1/2"
            >
              LOG IN
            </button>

            <div className="mx-auto text-sm text-gray-900">
              New here ? <Link href="/register" className="font-semibold text-gray-950 hover:text-black">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
 }

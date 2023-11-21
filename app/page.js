import Image from "next/image";
import intro from "public/image/msg.png";
export default function Home() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className=" bg-primary-100 h-full w-full flex rounded-b-full">
          <div className="mt-40 ml-36 font-bold text-6xl text-primary-700 w-1/2">
            PEER TALKS
            <p className="mt-8 font-semibold text-3xl text-primary-700">
              Where minds meet, ideas greet and conversations take the lead.
            </p>
            <button className=" mt-10 mx-5 text-primary-500 bg-primary-50 border-2 border-solid border-primary-600  hover:text-white hover:bg-primary-600 transition-colors duration-200 font-medium text-xl py-2 px-4 rounded-full">
              Login
            </button>
            <button className=" mt-10 mx-5 text-primary-500 bg-primary-50 border-2 border-solid border-primary-600  hover:text-white hover:bg-primary-600 transition-colors duration-200 font-medium text-xl py-2 px-4 rounded-full">
              Sign Up
            </button>
          </div>
          <div className="h-64 w-96 relative">
            <Image src={intro} className="mt-36" />
          </div>
        </div>
      </div>
    </>
  );
}

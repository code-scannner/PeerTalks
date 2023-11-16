export default function Home() {
    return <>
        <div className="w-full bg-gradient-to-b from-primary-100 to-slate-100 h-72 
            flex justify-center items-center pb-5">
            <div className="flex items-center w-6/12">
                <img className="object-cover w-28 h-28 rounded-xl ring-4 ring-white shadow-lg"
                    src="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
                    alt="profile" />
                <div className="ml-20 space-y-1">
                    <h1>UserName</h1>
                    <h2 className="text-sm text-gray-600">More Description</h2>
                </div>
            </div>
        </div>
        <div className="mx-auto px-8 py-5 bg-white shadow-profilepage transition-shadow rounded-md w-6/12 min-h-screen -translate-y-12" >
            <div className="text-gray-600 text-sm">Basic Info</div>
        </div>
    </>
}
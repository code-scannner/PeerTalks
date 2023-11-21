import Image from "next/image";
import nextImage from "public/image/second.jpg";
export default function LandingPage2(){
    return (
        <>
        <div className="my-20 flex flex-row">
            <div className="w-[30rem] relative ml-12 p-10">
            <Image src={nextImage} className="rounded-md" />
            </div>
        </div>
        </>
    );
    
}
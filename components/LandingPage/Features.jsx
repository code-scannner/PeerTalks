import FeatureCard from "./FeatureCard";
import { MdNotifications } from "react-icons/md";
const features = [
  {
    heading: "Personalized Profiles",
    description: "Safe sign-up, customizable profiles, and privacy controls for user accounts.",
    icon: <MdNotifications fontSize={"10rem"} />
  },
  {
    heading: "Messaging Features",
    description: "Instant conversations with emojis and reactions for real-time messaging.",
    icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  },
  {
    heading: "Notifications and Alerts",
    description: "Push notifications, customizable preferences, and in-app alerts for timely notifications.",
    icon: <MdNotifications fontSize={"10rem"} />
  },
  {
    heading: "Privacy and Security",
    description: "Secure messaging with end-to-end encryption, two-factor authentication, and customizable privacy settings",
    icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  },


];
export default function Features() {
  return (
    <>
      <div className=" bg-primary-200 w-full mt-36">
        <h1 className="font-fancy tracking-wide py-16 font-semibold text-4xl text-primary-700 text-center">
          Why you should choose{" "}
          <span className="text-primary-900 font-bold">PEER TALKS ?</span>
        </h1>
        <div className="grid grid-cols-2">
          {features.map((feature, index) => {
            const left = index %2 == 0;
            return <div key={index} className={`mx-auto p-3 ${left ? "mr-12" : "mt-36 ml-12"}`}>
              <FeatureCard left = {left} heading={feature.heading} desc={feature.description} icon={feature.icon} />
            </div>
})}
        </div>
      </div>
    </>
  );
}

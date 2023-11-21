import FeatureCard from "./FeatureCard";
const features = [
  {
    heading: "Personalized Profiles",
    description: "Safe sign-up, customizable profiles, and privacy controls for user accounts.",
  },
  {
    heading: "Messaging Features",
    description: "Instant conversations with emojis and reactions for real-time messaging.",
  },
  {
    heading: "Notifications and Alerts",
    description: "Push notifications, customizable preferences, and in-app alerts for timely notifications.",
  },
  {
    heading: "Privacy and Security",
    description: "Secure messaging with end-to-end encryption, two-factor authentication, and customizable privacy settings",
  },
  

];
export default function LandingPage3() {
  return (
    <>
      <div className=" bg-primary-200 h-screen w-full mt-36">
        <div className="py-16 font-semibold text-4xl text-primary-500 text-center">
          Why you should choose{" "}
          <span className="text-primary-700 font-bold">PEER TALKS</span> ?
        </div>
        <div className="flex flex-row">
          {features.map((feature, index) => (
            <FeatureCard key={index} heading={feature.heading} desc={feature.description} />
          ))}
        </div>
      </div>
    </>
  );
}

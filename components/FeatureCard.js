export default function FeatureCard({ heading, desc }) {
  return (
    <div className="relative flex flex-col bg-white shadow-md w-96 rounded-xl mx-5 h-52 bg-clip-border">
      <div className=" bg-primary-500 rounded-t-xl">
        <h5 className="block p-5 font-fancy text-xl text-center text-primary-50 antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {heading}
        </h5>
      </div>
      <div className="p-6">
        <p className="block font-fancy text-base text-primary-600 antialiased font-light leading-relaxed text-inherit">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default function ImpactSection() {
    return (
      <div className="bg-blue-500 text-white py-12 px-8">
        <div className="flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto">
          {/* Left Section */}
          <div className="md:w-1/4 mb-8 md:mb-0 md:pr-6"> {/* Added padding-right for margin */}
            <h1 className="text-2xl font-bold leading-relaxed mb-6">
              Discover UNESCO's impact around the world and the organisation's
              endeavour to build durable peace.
            </h1>
            <div className="flex flex-col space-y-4">
              <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105">
                Key Challenges
              </button>
              <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105">
                Key Achievements
              </button>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:w-3/4">
            <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center p-6">
              <img
                src="/images/interactive-map.jpg"
                alt="Interactive Map"
                className="w-full h-36 object-cover"
              />
              <h2 className="text-md font-bold text-center mt-4 text-black">
                Interactive Map
              </h2>
            </div>
            <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center p-6">
              <img
                src="/images/lists-designations.jpg"
                alt="Lists and Designations"
                className="w-full h-36 object-cover"
              />
              <h2 className="text-md font-bold text-center mt-4 text-black">
                Lists and Designations
              </h2>
            </div>
            <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center p-6">
              <img
                src="/images/presence-worldwide.jpg"
                alt="Presence Worldwide"
                className="w-full h-36 object-cover"
              />
              <h2 className="text-md font-bold text-center mt-4 text-black">
                Presence Worldwide
              </h2>
            </div>
            <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl flex flex-col justify-center items-center p-6">
              <img
                src="/images/standard-setting.jpg"
                alt="Standard Setting"
                className="w-full h-36 object-cover"
              />
              <h2 className="text-md font-bold text-center mt-4 text-black">
                Standard setting & legal affairs
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
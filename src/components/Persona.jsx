import { useState } from "react";

function Persona() {
  const [showCard, setShowCard] = useState(false);

  const handleViewMore = () => {
    setShowCard(true);
  };

  const handleClose = () => {
    setShowCard(false);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="text-center">
        
        <button
          onClick={handleViewMore}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          View More
        </button>

        {/* Profile Card */}
        {showCard && (
          <div
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-6 shadow-lg w-80 transition-transform duration-700 ease-in-out ${
              showCard ? "translate-y-1/2" : "-translate-y-full"
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">Raymond Njagala</h3>
            <p className="text-gray-700">CEO of AgriHub</p>
            <p className="text-gray-600 mt-2">
              Raymond Njagala is passionate about leveraging technology to connect farmers
              and vendors across Uganda, ensuring they have access to markets and transportation solutions.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Persona;











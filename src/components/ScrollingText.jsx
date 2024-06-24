import React from 'react'

function ScrollingText() {
  return (
    <div className="flex justify-center items-center ">
      <div className="overflow-hidden w-full ">
        <div className="flex animate-scrollText">
          <span className="text-6xl bana">WELCOME TO AGRIHUB FARMING DIRECTORY!!</span>
         {/* max-w-2xl */}
        </div>
      </div>
    </div>
  )
}

export default ScrollingText
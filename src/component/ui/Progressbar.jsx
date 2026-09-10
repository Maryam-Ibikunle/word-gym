import React from 'react'

const Progressbar = ({progress, color}) => {

  return (
    <div className="relative w-30 md:w-64 h-8">
        <div className="absolute top-1/3 w-full h-2 bg-gray-200 rounded-full " />
        <div className={`absolute top-1/3 h-2 ${color} rounded-full`} style={{ width: `${progress}%` }}/>
    </div>
  )
}

export default Progressbar
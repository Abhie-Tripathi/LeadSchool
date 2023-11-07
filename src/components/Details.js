import React from 'react'

const Details = ({data}) => {
  return (
    <div>
        <p className='text-2xl text-gray-800 font-semibold'>Country: {data.country}</p>
        <p className='text-2xl text-gray-800 font-semibold'>State: {data.state}</p>
        <p className='text-2xl text-gray-800 font-semibold'>Place: {data.place}</p>
    </div>
  )
}

export default Details
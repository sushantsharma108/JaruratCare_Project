import React from 'react'

const Counter = ({value}) => {
  return (
      <div className='flex items-center justify-center'>
          <p className='mt-10 rounded-full px-10 py-4 bg-black text-white font-semibold'>
              Counter: {value}
          </p>
      </div>
  )
}

export default Counter
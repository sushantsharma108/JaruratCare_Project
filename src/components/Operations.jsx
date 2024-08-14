import React from 'react'

const Operations = ({handleClickAdd,handleClickSubtract}) => {
  return (
      <div className='flex items-center justify-center gap-32'>
          <button onClick={handleClickSubtract} className='mt-10 rounded-full px-5 py-4 bg-red-500 text-white font-semibold'>Subtract-1</button>
          <button onClick={handleClickAdd} className='mt-10 rounded-full px-5 py-4 bg-green-600 text-white font-semibold'>Add+1</button>
      </div>
  )
}

export default Operations

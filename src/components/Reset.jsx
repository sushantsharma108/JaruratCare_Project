import React from 'react'

const Reset = ({handleClickReset}) => {
  return (
      <div className='flex items-center justify-center'>
          <button onClick={handleClickReset} className='mt-10 rounded-full px-5 py-4 bg-slate-50 font-semibold'>Reset</button>
      </div>
  )
}

export default Reset

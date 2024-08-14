import React, { useState } from 'react'
import Counter from './components/Counter';
import Operations from './components/Operations';
import ProgressBar from './components/ProgressBar';
import Reset from './components/Reset';
import Header from './components/Header';

const App = () => {
  const [value, setValue] = useState(0);
  const maxValue = 150; // maximum value for progress bar
  const handleClickAdd = () => {
    if (value === maxValue) return;
    setValue(value + 1);
  }
  const handleClickSubtract = () => {
    if (!value) return;
    setValue(value - 1);
  }
  const percentage = parseInt((value / maxValue) * 100);
  const handleClickReset = () => {
    if (window.confirm('Are you sure you want to reset ?')) {
      setValue(0);
    }
  }
  return (
    <div className='w-full h-screen bg-gradient-to-br from-blue-400 to-green-400'>
      <Header/>

      <Counter value={value} />

      <Operations handleClickAdd={handleClickAdd} handleClickSubtract={handleClickSubtract} />

      <ProgressBar percentage={percentage} />

      <Reset handleClickReset={handleClickReset} />

    </div>
  )
}

export default App
'use client';
import React, { useState } from 'react';

const CounterBtn = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div className='space-x-4 flex justify-center items-center py-10'>
      <button
        className='bg-purple-400 px-5 py-2 text-black font-medium'
        onClick={() => setCounter((counter += 1))}
      >
        Increase ++
      </button>
      <button
        className='bg-purple-400 px-5 py-2 text-black font-medium'
        onClick={() => setCounter((counter = -1))}
      >
        Decrease --
      </button>
      <p className='text-4xl'>{counter}</p>
    </div>
  );
};

export default CounterBtn;

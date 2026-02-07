"use client"
import React from 'react'
import { useState } from 'react'
const Mybtn = ( { count, onClick}) => {
   
  return (
    <div className='h-fit  w-3xl shadow-amber-400 rounded-2xl m-0.5 justify-center border-2 border-purple-200 flex flex-col items-center'>
        <h3 className='heading text-purple-400 underline-offset-8'>Button component</h3>
        <p>button count= {count}</p>
        <button className='w-max p-3 rounded-2xl bg-purple-200 text-amber-950 m-0.5 cursor-pointer hover:bg-purple-300 transition-colors duration-200' onClick={onClick}>click me</button>
    </div>
  )
}

export default Mybtn
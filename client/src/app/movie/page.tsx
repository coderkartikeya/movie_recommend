'use client'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {
    const useSearch=useSearchParams();
    const title=useSearch.get('name');
    const overview=useSearch.get('info');
    const [recommended,getRecommended]=useState([])
    useEffect(()=>{
      const func=async()=>{
        const res=await fetch('/api/movie',
          {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name:title})
          }
        );
        const data=await res.json();
        getRecommended(data.data)

        
      }
      func();
    },[])
    console.log(recommended)
    

  return (
    <div className='flex flex-col p-10'>
      <h1 className='text-4xl p-10'>{title}</h1>
      <p className='text-xxl'>{overview}</p>
      <h2 className='p-10 text-2xl '>Recommended movies</h2>

      {recommended.map((e)=>{
        return (
          <h1>{e}</h1>
        )
      })}
      
    </div>
  )
}

export default page
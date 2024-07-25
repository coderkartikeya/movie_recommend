// pages/index.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import mov from '../../json/movies_recommend.json'
import { Interface } from 'node:readline/promises';
import Link from 'next/link';

interface movie{
  id: number,
  title: string,
  release_data: string,
  overview:string

  
}

const Home: React.FC = () => {
  const [data,setData] =useState([]);
  useEffect(()=>setData(mov),[])
  
  
  

  return (
    <div className='flex items-center flex-col'>
      <h1 className='text-6xl font-bold items-center'>Movie Recommendation systum</h1>
    <div className='grid md:grid-cols-4 grid-cols-1'>
      {data.map((e)=>{
        return(
          <Link href={{
            pathname:`/movie`,
            query:{name:e.title,info:e.overview}
          }} key={e.id} >
          <div className='p-10 bg-slate-100 m-5'>
            <h1>{e.title}</h1>
            <h2>{e.release_data}</h2>
          </div>
          </Link>

        )
      })}

    </div>
    </div>
  );
};

export default Home;

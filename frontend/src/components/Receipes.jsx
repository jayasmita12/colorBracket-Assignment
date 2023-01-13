import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


export const Receipes = () => {
    const [receipes,setReceipes] =useState([])
    useEffect(()=>{
        const getreceipes = async()=>{
            let res = await fetch("http://localhost:5500/receipes")
            let data = await res.json()
            setReceipes(data.receipes)
        }
        getreceipes()
    },[])
  return (
    <div className='grid sm:grid-cols-3 my-5 grid-cols-1 sm:gap-2 gap-y-4 px-5 mx-auto max-w-screen-xl  justify-around'>
        {receipes.map((e)=>{
            return(
              <Link to={`${e._id}`}> <div className='rounded-xl shadow-xl shadow-pink-200 '>
                    <img src="" alt="image.jpg" className='bg-purple-700 h-20 rounded-t-md' />
                    <div className='pl-5 space-y-2'>
                    <h2 className='text-xl font-bold'>{e.name.charAt(0).toUpperCase() + e.name.slice(1)}</h2>
                    <p className='font-semibold'>Created By <span className='text-pink-700 font-bold'>{e.creator_id.user_id.charAt(0).toUpperCase() +e.creator_id.user_id.slice(1)}</span></p>
                    <p className='capitalize pb-2'>{e.desc}</p>
                    </div>
                </div>
                </Link> 
            )
        })}
    </div>
  )
}

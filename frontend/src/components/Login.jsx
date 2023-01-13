import React,{useEffect, useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
import errorimg from "../error.svg"

export const Login = () => {
    const [user_id,setUserId]=useState("")
    const [password,setPasword]=useState("")
    const [error,setError]=useState(false)
    const [errormsg,setmsg] =useState("")
    const navigate = useNavigate()

    const userLogin=async(e)=>{
        e.preventDefault()

     

           let  res = await fetch("http://localhost:5500/users",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({user_id,password})
            })
            res= await res.json()
        
        
            if(res.errors){
            let msg=res.errors[res.errors.length-1].msg
            console.log(msg)
            setError(true)
            setmsg(msg)
        }
        else{
            setError(false)
            setmsg("")
            toast("login Success!");
            setTimeout(()=>{
                navigate("/receipes")
            },2000)
        }
        
       
    }
  
    
  return (
    <div>
        <ToastContainer />
    <main className='text-white max-w-screen-sm mx-3 sm:mx-auto my-[5rem] bg-[#080c2b] rounded-xl shadow-xl shadow-pink-900 '>
        <div className='sm:px-10 px-4 py-10'>
            <h3 className='text-4xl font-bold text-center mb-4'>Login</h3>
            <form action="" className='flex flex-col gap-y-2'>
                {error ? <div className='text-red-600 rounded-lg flex gap-x-3 pl-3 py-1 border-2 border-red-600'>
                    <img src={errorimg} alt="" />
                    <p>{errormsg}</p></div>:""}
                <input type="text" className='input-field'value={user_id} onChange={(e)=>{
                    setUserId(e.target.value)
              
                }} placeholder='UserId'/> 
                <input type="password" className='input-field' value={password} onChange={(e)=>{
                    setPasword(e.target.value)
               
                }} placeholder='Password' /> 
                <button className='input-btn' onClick={userLogin}>Login</button>
            </form>
        </div>
    </main>
    </div>
  )
}

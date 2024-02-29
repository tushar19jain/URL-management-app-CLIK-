"use client"
import { addUser } from "@/services/userService";
import { useState } from "react"
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
export default function Signup(){
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const submitData=(event)=>{
        event.preventDefault();
        
        try {
           const result = addUser(data)
           console.log(result)
           toast.success('Successfully registered!')
           
          
        } catch (error) {
            console.log(error)
            toast.error('Can not complete the request!')
           
        }
    }

    return(
        <div>
             <div><Toaster/></div>
             <nav className='flex justify-between xl:px-20 px-10 py-10'>
              <h1 className="text-2xl font-extrabold">CLIK</h1>
            </nav>
            <div>
                <h1 className='text-xl xl:text-center xl:pl-0 pl-10 -bold'>Fill out your details</h1>
                <form onSubmit={submitData} className="flex flex-col justify-center xl:px-[480px] gap-10 items-center py-10 mx-auto">
                   <input
                   className="py-3 w-4/5 px-3 border rounded-md"
                   type="text"
                   placeholder="Enter your name"
                   value={data.name}
                   onChange={(event)=>{
                    setData({
                        ...data,
                        name:event.target.value
                    })
                   }}        
                   ></input>
                     <input
                     className="py-3 w-4/5 px-3 border rounded-md"
                   type="email"
                   placeholder="Enter your email"
                   value={data.email}
                   onChange={(event)=>{
                    setData({
                        ...data,
                        email:event.target.value
                    })
                   }}        
                   ></input>
                     <input
                   type="password"
                   className="py-3 px-3 w-4/5 border rounded-md"
                   placeholder="Create your password"
                   value={data.password}
                   onChange={(event)=>{
                    setData({
                        ...data,
                        password:event.target.value
                    })
                   }}        
                   ></input>
                   <input
                   className='bg-black px-10 text-white font-bold rounded-xl py-3'
                   type="submit"
                   value={"Register"}
                   ></input>
                </form>
            </div>
        </div>
    )
}
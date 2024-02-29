"use client"
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useState } from "react"
import { login } from "@/services/userService";
import { useRouter } from "next/navigation";
    export default function Login(){
    const router = useRouter();
    const [logindata,setLoginData] = useState({
        email:"",
        password:""
    });
    const loginFormSubmited= async(event)=>{
        event.preventDefault();
        console.log(logindata)
        if(logindata.email.trim()  === " " || logindata.password.trim() === " "){
           toast.error("Invalid data !!")
           return
        }
            try {
                const result = await login(logindata);
                if(result.success == false){
                    toast.error("Can't login")
                }if(result.success == true){
                    toast.success("Login success")   
                    router.push("/dashboard")
                }
            } catch (error) {
                console.log(error)   
            }
    }
    return(
        <div>
        <div><Toaster/></div>
        <nav className='flex justify-between xl:px-20 px-10 py-10'>
         <h1 className="text-2xl font-extrabold">CLIK</h1>
       </nav>
       <div>
           <h1 className='text-xl xl:text-center xl:pl-0 pl-10 -bold'>Login</h1>
           <form onSubmit={loginFormSubmited} className="flex flex-col justify-center xl:px-[480px] gap-10 items-center py-10 mx-auto">
                <input
                className="py-3 w-4/5 px-3 border rounded-md"
              type="email"
              placeholder="Enter your email"
              value={logindata.email}
              onChange={(event)=>{
               setLoginData({
                   ...logindata,
                   email:event.target.value
               })
              }}        
              ></input>
                <input
              type="password"
              className="py-3 px-3 w-4/5 border rounded-md"
              placeholder="Enter your password"
              value={logindata.password}
              onChange={(event)=>{
               setLoginData({
                   ...logindata,
                   password:event.target.value
               })
              }}        
              ></input>
              <input
              className='bg-black px-10 text-white font-bold rounded-xl py-3'
              type="submit"
              value={"Login"}
              ></input>
           </form>
       </div>
   </div>
    )
}
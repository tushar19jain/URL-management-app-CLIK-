"use client"
import { getUserId, uploadUrl } from "@/services/userService"
import { useEffect,useState} from "react"
import toast, { Toaster } from "react-hot-toast"
export default function newurl(){
//const [userId , setUserID] = useState(undefined)
useEffect(()=>{
    const userObjectID = getUserId();
    userObjectID.then(result=>{
      setUrlBody({
        ...urlBody,
        user : result
      }
      )
    })  
},[])
const [urlBody,setUrlBody] = useState({
    urlTitle:undefined,
    urlDescription:undefined,
    url:undefined,
    user:"" 
})
const urlSubmit=(event)=>{
    event.preventDefault();
    if(urlBody.urlTitle == undefined || urlBody.url == undefined || urlBody.urlDescription == undefined){
        toast.error("Some fields are required")
        return
    }
    else{
        console.log(" Url body before submit --> " + {urlBody})
        try {
            const result = uploadUrl(urlBody)
            toast.success("URL Uploaded success!")
             
        } catch (error) {
            console.log(error)
            toast.error("URL can not be uploaded!")
        }
    }
}
        return(
            <>
            <div>
            <Toaster/>
             <nav className='flex justify-between items-center xl:px-20 px-10 py-10'>
              <h1 className="text-2xl font-extrabold">CLIK</h1>
            </nav>
            <section>
            <h1 className='text-2xl font-extrabold text-center my-5'>Create a new URL</h1>
                <form onSubmit={urlSubmit}  className='border flex flex-col  w-10/12 xl:w-3/12 mx-auto py-5 rounded-md px-5'>
                        <lable>URL Title</lable>
                        <input
                        className='border px-2 py-1 my-3 border-gray-300 rounded-lg'
                        type="text"
                        onChange={(event)=>{
                            setUrlBody({
                                ...urlBody,
                                urlTitle:event.target.value,
                            })
                        }}
                        value={urlBody.urlTitle}
                        ></input>
                        <lable>URL Link</lable>
                        <input
                        className='border px-2 py-1 my-3 border-gray-300 rounded-lg'
                        type="link"
                        onChange={(event)=>{
                            setUrlBody({
                                ...urlBody,
                                url:event.target.value
                            })
                        }}
                        value={urlBody.url}
                        ></input>
                        <lable>URL Description</lable>
                        <input
                        className='border px-2 py-1 my-3 border-gray-300 rounded-lg'
                        type="text"
                        onChange={(event)=>{
                            setUrlBody({
                                ...urlBody,
                                urlDescription:event.target.value
                            })
                        }}
                        value={urlBody.urlDescription}
                        ></input>
                        <input
                        type="submit"
                        className='bg-black text-white py-2 rounded-full my-5'
                        value={"Create"}
                        ></input>
                </form>
            </section>
            </div>
            </>            
        )
}
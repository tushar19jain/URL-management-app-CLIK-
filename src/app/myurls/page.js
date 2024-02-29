"use client"
import UrlBody from "@/components/UrlBody";
import { getUrls } from "@/services/urlService";
import { useEffect, useState } from "react";
export default function Page(){
    const[userUrls,setUserUrls]=useState([])
    useEffect(()=>{
        const urls = getUrls();
        urls.then(result=>{
            setUserUrls(result)
        })
     }) 
    return(
        <div>
             <nav className='flex justify-between xl:px-20 px-10 py-10'>
              <h1 className="text-2xl font-extrabold">CLIK</h1>
             </nav>
             <h1 className='text-center text-2xl font-bold'>
                My Urls
             </h1>
             <div className='border flex mt-10 flex-col gap-5 xl:w-4/12 mx-auto w-11/12 xl:px-5 px-3 py-5'>
                {userUrls.map(url=>(
                    <UrlBody
                        title={url.urlTitle}
                        url={url.url}
                        para={url.urlDescription}

                    />
                )
                    
                )}
             </div>
        </div>
    )
}
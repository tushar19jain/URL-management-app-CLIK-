"use client"
import Link from "next/link";
export default function Home() {
  return (
      <div>
          <nav className='flex justify-between xl:px-20 px-10 py-10'>
              <h1 className="text-2xl font-extrabold">CLIK</h1>
          </nav>
          <h1 className="text-center mt-20 xl:mt-40 text-4xl xl:text-5xl font-extrabold">All your URLS🔗at one place</h1>
          <div className='flex mt-20 flex-col items-center'>
              <Link href={'/signup'}><button className='bg-black py-2 px-5 my-8 text-white font-bold rounded-md'>Join now</button></Link>
             <Link href={'/login'}><p>Or login to your account</p></Link> 
          </div>
      </div>
     
  );
}

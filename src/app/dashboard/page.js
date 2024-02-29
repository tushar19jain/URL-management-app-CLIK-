import Link from "next/link";

export default function Page(){
    return(
        <>
            <div>
             <nav className='flex justify-between items-center xl:px-20 px-10 py-10'>
              <h1 className="text-2xl font-extrabold">CLIK</h1>
            </nav>
            <section className="urlSection border flex flex-col items-center gap-3 rounded-md border-gray-300 mx-5 my-5 px-3 py-2 xl:mx-20 xl:my-20">
            <Link href={'/myurls'}><button className="my-3 bg-black text-white py-2 px-4 rounded-lg">Show my URLS</button></Link> 
             <Link href={'/newurl'}>  <button className="my-3 bg-white text-black border border-black py-2 px-4 rounded-lg">Create urls</button></Link> 
            </section>
       </div>   
        </>
    )
}
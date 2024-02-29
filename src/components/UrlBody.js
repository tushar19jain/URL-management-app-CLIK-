import { CiLocationArrow1 } from "react-icons/ci";
export default function UrlBody(Props){
    return(
        <div className='border shadow-lg flex flex-col justify-center items-start shadow-gray-200 px-3 py-3 rounded-md'>
            <h1 className='font-extrabold'>{Props.title}</h1>
            <div className='flex items-center gap-5'>
            <CiLocationArrow1 /><a className='text-blue-700 w-5/12' href={Props.url}>{Props.url}</a>
            </div>
            <p className='text-gray-500 w-11/12'>{Props.para}</p>
        </div>
    )
}
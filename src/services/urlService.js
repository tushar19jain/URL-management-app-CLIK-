import { httpAxios } from "@/helper/httpHelper";

export const uploadUrl= (urlData)=>{
    const result = httpAxios.post("/api/newurl")
    .then((response)=>response.data)
    return result
}

export const getUrls =async()=>{
    const result = await httpAxios.get("/api/geturls")
    .then((response)=>response.data)
    return result
}

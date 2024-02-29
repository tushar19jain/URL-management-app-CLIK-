import { httpAxios } from "@/helper/httpHelper";

export function addUser(user){
    
    const result = httpAxios
    .post("/api/users",user)
    .then((response)=> response.data)
    return result
}

export async function login(loginData){

    const result = await httpAxios
    .post("/api/login",loginData)
    .then((response)=> response.data)
    return result
}

export async function uploadUrl(urlData){
    const result = await httpAxios
    .post("/api/newurl",urlData)
    .then((response)=>response.data)
    return result
}

export function getUserId(){
    const result = httpAxios
    .get('/api/current')
    .then((response)=>response.data)
    console.log("result:"+result)
    return result
}

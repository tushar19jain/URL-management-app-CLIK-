import { NextResponse } from 'next/server'
import { login } from './services/userService';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    
    const loginToken = request.cookies.get("logintoken")?.value;
    const loginUserNotAccessPaths=request.nextUrl.pathname == "/login" || 
                                  request.nextUrl.pathname == "/signup";

    if(loginUserNotAccessPaths){
        if(loginToken){
            return NextResponse.redirect(new URL("/dashboard",request.url))
        }
    }else{
        if(!loginToken){
            return NextResponse.redirect(new URL("/login",request.url));
        }
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard',
    '/login',
    '/signup',
    '/api/current',
    '/newurl',
    '/myurls',
    '/geturls'
  ]
}
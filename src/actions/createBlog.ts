'use server'

import { INews } from "@/app/news/page"

export const createBlog = async(data:INews)=>{
    const res =await fetch(`https://ku-server-eta.vercel.app/api/v1/news/create-news`,{
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data),
        cache:'no-store',
    })
    const newsInfo = await res.json()
    return newsInfo
}
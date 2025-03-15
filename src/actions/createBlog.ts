'use server'

import { INews } from "@/app/news/page"

export const createBlog = async(data:INews)=>{
    const res =await fetch(`http://localhost:5000/api/v1/news/create-news`,{
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
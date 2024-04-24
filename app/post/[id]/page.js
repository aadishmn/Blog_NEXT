"use client"
import { useState } from "react";
import { useEffect } from "react";

export default function Post({params}){

    const id= params.id;
    console.log(id)
    const [posts,setPosts]= useState(null);
    useEffect(()=>{
       
        const url =process.env.NEXT_PUBLIC_API_URL+'/post/'+id
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(res=> setPosts(res))
    },[])
    return (
        <>
      {   posts && <main className="container mx-auto px-4 py-6">
            <h2 className="text-4xl font-bold mb-4">{posts.title}</h2>
            <p className="text-gray-500">{posts.created_at_format}</p>
            <img width={300} height ={200} src={posts.image}  alt="Post Image" className="my-4"/>
            <p>{posts.description}</p>
            </main>}
        </>
    )
}
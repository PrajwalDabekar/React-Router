import React from "react";
import { Link, useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()

    return(
        
        <div className="bg-orange-400 item-center flex justify-center">
        <div className="pl-12 py-6 ml-12">
            <img className="rounded-full" src={data.avatar_url} alt="Github Picture" width={300}/>
        </div>
            <div className="text-4xl text-orange-400 bg-white rounded-xl italic px-5 py-7 m-auto"><Link to='https://github.com/PrajwalDabekar?tab=repositories' className="underline">Github Repos</Link>:{data.public_repos}</div>
        </div>
        
        
    )
}

export default Github

export const githubInfo = async()=>{
    const res = await fetch('https://api.github.com/users/PrajwalDabekar')
    return res.json()
}
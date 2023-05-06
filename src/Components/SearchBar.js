import React,{useState} from "react";
import Youtube from "../apis/Youtube";
function SearchBar(addContent){
    let [searchTerm,setSearchTerm]=useState('');
    const getVideos=()=>{
        Youtube.get("/search",{
            params:{
                q:searchTerm,
                type:'video'
            }
        })
        .then(res=>console.log(res))
        .catch()
    }
    return(
        <div>
            <input
            type="text"
            placeholder="Search"
            onChange={(e)=>setSearchTerm(e.target.value)}
            value={searchTerm}
            />
            <button onClick={getVideos}>Search</button>
        </div>
    )
}

export default SearchBar;
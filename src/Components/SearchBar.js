import React,{useState} from "react";
import Youtube from "../apis/Youtube";
function SearchBar({addContent,selectVideo}){
    let [searchTerm,setSearchTerm]=useState('');
    const getVideos=()=>{
        Youtube.get("/search",{
            params:{
                q:searchTerm,
                type:'video',
            }
        })
        .then(res=>
            {
                addContent(res.data.items)
                selectVideo(res.data.items[0])
                return; 
            })
        .catch(err=>console.log(err))
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
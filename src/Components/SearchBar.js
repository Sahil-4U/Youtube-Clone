import React,{useState} from "react";
import { Button,Input, InputGroup} from 'reactstrap';

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
            <Input
            type="text"
            placeholder="Search"
            onChange={(e)=>setSearchTerm(e.target.value)}
            value={searchTerm}
            />
            {/* <button onClick={getVideos}>Search</button> */}
            <Button 
            color="primary"
            outline
            size="lg"
            onClick={getVideos}>Search</Button>
        </div>
    )
}

export default SearchBar;
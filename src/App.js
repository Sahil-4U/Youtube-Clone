import React,{useEffect, useState} from "react";
import SearchBar from "./Components/SearchBar";
import Player from "./Components/Player";
import Videolist from "./Components/Videolist";
import Youtube from "./apis/Youtube";




function App(){
  document.title="Youtube";
  let [video,setVideo]=useState([]);
  let [selectedVideo,setSelectedVideo]=useState(null);
  console.log(video)

 useEffect(()=>{
  
    Youtube.get("/search",{
        params:{
            q:'React js tutorial',
            type:'video',
        }
    })
    .then(res=>
        {
            setVideo(res.data.items)
            setSelectedVideo(res.data.items[0])
            return; 
        })
    .catch(err=>console.log(err))
      },[])


  return(
    <div>
      <SearchBar addContent={setVideo} selectVideo={setSelectedVideo}/>
      <div style={{display:"flex"}}>
        <div style={{width:"70vw"}}>
          <Player video={selectedVideo}/>
        </div>
        <div style={{width:"30vw"}}>
            <Videolist allVideos={video} selectVideo={setSelectedVideo}/>
        </div>
      </div>
    </div>
  )
}

export default App;
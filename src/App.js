import React,{useState} from "react";
import SearchBar from "./Components/SearchBar";




function App(){
  let [video,setVideo]=useState([]);
  let [selectedVideo,setSelectedVideo]=useState(null);
  return(
    <div>
      <SearchBar addContent={setVideo}/>
      <h1>VideoList</h1>
      <h1>Selected Video</h1>
    </div>
  )
}

export default App;
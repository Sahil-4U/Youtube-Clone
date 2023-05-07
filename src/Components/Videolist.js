

const Videolist=({allVideos,selectVideo})=>{
return (
    <div className="video-list">
        {
            allVideos.map((video)=>
            (
                <div onClick={()=>{selectVideo(video)}}>
                    <img src={video.snippet.thumbnails.default.url} alt="image here"/>
                </div>
            ))
        }
    </div>
)
}

export default Videolist;
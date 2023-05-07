

const Player=({video})=>{
    if(!video){
        return <div>loading...</div>
    }
    let videoId=video.id.videoId;
    let videoSrc=`https://www.youtube.com/embed/${videoId}`;
    return(
    <div>
        <iframe width="560" height="315" src={videoSrc} title="YouTube video player"></iframe>
    </div>
    )
}

export default Player;
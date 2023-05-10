import { Container } from "reactstrap";


const Player=({video})=>{
    if(!video){
        return <div>loading...</div>
    }
    let videoId=video.id.videoId;
    let videoSrc=`https://www.youtube.com/embed/${videoId}`;
    return(
    <Container
    className="bg-light border"
    width="lg"
    
    >
        <iframe width="560" height="315" src={videoSrc} title="YouTube video player" ></iframe>
    </Container>
    )
}

export default Player;
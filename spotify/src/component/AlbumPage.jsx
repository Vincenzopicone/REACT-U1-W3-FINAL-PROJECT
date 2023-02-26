import TopBar from "./ToBar"
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const AlbumPage = () => {
  const [album, setAlbum]= useState();
  const [track, setTrack]=useState()
  const params = useParams()
  const dispatch = useDispatch()  
  const getFetchSong = async () => {
    try {
      const response = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/album/${params.id}`)      
      if (response.ok) {
      const data = await response.json()
      setAlbum (data)
      setTrack(data.tracks.data)
      } else {
        console.log("errore nel fetch")   
      }
    } catch(err) {
      console.log("errore grave")
    }
  }
  useEffect(()=>{
    getFetchSong()  
  }, [])
    return (
        <>
        <div className="col-12 col-md-10 offset-md-2 mainPage">
            <TopBar/>      
        </div>
        <div className="row d-flex justify-content-center">
          <div className=" pt-5 text-center" id="img-container" key={album?.id}>
          <img src={album?.cover} className="img-fluid" alt="Album" />
             <div className="mt-4 text-center">
           <p className="album-title">{album?.title}</p>
            </div>
         <div className="text-center">
          <p className="artist-name">{album?.artist.name}</p>
          </div>
         <div className="mt-4 text-center">
             <button id="btnPlay" className="btn btn-success" type="button">Play</button>
         </div>         
          </div>
          <div className="col-md-8 p-5">
            <div className="row">
              <div className="col-md-10 mb-5" id="trackList">                
              {track && track.map((song)=> (
          <div className="py-3 trackHover" key={song?.id} onClick={()=> dispatch({type: "PLAY_SONG", payload: song})}>
          <Link href="#" className="card-title trackHover px-3" style={{color:"white"}} >{
            song?.title
          }</Link>
          <small className="duration" style={{color:"white"}}>{Math.floor(
            parseInt(song?.duration) / 60 
          )}:{
    parseInt(song?.duration) % 60 < 10
      ? "0" + (parseInt(song?.duration) % 60)
      : parseInt(song?.duration) % 60
  }</small>
      </div>           
         ))}               
              </div>
            </div>
          </div>
        </div>
        </>

    )
}

export default AlbumPage


  
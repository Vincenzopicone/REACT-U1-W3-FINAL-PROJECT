import TopBar from "./ToBar"
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ArtistPage = () => {  

  const [artist, setArtist]= useState();
  const [track, setTrack]=useState()
  const params = useParams()
  const artistName = useSelector(state=>state.app.artist)
 
  const getFetchSong = async () => {
    try {
      const response = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/artist/${params.id}`)
      
      
      if (response.ok) {
      const data = await response.json()
      setArtist (data)
      } else {
        console.log("errore fetch params")    

      }

      const responseTrack = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`)
      if (responseTrack.ok) {
        const trackData = await responseTrack.json()
        setTrack(trackData.data)
        console.log(trackData.data)
      } else {
        console.log("errore fetch artist")

      }

    } catch(err) {
      console.log("errore nel ")

    }
  }

 /*  const getFetchTrack = async () => {
    try {
      
      if (responseTrack.ok) {
        const trackData = await responseTrack.json()
        setTrack(trackData)
        console.log(track)
      } else {

      }
    } catch(err) { 

    }
  } */

  useEffect(()=>{
    getFetchSong()
 
  }, [])
      

 

    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
        <TopBar/>

        <div className="row">
          <div className="col-12 col-md-10 col-lg-10 mt-5">
            <h2 className="titleMain">{artist?.name}</h2> 
            <div id="followers"></div>
            <div className="d-flex justify-content-center" id="button-container">
              <Button variant="success" className=" mr-2 mainButton d-none" id="playButton">PLAY</Button>
              <button
                className="btn btn-outline-light mainButton d-none"
                id="followButton">
                FOLLOW
              </button>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
            <div className="row d-flex justify-content-evenly text-center imgLinks" >              
              {track && track.map ((e)=> (
            <div className="col-3 m-1"/* onClick={navigate()}} */>
            <Link><img key={e?.id} src={e?.artist.picture_medium} alt="Cover" /> </Link>
            <div className="p-2 fs-0">
            <Link className="text-decoration-none text-light" to={`/album/${e?.album.id}`}><p>Album: {e?.album.title}</p> </Link>
            <Link className="text-decoration-none text-light" to={`/artist/${e?.artist.id}`}><p>Artist: {e?.artist.name}</p></Link>
            </div>
            </div>
            ) ) }  
            
            </div>
          </div>
        </div>
      </div>
    )
}

export default ArtistPage



      {/* {track.map((song)=> (
                <div className="col-sm-auto col-md-auto text-center mb-5" key={song?.id}>
            <Link href={song?.album.id}>
              <img className="img-fluid" src={song?.album.cover_medium} alt="1" />
            </Link>
            <p>
              <Link >{song?.title}</Link>
              <Link >{song?.album.title} </Link>
            </p>
          </div>))} */} 
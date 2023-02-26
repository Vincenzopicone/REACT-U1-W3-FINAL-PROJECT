import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const CardSong = (props) => {
     const [song, setSong]= useState();
    const getFetchSong = async () => {
      try {
        const response = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.name}`)
        if (response.ok) {
        const data = await response.json()
       setSong (data.data[0])
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
        <div className="col text-center imgLinks">
          {song && (
            <>
            <Link><img key={song.id} src={song.artist.picture_medium} alt="Cover" /> </Link>
            <div className="p-2 fs-0">
            <Link className="text-decoration-none" to={`/album/${song.album.id}`}><p>Album: {song.album.title}</p> </Link>
            <Link  className="text-decoration-none"  to={`/artist/${song.artist.name}`}><p>Artist: {song.artist.name}</p></Link>
            </div>
            </> ) }      
          </div>
       
    )
}

export default CardSong;
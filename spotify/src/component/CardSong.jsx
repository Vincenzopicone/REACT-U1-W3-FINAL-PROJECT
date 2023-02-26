import { useEffect, useState } from "react"
import {useSelector, useDispatch} from "react-redux"
import { useNavigate, Link } from "react-router-dom";


const CardSong = (props) => {
    
 /*    const artist = props.name */
 /*    const song = useSelector(state => state.app.song) */
/*     const card = useSelector(state => state.app.section) */
    const dispatch = useDispatch()
     const [song, setSong]= useState();
     const navigate = useNavigate()

   /*   const handleClick = (e) => {
      dispatch({type: "GET_NAME_ARTIST", payload: e.target })
     } */
    const getFetchSong = async () => {
      try {
        const response = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.name}`)
        if (response.ok) {
        const data = await response.json()
      
/* 
        dispatch({type: "GET_SONG", payload: data.data[0]})  */
       setSong (data.data[0])
        /* dispatch({type: "GET_SONG", payload: data.data[0]})  */
    

        

        } else {
        
  
        }
  
      } catch(err) {
        console.log("errore nel ")
  
      }
    }
  
    useEffect(()=>{
      getFetchSong()  
    }, [])


    return (
      
        <div className="col text-center imgLinks" /* onClick={navigate()}} */>
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
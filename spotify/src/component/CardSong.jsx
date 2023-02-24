import { useEffect, useState } from "react"
/* import {useSelector, useDispatch} from "react-redux" */

const CardSong = (props) => {
    
 /*    const artist = props.name */
 /*    const song = useSelector(state => state.app.song) */
/*     const card = useSelector(state => state.app.section) */
/*     const dispatch = useDispatch() */
     const [song, setSong]= useState();
  
    const getFetchSong = async () => {
      try {
        const response = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.name}`)
        if (response.ok) {
        const data = await response.json()
        console.log(data.data[0])
/* 
        dispatch({type: "GET_SONG", payload: data.data[0]})  */
       setSong (data.data[0])
        /* dispatch({type: "GET_SONG", payload: data.data[0]})  */
        console.log(song)
        

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
      
        <div className="col text-center imgLinks">
          {song && (
            <>
            <img key={song.id} src={song.artist.picture_medium} alt="" /> 
            <p>{song.album.title}</p> 
            <p>{song.artist.name}</p>
            </> ) }      
          </div>
       
    )
}

export default CardSong;
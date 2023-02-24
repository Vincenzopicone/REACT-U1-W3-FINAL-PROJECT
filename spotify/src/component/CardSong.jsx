import { useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"

const CardSong = (props) => {
    
 /*    const artist = props.name */
    const song = useSelector(state => state.app.song)
/*     const card = useSelector(state => state.app.section) */
    const dispatch = useDispatch()
  
    const getFetchSong = async () => {
      try {
        const response = await fetch (`https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.name}`)
        if (response.ok) {
        const data = await response.json()
        console.log(data.data[0])
        dispatch({type: "GET_SONG_ROCK", payload: data.data[0]}) 

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
      
        <div class="col text-center">
        {song.map ((e) => (
            <>
          <img src={e.artist.picture_medium} alt="" /> 
          <p>{e.album.title}</p> 
          <p>{e.artist.name}</p>
          </> ))}
          </div>
       
    )
}

export default CardSong;
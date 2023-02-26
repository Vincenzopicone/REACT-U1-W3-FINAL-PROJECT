import TopBar from "./ToBar"
import {useSelector} from "react-redux"
import CardSong from "./CardSong"

const Main = () => {

  const rock = useSelector (state=>state.app.rock)
  const pop = useSelector (state=>state.app.pop)
  const hiphop = useSelector (state=>state.app.hiphop)
 

    return (
        <div className="col-12 col-md-10 offset-md-2 mainPage">
          <TopBar/>
          <div className="row">
          <div className="col-10">
              <div id="searchResults" style={{display: "none"}}>
                <h2>Search Results</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="rock">
                <h2>Rock classic</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"> 
                  
                 {rock.map((e, i)=>(
                <CardSong name={rock[i]}/>
                ))} 

                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                >
         {pop.map((e, i)=>(
                <CardSong name={pop[i]}/>
                ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
               {hiphop.map((e,i)=>(
                <CardSong name={hiphop[i]}/>
                ))} 
             
                </div>
              </div>
            </div>
          </div>
        </div>
            
    )
}
export default Main
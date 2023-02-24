import { useEffect } from "react"
import TopBar from "./ToBar"
import {useSelector, useDispatch} from "react-redux"
import CardSong from "./CardSong"

const Main = () => {
 

    return (
        <div class="col-12 col-md-9 offset-md-3 mainPage">
          <TopBar/>
          <div class="row">
          <div class="col-10">
              <div id="searchResults" style={{display: "none"}}>
                <h2>Search Results</h2>
                <div
                  class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <div id="rock">
                <h2>Rock Classics</h2>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="rockSection"
                > <CardSong name="metallica"/>
                  <CardSong name="queen"/>
                  <CardSong name="system of a down"/>
                  <CardSong name="acdc"/>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <div id="pop">
                <h2>Pop Culture</h2>
                <div
                  class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="popSection"
                >
                  <CardSong name="coldplay"/>
                  <CardSong name="sum41"/>
                  <CardSong name="oasis"/>
                  <CardSong name="acdc"/>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-10">
              <div id="hiphop">
                <h2>#HipHop</h2>
                <div
                  class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                  id="hipHopSection"
                >
                  <CardSong name="rihanna"/>
                  <CardSong name="miley cyrus"/>
                  <CardSong name="Harry styles"/>
                  <CardSong name="the weeknd"/>
                </div>
              </div>
            </div>
          </div>
        </div>
            
    )
}
export default Main
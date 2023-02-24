import TopBar from "./ToBar"

const AlbumPage = () => {
    return (
        <>
        <div class="col-12 col-md-9 offset-md-3 mainPage">
            <TopBar/>
      
        </div>
        <div class="row">
          <div class="col-md-3 pt-5 text-center" id="img-container"></div>
          <div class="col-md-8 p-5">
            <div class="row">
              <div class="col-md-10 mb-5" id="trackList"></div>
            </div>
          </div>
        </div>
        </>

    )
}

export default AlbumPage
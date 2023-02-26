import Shuffle from "../assets/img/Shuffle.png"
import Next from "../assets/img/Next.png"
import Repeat from "../assets/img/Repeat.png"
import Previous from "../assets/img/Previous.png"
import Play from "../assets/img/Play.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const BottomBar = () => {

  const play = useSelector((state) => state.app.play)
    return (
        <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row">
          <div className="col-lg-10 flex-column offset-lg-2">
            <div className="row flex-column justify-content-center p-3">
              <div className="playerControls mt-1 d-flex justify-content-between w-70">
                <div className="text-light d-flex"> 
                  <img className="me-1" style={{height: "4.5rem"}} src={play?.album?.cover} alt="cover"/>
                  <div className="d-flex flex-column p-1">
                  <p>{play?.artist?.name}</p>
                  <p>{play?.title}</p>
                  </div>                  
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <div className="d-flex justify-content-between mb-3">
                  <Link href="#">
                    <img src={Shuffle} alt="shuffle" />
                  </Link>
                  <Link href="#">
                    <img src={Previous} alt="shuffle" />
                  </Link>
                  <Link href="#">
                    <img src={Play} alt="shuffle" />
                  </Link>
                  <Link href="#">
                    <img src={Next} alt="shuffle" />
                  </Link>
                  <Link href="#">
                    <img src={Repeat}alt="shuffle" />
                  </Link>
                </div>
                <div className="col-8 col-md-12 ">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>                
              </div>
            </div>
            <div className="row justify-content-center playBar py-3">
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BottomBar
import Shuffle from "../assets/img/Shuffle.png"
import Next from "../assets/img/Next.png"
import Repeat from "../assets/img/Repeat.png"
import Previous from "../assets/img/Previous.png"
import Play from "../assets/img/Play.png"
import { Link } from "react-router-dom"


const BottomBar = () => {
    return (
        <div className="container-fluid fixed-bottom bg-container pt-1">
        <div className="row">
          <div className="col-lg-10 offset-lg-2">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                <div className="d-flex justify-content-between">
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
              </div>
            </div>
            <div className="row justify-content-center playBar py-3">
              <div className="col-8 col-md-6">
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
          </div>
        </div>
      </div>
    )
}

export default BottomBar
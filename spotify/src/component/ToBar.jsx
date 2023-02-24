import { Link } from "react-router-dom";

const TopBar = () => {
    return(
        <div className="row mb-3">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              <Link className="text-decoration-none" href="#">TRENDING</Link>
              <Link className="text-decoration-none" href="#">PODCAST</Link>
              <Link className="text-decoration-none" href="#">MOODS AND GENRES</Link>
              <Link className="text-decoration-none" href="#">NEW RELEASES</Link>
              <Link className="text-decoration-none" href="#">DISCOVER</Link>
            </div>
          </div>
    )
}

export default TopBar
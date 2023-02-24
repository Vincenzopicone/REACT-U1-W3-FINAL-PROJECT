import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/img/Spotify_Logo.png";
import { FaHome } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";

const SideBar = () => {
    return (
        <div className="col-2 ">
          <nav
            className="navbar navbar-expand-lg navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
            id="sidebar"
          >
            <div className="nav-container">
              <Link className="navbar-brand">
                <img
                  src={Logo}
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav p-2">
                  <ul>
                    <li>
                      <Link to={"/"} className="nav-item nav-link" ><FaHome></FaHome>&nbsp; Home</Link>
                    </li>
                    <li>
                      <Link className="nav-item nav-link" href="alt"><BsFillBookFill></BsFillBookFill>&nbsp; Your Library</Link>
                    </li>
                    <li>
                      <div className="input-group mt-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          id="searchField"
                          placeholder="Search"
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div
                          className="input-group-append"
                          
                        >
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            type="button"
                            id="button-addon1"
                          >
                            GO
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="nav-btn d-flex flex-column px-3">
              <button className="btn signup-btn" type="button">Sign Up</button>
              <button className="btn login-btn" type="button">Login</button>
              <Link className="text-decoration-none" href="#">Cookie Policy</Link>
              <Link className="text-decoration-none" href="#"> Privacy</Link>
            </div>
          </nav>
        </div>

    );
};

export default SideBar;
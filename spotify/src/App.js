import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./component/SideBar";
import BottomBar from "./component/BottomBar";
import ArtistPage from "./component/ArtistPage";
import AlbumPage from "./component/AlbumPage";
import Main from "./component/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Row>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/artist/:id" element={<ArtistPage />} />
            <Route path="/album/:id" element={<AlbumPage />} />
          </Routes>
        </Row>
        <BottomBar />
      </BrowserRouter>
    </div>
  );
}

export default App;

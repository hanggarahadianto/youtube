import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";

function App() {
  // const {currentUser} = useSelector((state) => state.user)

  return (
    <div className="bg-black h-full  ">
      <Topbar />
      <div className="grid grid-rows-2 grid-cols-12 ">
        <div className="col-span-3">
          <Navbar />
        </div>

        <div className="col-span-9">
          <BrowserRouter>
            <Routes>
              <Route index element={<Home type="random" />} />
              <Route path="trend" element={<Home type="trend" />} />
              <Route path="subscription" element={<Home type="sub" />} />
              {/* <Route path="search" element={<Search />} /> */}

              {/* <Route path="signin" element={currentUser ? <Home /> : <SignIn />} /> */}

              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;

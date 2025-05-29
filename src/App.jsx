import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./components/Body";
import Connections from "./components/Connections";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Location from "./components/location";
import Profile from "./components/Profile";
//routing
function App() {
  return (
    <Provider store={appStore}>
      <div className="h-[100vh] w-screen">
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/location" element={<Location />} />
              <Route path="profile" element={<Profile/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;

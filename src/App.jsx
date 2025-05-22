import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./Body";
import Connections from "./Connections";
import Login from "./Login";
//routing
function App() {
  return (
    <div className="h-[100vh] w-screen">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />} />
            <Route path="/connections" element={<Connections />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

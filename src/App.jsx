import { BrowserRouter, Routes, Route } from "react-router";
import Body from "./Body";
import Connections from "./Connections";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
            <Route path="/login" element={<Login/>} />
            <Route path="/connections" element={<Connections/> }/>
        </Route>
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;

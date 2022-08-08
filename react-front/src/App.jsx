import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ABM from "./components/ABM"
import AllOp from "./components/AllOp";

function App() {

  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/abm" element={<ABM/>}/>
          <Route exact path="/all_op" element={<AllOp/>}/>

        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

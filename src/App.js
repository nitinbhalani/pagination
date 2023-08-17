import "./App.css";
import Navbar from "./componet/Navbar";
import News from "./componet/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path= "/"element={<News key= "general" page={5} catagory={"general"} country={"in"}/>}></Route>
          <Route exact path="/science" element={<News key="science" page={5} catagory={"science"} country={"in"}/>}></Route>
          <Route exact path="/business" element={<News key="business" page={5} catagory={"business"} country={"in"}/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" page={5} catagory={"entertainment"} country={"in"}/>}></Route>
          <Route exact path="/health" element={<News key="health" page={5} catagory={"health"} country={"in"}/>}></Route>
          <Route exact path="/sports" element={<News key="sports" page={5} catagory={"sports"} country={"in"}/>}></Route>
          <Route exact path="/technology" element={<News key="technology" page={5} catagory={"technology"} country={"in"}/>}></Route>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;

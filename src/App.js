import "./App.css";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Home/>}/>  
          <Route exact path="/search" element={<SearchPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

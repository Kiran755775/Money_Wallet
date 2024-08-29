import SearchTransaction from "./assets/components/SearchTransaction"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./assets/components/Home";
import Newtransaction from "./assets/components/Newtransaction";
import TypesofCategories from "./assets/components/TypesofCategories";
import Event from "./assets/components/Event";
import Place from "./assets/components/Place";
import Person from "./assets/components/Person";

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<SearchTransaction/>}/>
          <Route path="/newtransaction" element={<Newtransaction/>}/>
          <Route path="/typesofCategories" element={<TypesofCategories/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/place" element={<Place/>}/>
          <Route path="/person" element={<Person/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

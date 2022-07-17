import '../src/Styles/App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './Component/Header';
import Main from "./Component/Main";
import Footer from './Component/Footer';
import ShowRoom from "./Component/ShowRoom";
import { Route, Routes } from "react-router";
import Kitchen from "./Component/Kitchen";
import Loader from './Component/Loader';
import { useState } from 'react';
const App = () => {
 const [load,setLoad]=useState(false)
 window.addEventListener('load',()=>setLoad(true))
  return ( <>
  {
    load ? (<div>
          <Routes>
       <Route path="/" element={<div>
        <Header/> <Main/>
       </div>} />
       <Route path="/showroom" element={ <ShowRoom/>}/>
       <Route path="/kitchen" element={<Kitchen/>}/>
    </Routes>
    
      <Footer/>
    </div>):(<Loader/>)
  }

  </> );
}
 
export default App;
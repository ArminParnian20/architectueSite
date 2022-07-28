import '../src/Styles/App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './Component/Header';
import Main from "./Component/Main";
import Footer from './Component/Footer';
import ShowRoom from "./Component/ShowRoom";
import { Route, Routes } from "react-router";
import Kitchen from "./Component/Kitchen";
import Loader from './Component/Loader';
import { useEffect, useState } from 'react';
import { Code } from 'react-content-loader'
import Det from './Component/Det';
import Swip from './Component/Swip';

const App = () => {
  const [load,setLoad]=useState(true)
window.addEventListener('load', () => {
  setLoad(true)
});

const MyCodeLoader = () => <Code />
  return ( <>
  {
    load ? (<div>
          <Routes>
       <Route path="/" element={<div>
        <Header/> <Main/>  <Footer/>
       </div>} />
       <Route path="/showroom" element={<> <ShowRoom/> <Footer/></>}/>
       <Route path="/kitchen" element={<><Kitchen/> <Footer/></>}/>
       <Route path="/det" element={<> <Footer/><Det/></>}/>
       <Route path="/swip" element={<Swip/>}/>
    </Routes>
     
    </div>):(MyCodeLoader())
  }
  </> );
}
 
export default App;

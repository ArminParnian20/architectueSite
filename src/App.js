import { Fragment } from "react";
import '../src/Styles/App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Header from './Component/Header';
import Main from "./Component/Main";
import Footer from './Component/Footer';
import ShowRoom from "./Component/ShowRoom";
import { Route, Routes } from "react-router";
import Kitchen from "./Component/Kitchen";
const App = () => {
  return ( <Fragment>
    <Routes>
       <Route path="/" element={<div>
        <Header/> <Main/>
       </div>} />
       <Route path="/showroom" element={ <ShowRoom/>}/>
       <Route path="/kitchen" element={<Kitchen/>}/>

    </Routes>
      <Footer/>
  </Fragment> );
}
 
export default App;
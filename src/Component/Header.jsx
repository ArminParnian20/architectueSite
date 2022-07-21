import { Fragment, useState } from "react";
import '../Styles/HeaderStyle.css';
import {Link} from "react-router-dom"
import { Code } from 'react-content-loader';
const Header = () => {
    const [getRequest,setRequest]=useState(false);
  const [load,setLoad]=useState(true)
  const [scroll,setScroll]=useState(1);
  const onScroll = () =>{
    const scrollCheck = window.scrollY;
    setScroll(scrollCheck)
    console.log(document.body.scroll);
  }
document.addEventListener("scroll", onScroll);

window.addEventListener('load', () => {
    setLoad(true)
  });

  const MyCodeLoader = () => <Code />  

    return (<>
    {load ? (    <Fragment>
        <div className="head">
            <div className="contact desktop">
                <div>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-instagram"></i>
                </div>
                <div>
                    <p><i className="bi bi-telephone-fill"></i> 09118835969 </p>
                     <p>Request a Consultation
                     </p>
                    <button onClick={()=>setRequest(!getRequest)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className={getRequest? "requestBox active desktop":"requestBox desktop"}>
                <i className="bi bi-box-arrow-right" onClick={()=>setRequest(!getRequest)}></i>
                <br/>
                <br/>
                <br/>
                <br/>
                <p className="text-style-1">Request design consultation / appointment in our showroom</p>
                 <br/>
                <br/>
                 <form>
                    <div>
                        <input type="text" placeholder="First Name*" />
                        <input type="text" placeholder="Last Name*" />
                    </div>
                    <input type="Email" placeholder="Email*"/>
                    <input type="text"  placeholder="Choose Department*"/>
                    <textarea placeholder="Subject*"></textarea>
                    <button>send</button>
                 </form>
            </div>
            <div className={scroll> 1000 ? "navbar desktop active":"navbar desktop"}>
                <i className="bi bi-justify mobil"></i>
                <ul>
                    <li><i className="bi bi-basket desktop"> <span>5</span></i></li>
                    <li><i className="bi bi-search desktop"></i></li>
                    <li>Design Studio
                    <ul>
                        <li>
                            <Link to="/showroom" style={{color:"rgb(118, 118, 118)"}}>
                               Showroom  
                            </Link>
                           </li>
                        <li>Cast Showroom</li>
                        </ul>
                    </li>
                    <li>
                    <Link to="/kitchen" className="bn" style={{color:"#fff"}}>Kitchens</Link>
                    </li>
                    <li>Bespoke Joinery</li>
                    <li>Tiles</li>
                    <li>Shop
                        <ul>
                        <li>Kitchen Appliances</li>
                        <li>Ironmongery</li>
                        <li>Lighting</li>
                        </ul>
                    </li>
                    <li>Blog</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className={getRequest? "mobileNavBar active mobile":"mobileNavBar mobile"}>
            <i className="bi bi-justify mobil" onClick={()=>setRequest(!getRequest)}></i>
                <ul>
                    <li>Design Studio 
                        <i className="bi bi-caret-right"></i>
                    <ul>
                    <li>
                            <Link to='/showroom' style={{color:"rgb(118, 118, 118)"}}>
                                 Showroom
                            </Link>
                           </li>
                        <li>Cast Showroom</li>
                        </ul>
                    </li>
                    <li>
                    <Link to='/kitchen' style={{color:"rgb(118, 118, 118)"}}>Kitchens</Link>
                    </li>
                    <li>Bespoke Joinery</li>
                    <li>Tiles</li>
                    <li>Shop<i className="bi bi-caret-right"></i>
                        <ul>
                        <li>Kitchen Appliances</li>
                        <li>Ironmongery</li>
                        <li>Lighting</li>
                        </ul>
                    </li>
                    <li>Blog</li>
                    <li>Contact us</li>
                </ul>

            </div>
        </div>
    </Fragment> ):(MyCodeLoader())}
    </>);
}
 
export default Header;
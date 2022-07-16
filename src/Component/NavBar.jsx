import { Fragment, useState } from "react";
import '../Styles/HeaderStyle.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const [getRequest,setRequest]=useState(false);

    return ( <Fragment>
                    <div className="navbar desktop active">
                <i className="bi bi-justify mobil"></i>
                <ul>
                    <li><i className="bi bi-basket"> <span>5</span></i></li>
                    <li><i className="bi bi-search"></i></li>
                    <li>Design Studio
                    <ul>
                        <li>
                            <Link to='/showroom'>
                                 Showroom
                            </Link>
                           </li>
                        <li>Cast Showroom</li>
                        </ul>
                    </li>
                    <li>       <Link to='/kitchen'>
                               Kitchens
                            </Link></li>
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
                            <Link to={'/showroom'}> Showroom
                            </Link>
                           </li>
                        <li>Cast Showroom</li>
                        </ul>
                    </li>
                    <li>
                    <Link to={"/kitchen"}>Kitchens
                            </Link>
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
    </Fragment> );
}
 
export default NavBar;
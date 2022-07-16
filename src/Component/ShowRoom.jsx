import { Fragment } from "react";
import '../Styles/ShowRoom.css';
import NavBar from './NavBar';


const ShowRoom = () => {
    return (<Fragment>
        <NavBar/>
        <div className="Showhead">
        </div>
        <div className="showAbout">
            <h1>Showroom</h1>
            <p>
            We have some beautiful display kitchens in our shop and we would happily take the time to talk you through the different bespoke options available to you including: appliances, worktops, fixtures and fittings and who our preferred partners are.
        <br />
Visit our showroom on
127 Northcote Road,
SW11 6PS
            </p>
        </div>
        <div className="ShowImags">
            <img src="./images/21.webp" alt="" />
            <img src="./images/22.webp" alt="" />
            <img src="./images/23.webp" alt="" />
            <img src="./images/24.webp" alt="" />
            <img src="./images/25.webp" alt="" />
            <img src="./images/26.webp" alt="" />
        </div>
    </Fragment>);
}
 
export default ShowRoom;
import NavBar from './NavBar';

const Kitchen = () => {
    return ( <>
    <NavBar/> 
    <div className="Showhead"  style={{background:'url("./images/head.jpg") center center/cover'}}>
        </div>
        <div className="showAbout">
            <h1>Kitchen</h1>
            <p>
            We have some beautiful display kitchens in our shop and we would happily take the time to talk you through the different bespoke options available to you including: appliances, worktops, fixtures and fittings and who our preferred partners are.
        <br />
Visit our showroom on
127 Northcote Road,
SW11 6PS
            </p>
        </div>
        <div className="ShowImags">
            <img src="./images/27.jpg" alt="" />
            <img src="./images/28.jpg" alt="" />
            <img src="./images/29.jpg" alt="" />
            <img src="./images/30.jpg" alt="" />
            <img src="./images/31.jpg" alt="" />
            <img src="./images/32.jpg" alt="" />
            <img src="./images/34.jpg" alt="" />
            <img src="./images/35.jpg" alt="" />


        </div>
    </> );
}
 
export default Kitchen;
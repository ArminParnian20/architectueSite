import NavBar from './NavBar';
import '../Styles/DetStyle.css';
import { Link } from 'react-router-dom';

const Det = () => {
    return (<>
    <NavBar/>
    <div className="detbody">
        <div className="detImages">
            <Link to='/swip'><img src="./images/1.jpg" alt="" /></Link>
            <Link to='/swip'><img src="./images/2.jpg" alt="" /></Link>
            <Link to='/swip'><img src="./images/3.jpg" alt="" /></Link>
            <Link to='/swip'><img src="./images/4.jpg" alt="" /></Link>
            <Link to='/swip'><img src="./images/5.jpg" alt="" /></Link>
            <Link to='/swip'><img src="./images/6.jpg" alt="" /></Link>
        </div>
        <div className="detText">
            <h1>Aspenlea Road</h1>
            <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, velit. Porro vel, magnam soluta obcaecati vero minima quibusdam adipisci consequatur non libero! Reprehenderit molestias quis quod placeat error hic? Hic, unde dolores dolore dolorum soluta doloremque. Dolorem magnam fugit quod consequatur officiis tempore delectus porro illo ex pariatur. Doloribus, dolore!</p>
        </div>
    </div>
    </> );
}
 
export default Det;
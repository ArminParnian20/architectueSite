import { Fragment, useState} from "react";
import {Swiper,SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper";
import '../Styles/MainStyle.css';
import 'swiper/css'
import { Code } from 'react-content-loader';
import { Link } from 'react-router-dom';

const Main = () => {
  const [load,setLoad]=useState(true);
  const [scroll,setScroll]=useState(1);

  window.addEventListener('load', () => {
    setLoad(true);
  });


  const onScroll = () =>{
    const scrollCheck = window.scrollY;
    setScroll(scrollCheck)
  }

document.addEventListener("scroll", onScroll);

const MyCodeLoader = () => <Code />

    return (<>
      {  load ? (<div>
<Fragment>
<div className="aboutCast">
   <h1>Bespoke Joinery London</h1>
   <div className="aboutBox">
       <p>Lorem ipsum dolor sit amet <span className="dark-text">consectetur adipisicing elit</span> . Eaque, eveniet incidunt. Minus aspernatur eius hic ab quasi facere illum voluptate cupiditate exercitationem quas vel voluptates, quaerat dignissimos alias quidem fuga<span className="dark-text"> incidunt doloremque nemo</span> sequi architecto provident? Nesciunt error perferendis sequi culpa similique magnam fugiat enim sed, adipisci, esse nostrum iure. Lorem ipsum dolor sit amet consectetur <span className="dark-text">adipisicing elit. Rerum, recusandae</span> dignissimos necessitatibus ad deleniti quisquam delectus facere assumenda cupiditate libero aspernatur saepe <span className="dark-text">provident dolor, nemo amet,</span> optio dolorum vel. Aspernatur.</p>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<span className="dark-text"> Quo sapiente inventore optio repudiandae?</span> Suscipit hic ducimus iusto, minus magni officia ea autem repudiandae,<span className="dark-text">maiores laboriosam asperiore</span> s omnis sapiente voluptatibus consequuntur labore praesentium facilis cumque illo quod deserunt, ex laudantium vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias asperiores aliquid dignissimos magni id at dolores fuga quam quos nemo magnam quia, aut enim necessitatibus vel saepe.<span className="dark-text"> Pariatur neque fugiat facilis</span> mollitia reprehenderit incidunt repellat.</p>
   </div>
<h2>Bespoke Projects</h2>
<h3>by cast</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nemo et commodi sit molestias vero, aliquam voluptatum accusantium, ad quaerat esse hic cupiditate dicta numquam repudiandae tenetur. Quibusdam, laudantium perspiciatis? Vero laudantium aspernatur quod vel numquam accusamus beatae, assumenda maiores.</p>
  <button>Bespoke Kitchens</button>
  <button>Bespoke Joinery</button>

</div>
 <div className="container">
   <div className="mainLinks">
    <Link to='/det'> <div><img src="./images/1.jpg" alt="" /><p>Study</p></div></Link>
    <Link to='/det'><div><img src="./images/2.jpg" alt="" /><p>Verands</p></div></Link>
    <Link to='/det'><div><img src="./images/3.jpg" alt="" /><p>Bedroom</p></div></Link>
    <Link to='/det'><div><img src="./images/4.jpg" alt="" /><p>Drawing room</p></div></Link>
    <Link to='/det'><div><img src="./images/19.jpg" alt="" /><p>Reception Room</p></div></Link>
    <Link to='/det'><div><img src="./images/7.jpg" alt="" /><p>Wash-stand</p></div></Link>
    <Link to='/det'><div><img src="./images/6.jpg" alt="" /><p>Drawing room</p></div></Link>
    <Link to='/det'><div><img src="./images/8.jpg" alt="" /><p>Reception room</p></div></Link>
    <Link to='/det'><div><img src="./images/9.jpg" alt="" /><p>Furnished</p></div></Link>
    <Link to='/det'><div><img src="./images/17.jpg" alt="" /><p>Drawing room</p></div></Link>
    <Link to='/det'><div><img src="./images/18.jpg" alt="" /><p>Reception room</p></div></Link> 
    <Link to='/det'><div><img src="./images/5.jpg" alt="" /><p>Furnished</p></div></Link>    

    
    
    
    
 
    

   </div>
 </div>
 <div className={scroll> 1000 ? "goUp":"goUp active"} onClick={()=>window.scroll({
   top:0,
   behavior:'smooth'
 })}>
 <i className="bi bi-caret-up"></i>
 </div>
 <div className="showroom">
   <div>
     <img src="./images/16.jpg" alt="" />
   </div>
   <div>
   <h1>Bespoke Joinery Services</h1>
   <p>Whether you are looking for a one-off piece of furniture or a complete kitchen, the Cast team are on hand to help create and manufacture your bespoke pieces. Our designers are working with bespoke joiners, which together will create magnificent joinery which looks beautiful and will last the test of time.</p>
   <h1>What We Offer:</h1>

   <p>Planning and design advice</p>
   <p>Bespoke kitchen Design</p>
   <p>Bespoke Joinery/Furniture Design</p>
   <p>Appliance Supplier</p>
   <p>Ironmongery Fixtures and Fittings</p>
   <p>Bathroom Design and Supply</p>
   <p>Interior Design</p>
 
   </div>
 </div>
 <div className="brands">
   <Swiper slidesPerView={3}
   centeredSlides={false}
   spaceBetween={30}
   autoplay={{
     delay:1000,
     disableOnInteraction:false
   }}
   loop={true}
   modules={[Autoplay]}>
     <SwiperSlide key={1}><img src="./images/1.webp"/></SwiperSlide>
     <SwiperSlide key={2}><img src="./images/2.webp"/></SwiperSlide>
     <SwiperSlide key={3}><img src="./images/3.webp"/></SwiperSlide>
     <SwiperSlide key={4}><img src="./images/4.webp"/></SwiperSlide>
   </Swiper>
 </div>
</Fragment> 
    </div>):(MyCodeLoader())
  }
   </>)

}
export default Main;

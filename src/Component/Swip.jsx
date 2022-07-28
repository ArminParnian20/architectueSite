import React, {useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Link } from 'react-router-dom';

const Swip = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return ( <>
      <p style={{"marginTop":"10px"}}></p>
      <Link to='/det'> <i className="bi bi-x" 
      style={{"fontSize":"25px","padding":"5px","margin":"5px","background":"#f0f0f0"
      ,"borderRadius":"50%"}}></i></Link>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "paddingTop":"2rem"
        }}
        loop={true}      
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="./images/1.jpg" style={{"width":"100%"}}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/2.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/3.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/4.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/5.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/6.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/7.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/8.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/9.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/10.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={1}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./images/1.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/2.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/3.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/4.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/5.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/6.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./images/7.jpg" style={{"width":"100%"}} />
        </SwiperSlide>        <SwiperSlide>
          <img src="./images/8.jpg" style={{"width":"100%"}} />
        </SwiperSlide>        <SwiperSlide>
          <img src="./images/9.jpg" style={{"width":"100%"}} />
        </SwiperSlide>        <SwiperSlide>
          <img src="./images/10.jpg" style={{"width":"100%"}} />
        </SwiperSlide>
        <SwiperSlide>
        </SwiperSlide>
      </Swiper>
    </> );
}
 
export default Swip;
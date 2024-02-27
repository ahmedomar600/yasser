import ImgThirdSection from "../Assist/Third.jpg"
import Img0ThirdSection from "../Assist/First-Section.jpg"
import Img1ThirdSection from "../Assist/Third2.jpg"
import Img2ThirdSection from "../Assist/third3.jpg"
import Img3ThirdSection from "../Assist/First-Section.jpg"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const SwiperD = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          984: {
            slidesPerView: 4,
            spaceBetween: 10
          }
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
  
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="Box-img">
            <img className="Animat-Sw1" src={ImgThirdSection} alt="" />
            <h4>الزكاه</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Box-img">
            <img  className="Animat-Sw2" src={Img0ThirdSection} alt="" />
            <h4>الصلاه</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="Box-img">
            <img  className="Animat-Sw3" src={Img1ThirdSection} alt="" />
            <h4>الصوم</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>              <div className="Box-img">
          <img className="Animat-Sw4" src={Img2ThirdSection} alt="" />
          <h4>الحج</h4>
        </div></SwiperSlide>
        <SwiperSlide>            <div className="Box-img">
          <img  className="Animat-Sw5" src={Img3ThirdSection} alt="" />
          <h4>الشهاده</h4>
        </div></SwiperSlide>

      </Swiper>
    </>
  );
}
export default SwiperD
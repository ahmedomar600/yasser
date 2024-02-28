import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import '../App.css';
import img1 from "../Assist/First-Section.jpg"
import img2 from "../Assist/bg.da5f502892f862ed1de2.png"
import img3 from "../Assist/logo-First-Section.svg"
import img4 from "../Assist/img-Section-Two2.jpg"
// import imgMain from "../Assist/mainLogo.jpeg"
import Ser1 from "../Assist/Ser1.svg"
import Ser2 from "../Assist/Ser2.svg"
import Ser3 from "../Assist/Ser3.svg"
import Ser4 from "../Assist/Ser4.svg"
import Ser5 from "../Assist/Ser5.svg"
import Ser6 from "../Assist/Ser6.svg"

import Blog1 from "../Assist/Six-Section1.jpg"
import Blog2 from "../Assist/Sex-Section2.jpg"
import Blog3 from "../Assist/Sex-Section3.jpg"



import SwiperD from "../swiper-js/Swiper"

// import img5 from "../Assist/img-Section-Two1.jpg"
function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (
    <>
      <div className="App "> 
        <div className="First-Section PaddingFullApp">
          <div className="Img-Center-Bg" >
            <img className='img-fluid  Img-First-Section mt-3 mb-3 ps-4 pe-4' src={img2} alt="" />
            <span className='mt-3 mb-3 ps-4 pe-4'></span>
          </div>
          <div className="Content d-flex flex-wrap d-block justify-content-evenly align-items-center">
            <div className="Txt text-center  ">
              <img className="m-auto d-flex" src={img3} alt="" />
              <h2 className='pt-3'>”توب إلى الله قبل أن تعود إلى الله“</h2>
              <p className='pt-3 animate__animated animate__bounce'>القلب الذي ينبض في سبيل الله هو دائما غريب بين القلوب التي تنبض في الدنيا.</p>
              <button className=' btn'>تواصل معانا</button>
            </div>
            <div className="Img-Cover  ">
              <img className="img-fluid" src={img1} alt="" />
            </div>
          </div>
        </div>
        <div className="Secound-Section PaddingFullApp  ">
          <div className="Box-img"  data-aos="fade-left" data-aos-duration="1000">
            <div className="Box-Img-1">
              <img className='img-fluid' src={img4} alt="" />
            </div>
          </div>
          <div className="Box-Txt"data-aos="fade-down-right" data-aos-duration="1000">

            <h4>ماذا عنا</h4>
            <h2>اهلا بكم في مركز <span >خيركم</span> لتحفيظ القران الكريم</h2>
            <p>نحن نقدم خدمات تحفيظ القران الكريم</p>
            <div className="Box">
              <button>اكتشف اكثر</button>
              <div className="Txt">
                <p>تحدث معانا: 01016354102</p>

              </div>
            </div>
          </div>
        </div>
        <div className="Third-Section PaddingFullApp ">
        <span></span>
          <div className="Head-Txt text-center">
            <h5>اركان الاسلام</h5>
            <h3>اركان الاسلام الخمسه</h3>
          </div>
          <div className="Img-Section-Third">
            <div className="Container-Box">
              <SwiperD />
            </div>
          </div>
        </div>
        <div className="Four-Section PaddingFullApp ">
          <div className="Head-Txt text-center">
            <h5>خدمتنا</h5>
            <h2>خدمتنا من اجل</h2>
            <h3>الانسانيه</h3>
          </div>
          <div className="Content">
            <div className="Cards">
              <div className="Box-Card-1 ">
                <div className="Card-1" data-aos="flip-left" data-aos-duration="1000"                          >
                  <img src={Ser1} alt="" />
                  <h2>تحفيظ القرآن الكريم</h2>
                  <p>نعمل علي تدريب الطلاب على تحفيظ القرآن والمراجعة المنتظمة</p>
                </div>
                <div className="Card-2" data-aos="flip-right" data-aos-duration="1000"> 
                  <img src={Ser2} alt="" />
                  <h2>تجويد القرآن الكريم</h2>
                  <p>نعمل ع تدريس قواعد التجويد والمخارج الصوتية لتحسين جودة التلاوة</p>
                </div>
              </div>
              <div className="Box-Card-1">
                <div className="Card-1" data-aos="fade-up-left" data-aos-duration="1000">
                  <img src={Ser3} alt="" />
                  <h2 >علم النحو والصرف</h2>
                  <p>تُعنى بتعليم النحو والصرف لفهم بنية الجمل والكلمات في القرآن</p>
                </div>
                <div className="Card-2" data-aos="fade-up-right" data-aos-duration="1000">
                  <img src={Ser4} alt="" />
                  <h2>القواعد القرآنية</h2>
                  <p>نقوم بتعليم القواعد القرآنية لفهم النصوص بشكل أفضل</p>
                </div>
              </div>
              <div className="Box-Card-1">
                <div className="Card-1" data-aos="zoom-in" data-aos-duration="1000">
                  <img src={Ser5} alt="" />
                  <h2>نور البيان والقاعدة النورانية</h2>
                  <p>تم تصميم هذه الدورة كخطوة أولى في تعلم القرآن للأطفال</p>
                </div>
                <div className="Card-2" data-aos="zoom-in" data-aos-duration="1000">
                  <img src={Ser6} alt="" / >
                  <h2>الأخلاق والتربية الإسلامية</h2>
                  <p>تسعى إلى تعزيز القيم والأخلاق الإسلامية خلال عملية التحفيظ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Five-Section PaddingFullApp " >
          <div className="Box-Txt">
            <h2>مركز خيركم</h2>
            <h3>لتحفيظ القرآن الكريم</h3>
            <p>نعمل من اجل تطوير القيم والأخلاق وتحفيظ القرآن الكريم واحكام التجويد وتعليم نور البيان والقاعدة النورانية</p>
            <button>اعرف اكثر</button>
          </div>
        </div>
        <div className="Six-Section PaddingFullApp ">
          <div className="Head-Txt">
            <h4>المدونه</h4>
            <h1>اخر المقالات والاحداث</h1>
          </div>
          <div className="Cards">
            <div className="Card">
              <div className="Box-Img">
                <img src={Blog1} alt="" />
              </div>
              <a href="/">

              <h3>كيفيه حفظ القران في وقت قصير</h3>
  
              </a>
              <div className="End-Txt">
                <a href="">
                <span></span>
                <p>اقرا اكثر</p>
                </a>
              </div>
            </div>
            <div className="Card" >
              <div className="Box-Img">
                <img src={Blog2} alt="" />
              </div>
              <a href="/">
              <h3>كيفيه حفظ القران في وقت قصير</h3>
 
              </a>
              <div className="End-Txt">
                <a href="">
                <span></span>
                <p>اقرا اكثر</p>
                </a>
              </div>
            </div>
            <div className="Card">
              <div className="Box-Img">
                <img src={Blog3} alt="" />
              </div>
              <a href="/">
              <h3>كيفيه حفظ القران في وقت قصير</h3>
  
              </a>
              <div className="End-Txt">
                <a href="">
                <span></span>
                <p>اقرا اكثر</p>
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div className="Seven-Section PaddingFullApp ">
         <div className="Content">
         <div className="Box">
          <div className="Txt">
              <h3>الفجر</h3>
              <p>AM 5 </p>
            </div>
            <div className="Txt">
              <h3>الشروق</h3>
              <p>AM 5:50</p>
            </div>
            <div className="Txt">
              <h3>الظهر</h3>
              <p>PM 12</p>
            </div>
            </div>
            <div className="Box">
            <div className="Txt">
              <h3>العصر</h3>
              <p>PM 4</p>
            </div>
            <div className="Txt">
              <h3>المغرب</h3>
              <p>PM 6</p>
            </div>
            <div className="Txt">
              <h3>العشاء</h3>
              <p>8 PM</p>
            </div>
            </div>

         </div>

        </div>
        <div className="Pop-up-F">
        <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div className="Pop-up-C">
        <i class="fa-brands fa-facebook"></i>
        </div>
      </div>
    </>
  );
}

export default App;

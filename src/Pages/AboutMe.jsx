import Ser1 from "../Assist/Ser1.svg"
import Ser2 from "../Assist/Ser2.svg"
import Ser3 from "../Assist/Ser3.svg"
import Ser4 from "../Assist/Ser4.svg"
import Ser5 from "../Assist/Ser5.svg"
import Ser6 from "../Assist/Ser6.svg"
const AboutMe  = ()=> {
    return (
        <>
        <div className="About-Me Blog-Margin">
              <div className="Head-Txt">
                <h1>
                    مركز خيركم لتحفيظ القرآن الكريم
                </h1>
              </div>
              
   


              <div className="Four-Section PaddingFullApp ">
          <div className="Head-Txt text-center">
            <h5>خدمتنا</h5>
            <h2>خدمتنا من اجل</h2>
            <h3>الانسانيه</h3>
          </div>
          <div className="Content">
            <div className="Cards">
              <div className="Box-Card-1 " >
                <div className="Card-1"                          >
                  <img src={Ser1} alt="" />
                  <h2>تحفيظ القرآن الكريم</h2>
                  <p>نعمل علي تدريب الطلاب على تحفيظ القرآن والمراجعة المنتظمة</p>
                </div>
                <div className="Card-2">
                  <img src={Ser2} alt="" />
                  <h2>تجويد القرآن الكريم</h2>
                  <p>نعمل ع تدريس قواعد التجويد والمخارج الصوتية لتحسين جودة التلاوة</p>
                </div>
              </div>
              <div className="Box-Card-1">
                <div className="Card-1">
                  <img src={Ser3} alt="" />
                  <h2 >علم النحو والصرف</h2>
                  <p>تُعنى بتعليم النحو والصرف لفهم بنية الجمل والكلمات في القرآن</p>
                </div>
                <div className="Card-2">
                  <img src={Ser4} alt="" />
                  <h2>القواعد القرآنية</h2>
                  <p>نقوم بتعليم القواعد القرآنية لفهم النصوص بشكل أفضل</p>
                </div>
              </div>
              <div className="Box-Card-1">
                <div className="Card-1">
                  <img src={Ser5} alt="" />
                  <h2>نور البيان والقاعدة النورانية</h2>
                  <p>تم تصميم هذه الدورة كخطوة أولى في تعلم القرآن للأطفال</p>
                </div>
                <div className="Card-2">
                  <img src={Ser6} alt="" />
                  <h2>الأخلاق والتربية الإسلامية</h2>
                  <p>تسعى إلى تعزيز القيم والأخلاق الإسلامية خلال عملية التحفيظ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Services ">
              <div className="Contact">
                    <h1>تواصل معنا الان </h1>
                    <div className="Icon-Serv">
                   <a href=""> <i class="fa-brands fa-whatsapp"></i></a>
                   <a href=""> <i class="fa-brands fa-facebook"></i></a>
                    </div>
                    <div className="Call-me">
                        <h4>او علي ارقامنا</h4>
                        <div className="Box-Call-1">
                        <i class="fa-brands fa-whatsapp"></i>
                        <p>01016351205</p>        
                        </div>
                        <div className="Box-Call-2">
                        <i class="fa-brands fa-whatsapp"></i>
                        <p>01125456875</p>
                      </div>
                    </div>
                </div>
                </div>
        </div>
        </>
    )
    }
    
    export default AboutMe
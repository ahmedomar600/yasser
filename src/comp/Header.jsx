import logo from "../Assist/mainLogo.jpeg"
import { useState } from "react"
import { NavLink } from "react-router-dom";



const Header = ()=> {


  const [menu,setmenu] = useState(false)
  console.log(menu);


  return (
    <>
    <div className="Header">
      <div className="Box">
        <div className="Box-Img">
          <img src={logo} alt="LogoHeader" />
        </div>
        <div className="Center-Txt">
          <ul>
            <li>
            <NavLink to={"/"}>الرئيسيه</NavLink>
            </li>
            <li>
            <NavLink to={"/Blog"}>المدونه</NavLink>
            </li>
            <li>
            <NavLink to={"/Services"}>الباقات</NavLink>
            </li>
            <li>
            <NavLink to={"/AboutMe"}>ماذا عنا</NavLink>
            </li>
          </ul>
          
        </div>
        <div className="Box-Icon">
        <i class="fa-solid fa-mosque fa-bounce"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        <div onClick={()=> {setmenu(!menu)}} className="menu">
        <i class="fa-solid fa-bars"></i>
        </div>
        </div>
      </div>
    </div>
    <div className={menu? "Menu-Res open":"Menu-Res"}>
      <div className="Content">
        <h1>مركز خيركم </h1>
        <i  onClick={()=> setmenu(false)} class="fa-solid fa-xmark"></i>
      </div>
          <div className="Box-txt">
          <ul>
            <li>
            <NavLink onClick={()=> setmenu(false)}  to={"/"}>الرئيسيه</NavLink>
            </li>
            <li>
            <NavLink onClick={()=> setmenu(false)} to={"/Blog"}>المدونه</NavLink>
            </li>
            <li>
            <NavLink onClick={()=> setmenu(false)}  to={"/Services"}>الباقات</NavLink>
            </li>
            <li>
            <NavLink onClick={()=> setmenu(false)}  to={"/AboutMe"}>ماذا عنا</NavLink>
            </li>
          </ul>
          </div>
    </div>
    </>
  )
}

export default Header



/*
    <div className="Icon-Head">


    </div>
    
            <a className="nav-link active" aria-current="page" href="#">الرئيسيه</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">تواصل معنا</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">المدونه</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">الخدمات</a>
    
    */ 
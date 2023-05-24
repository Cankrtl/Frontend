import { Link } from "react-router-dom";
import { useState } from "react";
import classNames from "../assets/styles/NavMain.module.css";

import { IconChevron, IconClose } from "./Icons";


export function NavMain() {
    const [showNav, setshowNav]= useState(false);

  return (
    <nav className={classNames.NavMain}>
      <BtnToggle changeShowNav={setshowNav} showNav= {showNav}  />
      
      {showNav && (
         <ul onClick={()=>{setshowNav(false)}}>

         <li>
           <Link to="/">Ana sayfa</Link>
         </li>

         <li>
           <Link to="hareketli nokta">hareketli nokta</Link>
         </li>
 
         <li>
           <Link to="/iletişim_formu">İletişim formu</Link>
         </li>

         <li>
           <Link to="/yapıcaklar listesi">Yapıcaklar listesi</Link>
         </li>

         <li>
           <Link to="/şekiller">Şekiller</Link>
         </li>

         <li>
           <Link to="/akordiyon">Akordiyon</Link>
         </li>

 
         <li>
           <Link to="/filtrelenebilir_liste">Filtrelenebilir liste</Link>
         </li>
 
         <li>
           <Link to="/quiz">Quiz</Link>
         </li>
 
         <li>
           <Link to="/tictactoe">TicTacToe</Link>
         </li>


       </ul>
      )}
      
     
    </nav>
  );
}

function BtnToggle(props) {
  function handleClick(e) {
    props.changeShowNav(!props.showNav)
  }

  return <button onClick={handleClick} className={classNames.BtnToggle}>
   
    {props.showNav ? IconClose : IconChevron}</button>;
}

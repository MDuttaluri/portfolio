import React, { useEffect, useState } from 'react';
import "./BackToTopStyles.css";
import arrowSVG from '../../asset/arrow.svg';


function BackToTop() {
    const [isHidden, setIsHidden] = useState(true);
    

    document.addEventListener("scroll",async (e)=>{
        if(window.scrollY + 140 >= document.getElementById("Intro").clientHeight / 2){
            setIsHidden(false);
            document.getElementById("backtotop").style.opacity = 1;            

        }
        else{
            document.getElementById("backtotop").style.opacity = 0;
            setIsHidden(true);    
        }
    });



  return (
    <div id="backtotop" onClick={()=>{
        window.scrollTo(0,0);
    }} className="BackToTop" hidden={isHidden}>
        <img src={arrowSVG} alt="Back to Top"/>
    </div>
  )
}

export default BackToTop
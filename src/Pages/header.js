import { useEffect, useState } from "react";
import smoothscroll from 'smoothscroll-polyfill';
var classNames = require('classnames');

smoothscroll.polyfill();

function Header(){

    const [hamClicked,setHamClicked] = useState(true);
    var animationInTransit = false;
    var styleToggle = true;

    function logoClicked(){
        if(styleToggle == true){
            document.getElementById('Header').style.backgroundColor = "#F67280";
            document.getElementById('Header').style.color = "black";
            document.getElementById('logo').style.color = "white";
            document.getElementById('smallNavBar').style.backgroundColor = "#F67280";
        }else{
            document.getElementById('Header').style.backgroundColor = "rgba(16, 12, 66, 1)";
            document.getElementById('Header').style.color = "white";
            document.getElementById('logo').style.color = "white";
            document.getElementById('smallNavBar').style.backgroundColor = "rgba(16, 12, 66, 1)";
        }
        styleToggle = !styleToggle;
        

    }

    return <div id="Header" class="Header">
            <div class="HeaderLeftDiv">
                <h1 id="logo" onClick={logoClicked} style={{fontSize:"2rem",display:"inline",fontFamily:"system-ui"}}>DMT</h1>
            </div>
            <div class="HeaderRightSmallerDeviceDiv">
                <button class="HeaderButton" onClick={()=>{
                    if(animationInTransit == true)
                        return;
                    
                    if(hamClicked == true){
                        // Means the hamburg is being closed.
                        document.getElementById("smallNavBar").style.animation = "hamBurgerLoad 1s forwards";
                        //alert(document.getElementById("smallNavBar").className)
                        setHamClicked(!hamClicked);
                    }else{
                        document.getElementById("smallNavBar").style.animation = "hamBurgerUnLoad 0.3s forwards";
                       // alert(document.getElementById("smallNavBar").className)
                       setTimeout(()=>{
                            animationInTransit = true;
                           setHamClicked(!hamClicked);
                           animationInTransit = false;
                        },300);
                    }
                    //setTimeout(()=>{setHamClicked(!hamClicked);},1000);
                }}><h3 style={{fontSize:"2.5rem",position:"relative",top:"0",right:"0"}}>☰</h3></button>            
                <div id="smallNavBar" class="HeaderSmallerDivButtons" hidden={hamClicked}>
                    <HeaderButtonsList newLines={true} parentContext={{setter:setHamClicked}}/>
                </div>
            </div>
            <div class="HeaderRightLargerDeviceDiv">
                <HeaderButtonsList/>
            </div>

    </div>
}



function HeaderButtonsList(props){

    const [buttonLabels,setButtonLabels] = useState(['Projects','Experience','Tech Stack','Contact']);
    const [buttonLinks,setButtonLinks] = useState(['#Projects','#Experience','#TechStack','#Contact']);
    const [includeBr,setIncludeBr] = useState(props.newLines);
    const parentFn = props.parentContext;
    var regions = {};
    var prevTab = null;
    var manualScroll = false;
    function screenScrolled(){
        
        var screenPos = window.scrollY// +( manualScroll == true? 100 : 0);
        manualScroll = false;
        
        for(var i =0;i<buttonLabels.length;i++){
            var time = 1;
            var loc = regions[buttonLabels[i]];
            if(loc == null)
                return;
          //  alert(loc)
           // if(screenPos == loc[0])
            //    break
            if(screenPos >= loc[0]-300 && screenPos <= loc[1]){
              //  console.log(prevTab)
              
             /* window.scrollTo({
                  top: loc[2],behavior:"auto"
                })*/
              document.getElementById("BigHeaderButton"+buttonLabels[i]).style.animation = "buttonExpand 1s forwards ease";
                if(prevTab!=null && prevTab!=buttonLabels[i]){
                 //   document.getElementById("BigHeaderButton"+prevTab).style.fontSize = "1rem";
                 //   document.getElementById("BigHeaderButton"+prevTab).style.borderBottom = "none";
                    document.getElementById("SmallHeaderButton"+prevTab).style.textDecoration = "none";
                    document.getElementById("BigHeaderButton"+prevTab).style.animation = "buttonContract 1s forwards"
                    

                }
                document.getElementById("SmallHeaderButton"+buttonLabels[i]).style.textDecoration = "underline";
                // document.getElementById("SmallHeaderButton"+buttonLabels[i]).style.textUnderlinePosition = "auto";
                
               // document.getElementById("BigHeaderButton"+buttonLabels[i]).style.fontSize = "1.5rem";
              //  document.getElementById("BigHeaderButton"+buttonLabels[i]).style.borderBottom = "solid 2px white";

              

                prevTab = buttonLabels[i];
               
               // console.log(document.getElementById("HeaderButton"+buttonLabels[i]).style.color)
             
            }
        }
    }


    useEffect(()=>{
        for(var i =0;i<buttonLabels.length;i++){

            regions[buttonLabels[i]] = [
                document.getElementById(buttonLabels[i]).offsetTop,
                document.getElementById(buttonLabels[i]).clientHeight + document.getElementById(buttonLabels[i]).offsetTop,
               
            ];
            
        screenScrolled();
    }
       
        window.addEventListener("scroll",screenScrolled); 
    },[]);


    function clicked(e){
        if(parentFn != null){
            document.getElementById("smallNavBar").style.animation = "hamBurgerUnLoad 0.3s forwards";
                       setTimeout(()=>{
                            
                           parentFn.setter(true);
                     
                        },300);
        }
        var path = e.target.innerHTML;
        if(path.includes("<p")){
           var paths = path.split(">");
            paths = paths[1].split("<");
            path = paths[0];
            //path = path.replace("<p *>","");
            //path = path.replace("</p>","");
        }
        var removalPixels = document.getElementById("Header").clientHeight;
        try{
            window.scroll({top:document.getElementById(path).offsetTop-removalPixels,behavior:'smooth'});
        }catch(e){
          //  alert(path)
        }
        
        manualScroll = true;
        screenScrolled();


      //  alert(preProc);

    }
  
    return <>
    {includeBr?<div class="HorizontalLine"></div>:<></>}
        {buttonLabels.map((item,idx)=>{
            return <>
            {includeBr?<div class="HorizontalSpace"></div>:<></>}
            <button class="HeaderButton" onClick={clicked}><p id={(includeBr==true?"Small":"Big")+"HeaderButton"+buttonLabels[idx]}>{item}</p></button> {includeBr?<br/>:<></>}
            </>;
        })}
    </>;
}

export default Header;
// import './LineDivStyles.css';
// import React from 'react'
// import { useEffect } from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';

// function LineDiv() {
//     const [animate, setAnimate] = useState(false);
//     let mainRef =  useRef();
//     useEffect(()=>{
        
//     window.addEventListener('scroll',(e)=>{
//        console.log(mainRef.current.getBoundingClientRect());
//        let rect = mainRef.current.getBoundingClientRect();
//        let x = rect.y
//        //alert(x)
//        if( x >= 0 ){
//             if(!animate)
//                 setAnimate(true);
//        }
//        else{
//             if (animate){
//                 setAnimate(false)
//             }
//        }
//     });
//     },[])
    
//     useEffect(()=>{
//         //alert("animate useeffect")
//         //alert(animate)
//         if(!animate){
//             mainRef.current.style.maxWidth = 0;
//             mainRef.current.style.opacity = 0;
//         }
//         else{
//             mainRef.current.style.maxWidth = '100%';
//             mainRef.current.style.opacity = 1;
//         }
//     },[animate])

//   return (
//     <div ref={mainRef} className="LineDivOuter">
        
//     </div>
//   )
// }

// export default LineDiv
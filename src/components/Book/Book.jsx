import React from 'react'
import { useState } from 'react'

function Book() {
    const [width, setWidth] = useState(50)
    const [dragging, setDragging] = useState(false)
    const [prevCords, setPrevCords] = useState(window.screen.width)

    function dragStarted(e){
        console.log(e.clientX);
        if(e.clientX < prevCords){
            if(width >=20)
            setWidth(width-(prevCords - e.clientX))
        }else if(width < 100 && e.clientX > prevCords){
            setWidth(width + (e.clientX-prevCords))
        }
        setPrevCords(e.clientX)
    }
    return (
        <div>
            <div style={{width:width+"%"}} className="book--closed" onMouseDown={()=>{setDragging(true);}} onMouseUp={()=>{setDragging(false)}} onMouseMove={(e)=>{dragStarted(e)}}>
                <h1 className="book--title">PROJECTS</h1>
            </div>
            <div className="book--opened">
            <div className="leftPage page">Left page</div>
            <div className="rightPage page">Right Page</div>
            </div>
        </div>
    )
}

export default Book

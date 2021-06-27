import { useState, useRef } from "react";
import { Overlay } from "react-bootstrap";

function ExperiencePage(props){
    return <div id={props.id} class="ExpDiv">
        <center>
            <h1>Experience</h1>
        </center>
    <div  class="ExpGrid">
        
        <center>
            <div class="ExpItem">
                <center>
                    <h1>Work</h1>
                    <div style={{width:"20vw"}} class="HorizontalLineBlack"></div>
                    <p>Assistant Systems Engineer,</p><p> Tata Consultancy Services</p>
                    <p>Experience in months : <h1 style={{marginLeft:"4px",display:"inline"}}>4+</h1></p>
                 
                </center>
            </div>
        </center>

        <center>
            <div class="ExpItem">
                <center>
                    <h1>Alma Mater</h1>
                    <div style={{width:"20vw"}} class="HorizontalLineBlack"></div>
                    <p>Bachelors in <b>Computer Science And Engineering</b></p>
                    <p>R.V.R. & J.C.C.E.</p>
                    <p>Period : 2016-2020</p>
                </center>
            </div>
        </center>
        
     
      
    </div>
    
            <div class="ExpItemWide" style={{width:"100%"}}>
                <center>
                    <h1>Programming Knowledge</h1>
                    <div style={{width:"50%"}} class="HorizontalLineBlack"></div>
                    <center>
                    <div class="GridClass">
                        <div >
                                <SkillBar name="Java" value="90"/>
                                <SkillBar name="JavaScript" value="80"/>
                                <SkillBar name="Node.js/Express" value="70"/>
                        </div>
                        <div >
                                <SkillBar name="Python" value="80"/>
                                <SkillBar name="SQL" value="70"/>
                                <SkillBar name="AEM/CQ" value="70"/>
                        </div>
                        <div >
                                <SkillBar name="HTML/CSS" value="80"/>
                                <SkillBar name="React.js" value="80"/>
                                <SkillBar name="Mongo DB" value="60"/>
                    
                        </div>
                    </div>
                    </center>
                </center>
            </div>
       
    </div>
}


function SkillBar(props){
    const [name,setName] = useState(props.name);
    const [val,setVal] = useState(parseInt(props.value));
    const [showHover,setShowHover] = useState(false);
    const target = useRef(null);

    function skillHovered(){
        setShowHover(true);
    }
    function skillHoverLeft(){
        setShowHover(false)
    }

    return <div style={{position:"grid",gridTemplateColumns:"auto auto"}} onMouseEnter={skillHovered} onMouseLeave={skillHoverLeft}>
    
     <div class="SkillBarDiv">
                <p >{name}</p>
                <div class="SkillBar" ref={target} >
                    <div style={{left:(val-20)+"%"}} class="SkillButton"></div>
                </div>
                <Overlay target={target.current} show={showHover} placement="top">
        {({ placement, arrowProps, show: _showHover, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'black',
              padding: '2px 10px',
              margin: '7px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            {val/10}/10
          </div>
        )}
      </Overlay>
               
    </div>
    
        </div>;
}




export default ExperiencePage;
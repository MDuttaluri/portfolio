import React, { Component, useState } from 'react'
import './TilesStyles.css';


export class Tiles extends Component {
    render() {
        return (
            <div className="tilesOuterDiv">
                <h1>Projects</h1>
                <p>Some of my recent projects are showcased below</p>
                <div className="tileRowsGrid">

                <div className="tilesRow">
                <Tile title="E-Commerce Site(Ongoing)" url="https://shop-ee.web.app" description="MERN stack web application which replicates a full-on e-com website." tools={["React.js","Node.js","Express","MongoDB"]}/>
                <Tile title="E-Commerce Site(Ongoing)" url="https://shop-ee.web.app" description="MERN stack web application which replicates a full-on e-com website." tools={["React.js","Node.js","Express","MongoDB"]}/>
                </div>
                <div className="tilesRow">
                <Tile title="E-Commerce Site(Ongoing)" url="https://shop-ee.web.app" description="MERN stack web application which replicates a full-on e-com website." tools={["React.js","Node.js","Express","MongoDB"]}/>
                <Tile title="E-Commerce Site(Ongoing)" url="https://shop-ee.web.app" description="MERN stack web application which replicates a full-on e-com website." tools={["React.js","Node.js","Express","MongoDB"]}/>
                </div>
                <div className="tilesRow">
                <Tile title="E-Commerce Site(Ongoing)" url="https://shop-ee.web.app" description="MERN stack web application which replicates a full-on e-com website." tools={["React.js","Node.js","Express","MongoDB"]}/>
                <Tile title="E-Commerce Site(Ongoing)" url="https://shop-ee.web.app" description="MERN stack web application which replicates a full-on e-com website." tools={["React.js","Node.js","Express","MongoDB"]}/>
                </div>
                <div className="tilesRow">
                <Tile title="E-Commerce Site(Ongoing)" url="https://shop-ee.web.app" description="MERN stack web application which replicates a full-on e-com website." tools={["React.js","Node.js","Express","MongoDB"]}/>
                <Tile title="E-Commerce Site(Ongoing)" url="https://shop-ee.web.app" description="MERN stack web application which replicates a full-on e-com website." tools={["React.js","Node.js","Express","MongoDB"]}/>
                </div>

                </div>
                
            </div>
        )
    }
}


function Tile(props){
    const [title, setTitle] = useState(props.title || "Title");
    const [showTools, setShowTools] = useState(false);

    function getLanguageList(list){
    
        return <div hidden={!showTools}>
            <p><em>Language and tools used:</em></p>
            <div className="toolsGrid">
                {list.map((val,idx)=>{return <li>{val}</li>})}
            </div>
        </div>
        
    }
    



    return <div className="tile" onMouseOver={()=>{setShowTools(true)}} onMouseLeave={()=>{setShowTools(false)}}>
        <h3>{title}</h3>
        <p>Live URL : <a href={props.url}>{props.url}</a></p>
        <p>{props.description}</p>
        
        {getLanguageList(props.tools)}
    </div>
}




export default Tiles

import './ProjectsMobileStyles.css';
import React, { Component, useState } from 'react'
import { projectsData } from './ProjectsTable.jsx';

export function ProjectsMobileTable(){
        const [currentlyOpen, setCurrentlyOpen] = useState(-1)
        return (
            <div className="projectsMainDiv">
                {Object.keys(projectsData).map((key)=>{
                    return <div className={"projectsTitle "+ (key == currentlyOpen? "expandedTile ":"")}>
                        <p onClick={()=>{
                            if(key === currentlyOpen){
                                setCurrentlyOpen(-1)
                            }else{
                                setCurrentlyOpen(key)
                            }
                        }} className={"projectTileSmall"}>{projectsData[key].name}</p>
                        <div className="expandedProjectDiv" hidden={key != currentlyOpen}>
                            <h3>{projectsData[key].name}</h3>
                            <div style={{ width: "50%" }} class="HorizontalLineBlack"></div>

                            <p>{projectsData[key].description}</p>

                        </div>
                    </div>
                })}
            </div>
        )
    
}

export default ProjectsMobileTable

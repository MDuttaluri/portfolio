import "./ProjectsMobileStyles.css";
import React, { Component, useState } from "react";
import { projectsData } from "./ProjectsTable.jsx";

export function ProjectsMobileTable() {
  const [currentlyOpen, setCurrentlyOpen] = useState(-1);


  return (
    <div className="projectsMainDivSmall">
      {Object.keys(projectsData).map((key) => {
        return (
          <div
            className={
              "projectsTitle  " + (key == currentlyOpen ? "expandedTile " : "")
            }
          >
            <div
              onClick={() => {
                if (key === currentlyOpen) {
                  setCurrentlyOpen(-1);
                } else {
                  setCurrentlyOpen(key);
                }
              }}
              className={"projectTileSmall "}
            >
              <p
                className="projectHeadingTitleSmall"
                style={{
                  transition: "all 0.8s",
                 
                  ...(key == currentlyOpen
                    ? { fontSize: "1.3rem", width: "fit-content" }
                    : { fontSize: "1rem", width: "100%" }),
                }}
              >
                {projectsData[key].name}
              </p>
              {
                key == currentlyOpen?
                '-':
                '+'
              }
            </div>
            {/* <div className="expandedProjectDiv" hidden={key != currentlyOpen}> */}
            <div
              className="expandedProjectDiv"
              style={
                key == currentlyOpen
                  ? { maxHeight: "1400px" }
                  : { maxHeight: "0px" }
              }
            >
              {projectsData[key].liveUrl && (
                <label>
                  Live URL :{" "}
                  <a href={projectsData[key].liveUrl}>
                    {projectsData[key].URLlabel}
                  </a>
                </label>
              )}
              <p className="projectDescriptionSmall">
                {projectsData[key].description}
              </p>
              <div className="projectDetailsGridSmall">
                <div>
                  <p><b>Tools & Languages</b></p>
                  <ul>
                    {projectsData[key].tools.map((val) => {
                      return <li className="projectULSmall">{val}</li>;
                    })}
                  </ul>
                </div>
                <div >
                    <p><b>Work Duration</b></p>
                    <p>{projectsData[key].duration.length} </p>
                    <p>{projectsData[key].duration.timeFrame}</p>
                   
                </div>
                
              </div>
              
            </div>
            
          </div>
        );
      })}
    </div>
  );
}

export default ProjectsMobileTable;

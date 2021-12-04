import React, { Component, useEffect, useState } from 'react'
import './ProjectsTableStyles.css';

export let projectsData = {
    0: {
        name: "E-commerce Site (Ongoing)",
        description: "MERN stack web application which replicates a full-on e-com website.",
        tools: ["React.js", "Node.js", "Express.js", "MongoDB"],
        liveUrl: "https://shop-ee.web.app",
        duration : {
            length : "1 Month +",
            timeFrame : "September 2021 - Present"
        }
    },
    1: {
        name: "Sudoku Solver",
        description: "A simple interactive web application to solve a classic 9x9 sudoku puzzle using the backtracking approach.",
        liveUrl: "https://solve-sudoku.web.app",
        tools: ["HTML/CSS", "React.js", "Backtracking"],
        duration : {
            length : "5 Days",
            timeFrame : "June 2021"
        }
    },
    2: {
        name: "NPM - Typing Text - React Component Library",
        description: "A component library for React.js that enables 'typing' animation for the provided data with developer preferred customisation.",
        liveUrl: "https://www.npmjs.com/package/typingtext",
        tools: ["HTML/CSS", "React.js", "Rollup"],
        duration : {
            length : "1 Week",
            timeFrame : "August 2021"
        }
    },
    3: {
        name: "HTML Editor",
        description: "A Web application that enables users to write and check their HTML, CSS and JavaScript code in their browser. Additional features like 'Hot-render' and code downloading is also included.",
        liveUrl: "https://htmleditor.web.app",
        tools: ["HTML/CSS", "Ace editor", "React.js"],
        duration : {
            length : "1 Day",
            timeFrame : "July 2021"
        }
    },
    4: {
        name: "Image Captioning by Asking Questions",
        description: "A Machine Learning based project that utilises Computer Vision and Natural Language Processing to summarise and caption images.",
        liveUrl: "https://dl.acm.org/doi/fullHtml/10.1145/3313873",
        tools: ["Python", "Tensorflow", "Pandas", "Numpy"],
        duration : {
            length : "6+ Months",
            timeFrame : "March 2019 - March 2020"
        }

    },
    5: {
        name: "Library Management System",
        description: "A Web application to cater both library users and administators. Functionalities include viewing,listing,purchasing and renting of books.",
        liveUrl: "",
        tools: ["HTML/CSS", "PHP", "Javascript", "MySQL"],
        duration : {
            length : "2 Months",
            timeFrame : "December 2018"
        }
    },
}

function truncateLink(st){
    if(st.length > 30){
        return st.substr(0,30) + "..."
    }
    return st
}

export function ProjectsTable(props) {
    const [currentProject, setCurrentProject] = useState(0);

    async function animateRightDiv(interval, opacity) {
        //if(!dontWait)
        //  await new Promise(resolve => setTimeout(resolve, interval))
        document.getElementById("projectsTableRightDiv").style.opacity = opacity;
        //if(dontWait)
        await new Promise(resolve => setTimeout(resolve, interval))
    }


    useEffect(() => {

        //animateRightDiv();


    }, [currentProject])

    return (
        <div className="projectsTableDiv">
            <div className="projectsTableLeftDiv">
                {Object.keys(projectsData).map((key) => {
                    return <h3 className={"projectTitle " + (currentProject == key ? "projectSelected " : "")} onClick={async () => {
                        await animateRightDiv(300, 0);
                        setCurrentProject(key)
                        await animateRightDiv(300, 1);
                    }}>{projectsData[key].name}</h3>
                })}
            </div>
            <div  className="projectsTableRightDiv">
                <div className="projectsTableRightInnerDiv" id="projectsTableRightDiv" >
                    <h1>{projectsData[currentProject].name}</h1>
                    <div style={{ width: "50%" }} class="HorizontalLineBlack"></div>

                    <p className="description">{projectsData[currentProject].description}</p>
                    <div className="projectsInnerGrid">
                        <div>
                            <h2>Developed Using</h2>
                            <div style={{ width: "50%" }} class="HorizontalLineBlack"></div>
                            {projectsData[currentProject].tools.map((val)=>{
                                return <p className="devTools">{val}</p>
                            })}
                        </div>
                        <div className="projectsInnerGridRight">
                            {
                                projectsData[currentProject].liveUrl &&
                                <div className="largePadding">
                                    {currentProject!=4? <h2>Live URL </h2>:<h2>Paper available at</h2>}
                                    <div style={{ width: "50%" }} class="HorizontalLineBlack"></div>

                                    <h3><a target="blank" href={projectsData[currentProject].liveUrl}>{truncateLink(projectsData[currentProject].liveUrl)}</a></h3>
                                </div>
                            }
                            {
                                
                                <div>
                                    <h2>Work Duration</h2>
                                    <div style={{ width: "50%" }} class="HorizontalLineBlack"></div>
                                    <div style={{display:"flex", gap:"10px",alignItems:"center",marginBottom:"5px"}}><h3>Effort : </h3>{projectsData[currentProject].duration.length}</div>
                                    <div style={{display:"flex", gap:"10px",alignItems:"center"}}><h3>Time frame : </h3>{projectsData[currentProject].duration.timeFrame}</div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default ProjectsTable

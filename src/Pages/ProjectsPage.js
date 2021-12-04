import { Carousel } from "react-bootstrap";
import css from '../asset/css.png';
import html from '../asset/html.png';
import js from '../asset/js.png';
import ProjectsMobileTable from "../components/ProjectsTable/ProjectsMobileTable";
import ProjectsTable from "../components/ProjectsTable/ProjectsTable";
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'

function ProjectsPage(props) {

    return <div id={props.id} className="ProjectsDiv">
        <div className="projectsHeaderMain">
            <h1>Projects</h1>
            <p>Some of my recent works are placed in the below table.</p>
        </div>
        <ProjectsTable />
        <div className="displaySmall">
            <Carousel variant="dark" prevIcon={<AiFillCaretLeft style={{color:"#000"}}/>} nextIcon={<AiFillCaretRight style={{color:"#000"}}/>} interval="3000" className="carousel">
                <Carousel.Item>
                    <div className="ProjectCarouselDiv" style={{ color: "#000", backgroundColor: "#fff" }}>
                        <center>
                            <h2>Sudoku Solver</h2>
                            <div style={{width:"60%"}} className="HorizontalLineBlack"/>
                            <h3>Live URL : <a style={{ color: "white", textShadow: "2px 2px 2px blue" }} target="blank" href="https://solve-sudoku.web.app">Solve Sudoku</a></h3>
                            <p>A simple interactive web application to solve a classic 9x9 sudoku puzzle using the backtracking approach.</p>
                            <h4>Languages and techniques used :</h4>
                            <div style={{width:"40%"}} className="HorizontalLineBlack"/>
                            <div style={{ width: "50%" }}>
                                <p class="ProjectsP">HTML/CSS</p>
                                <p class="ProjectsP">React.js</p>
                                <p class="ProjectsP">Backtracking</p>
                            </div>
                            <div style={{marginTop:"40px"}}>
                                <h4>Work Duration :</h4>
                                <div style={{width:"40%"}} className="HorizontalLineBlack"/>
                                <p>Effort : 5 days</p>
                                <p>Time frame : June 2021</p>
                            </div>
                        </center>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="ProjectCarouselDiv" style={{color : "#000", backgroundColor:"#fff"}}>
                        <center>
                            <h2>HTML Editor</h2>
                            <div style={{width:"60%"}} className="HorizontalLineBlack"/>

                            <h3>Live URL : <a style={{ color: "white", textShadow: "2px 2px 2px blue" }} target="blank" href="https://htmleditor.web.app">Online Editor</a></h3>
                            <p>A Web application that enables users to write and check their HTML, CSS and JavaScript code in their browser. Additional features like 'Hot-render' and code downloading is also included.</p>
                            <h4>Languages and tools used :</h4>
                            <div style={{ width: "50%" }}>
                                <p class="ProjectsP">HTML/CSS</p>
                                <p class="ProjectsP">React.js</p>
                                <p class="ProjectsP">Ace Code Editor</p>
                            </div>
                            <div style={{marginTop:"40px"}}>
                                <h4>Work Duration :</h4>
                                <div style={{width:"40%"}} className="HorizontalLineBlack"/>
                                <p>Effort : 1 day</p>
                                <p>Time frame : July 2021</p>
                            </div>
                        </center>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="ProjectCarouselDiv" style={{ color: "#000", backgroundColor: "#fff" }}>
                        <center>
                            <h2>Typing Text - React Component Library</h2>
                            <div style={{width:"60%"}} className="HorizontalLineBlack"/>

                            <h3>NPM URL : <a style={{ color: "white", textShadow: "2px 2px 2px blue" }} target="blank" href="https://www.npmjs.com/package/typingtext">TypeTexting</a></h3>
                            <p>A component library for React.js that enables 'typing' animation for the provided data with developer preferred customisation.</p>
                            <h4>Languages used and target for:</h4>
                            <div style={{ width: "50%" }}>
                                <p class="ProjectsP">HTML/CSS</p>
                                <p class="ProjectsP">React.js</p>
                            </div>
                            <div style={{marginTop:"40px"}}>
                                <h4>Work Duration :</h4>
                                <div style={{width:"40%"}} className="HorizontalLineBlack"/>
                                <p>Effort : 1 Week</p>
                                <p>Time frame : August 2021</p>
                            </div>
                        </center>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="ProjectCarouselDiv" style={{ color: "#000", backgroundColor: "#fff" }}>
                        <center>
                            <h2>E-Commerce Site (Ongoing)</h2>
                            <div style={{width:"60%"}} className="HorizontalLineBlack"/>

                            <h3>Live URL : <a target="blank" style={{ color: "white", textShadow: "2px 2px 2px blue" }} href="https://shop-ee.web.app">Shop-ee</a></h3>
                            <p>MERN stack web application which replicates a full-on e-com website.</p>
                            <h4>Languages and tools used :</h4>
                            <div class="GridClassTwo" style={{ width: "50%" }}>
                                <p class="ProjectsP">React.js</p>
                                <p class="ProjectsP">Node.js</p>
                                <p class="ProjectsP">Express.js</p>
                                <p class="ProjectsP">MongoDB</p>
                            </div>
                            <div style={{marginTop:"40px"}}>
                                <h4>Work Duration :</h4>
                                <div style={{width:"40%"}} className="HorizontalLineBlack"/>
                                <p>Effort : 1 Month</p>
                                <p>Time frame : September 2021 - Present</p>
                            </div>
                        </center>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="ProjectCarouselDiv" style={{ color: "#000", backgroundColor: "#fff" }}>
                        <center>
                            <h2>Library Management System</h2>
                            <div style={{width:"60%"}} className="HorizontalLineBlack"/>

                            <p>A Web application to cater both library users and administators. Functionalities include viewing,listing,purchasing and renting of books.</p>
                            <h4>Languages and tools used :</h4>
                            <div class="GridClassTwo" style={{ width: "50%" }}>
                                <p class="ProjectsP">HTML/CSS</p>
                                <p class="ProjectsP">PHP</p>
                                <p class="ProjectsP">JavaScript</p>
                                <p class="ProjectsP">MySQL</p>
                            </div>
                            <div style={{marginTop:"40px"}}>
                                <h4>Work Duration :</h4>
                                <div style={{width:"40%"}} className="HorizontalLineBlack"/>
                                <p>Effort : 2 Months</p>
                                <p>Time frame : December 2018</p>
                            </div>
                        </center>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div class="ProjectCarouselDiv" style={{ backgroundColor: "#fff", color: "#000" }}>
                        <center>
                            <h2>Image captioning by Asking Questions</h2>
                            <div style={{width:"60%"}} className="HorizontalLineBlack"/>

                            <p>A Machine Learning based project that utilises Computer Vision and Natural Language Processing to summarise and caption images.</p>
                            <h4>Languages and tools used :</h4>
                            <div class="GridClassTwo" style={{ width: "50%" }}>
                                <p class="ProjectsP">Python</p>
                                <p class="ProjectsP">Tensorflow</p>
                                <p class="ProjectsP">Pandas</p>
                                <p class="ProjectsP">Numpy</p>
                            </div>
                            <div style={{marginTop:"40px"}}>
                                <h4>Work Duration :</h4>
                                <div style={{width:"40%"}} className="HorizontalLineBlack"/>
                                <p>Effort : 6+ Months</p>
                                <p>Time frame : March 2019 - March 2020</p>
                            </div>
                        </center>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    </div>
    /* return <div id={props.id} class="ProjectsDiv">
         <center>
         
         <h1>Projects</h1><br/>
         <p>Some of my recent projects are listed in the carousel below.</p>
         </center>
          
         <Carousel interval="3000" className="carousel">
         <Carousel.Item>
                 <div className="ProjectCarouselDiv" style={{color:"white",backgroundColor:"#341800"}}>
                     <center>
                         <h1>Sudoku Solver</h1>
                         <h3>Live URL : <a style={{color:"white",textShadow:"2px 2px 2px brown"}} target="blank" href="https://solve-sudoku.web.app">Solve Sudoku</a></h3>
                         <p>A simple interactive web application to solve a classic 9x9 sudoku puzzle using the backtracking approach.</p>
                         <h4>Languages and techniques used :</h4>
                         <div  style={{width:"50%"}}>
                                     <p class="ProjectsP">HTML/CSS</p>
                                     <p class="ProjectsP">React.js</p>  
                                     <p class="ProjectsP">Backtracking</p>
                         </div>
                     </center>
                 </div>
             </Carousel.Item>
             <Carousel.Item>
                 <div className="ProjectCarouselDiv">
                     <center>
                         <h1>HTML Editor</h1>
                         <h3>Live URL : <a style={{color:"white",textShadow:"2px 2px 2px red"}} target="blank" href="https://htmleditor.web.app">Online Editor</a></h3>
                         <p>A Web application that enables users to write and check their HTML, CSS and JavaScript code in their browser. Additional features like 'Hot-render' and code downloading is also included.</p>
                         <h4>Languages and tools used :</h4>
                         <div  style={{width:"50%"}}>
                                     <p class="ProjectsP">HTML/CSS</p>
                                     <p class="ProjectsP">React.js</p>  
                                     <p class="ProjectsP">Ace Code Editor</p>
                         </div>
                     </center>
                 </div>
             </Carousel.Item>
             <Carousel.Item>
                 <div className="ProjectCarouselDiv" style={{color:"black",backgroundColor:"#c0c3c3"}}>
                     <center>
                         <h1>Typing Text - React Component Library</h1>
                         <h3>NPM URL : <a style={{color:"white",textShadow:"2px 2px 2px rgba(16, 12, 66, 1)"}} target="blank" href="https://www.npmjs.com/package/typingtext">TypeTexting</a></h3>
                         <p>A component library for React.js that enables 'typing' animation for the provided data with developer preferred customisation.</p>
                         <h4>Languages used and target for:</h4>
                         <div  style={{width:"50%"}}>
                                     <p class="ProjectsP">HTML/CSS</p>
                                     <p class="ProjectsP">React.js</p>  
                         </div>
                     </center>
                 </div>
             </Carousel.Item>
             <Carousel.Item>
                 <div class="ProjectCarouselDiv" style={{color:"white",backgroundColor:"rgba(16, 12, 66, 1)"}}>
                     <center>
                         <h1>E-Commerce Site (Ongoing)</h1>
                         <h3>Live URL : <a target="blank" style={{color:"white",textShadow:"2px 2px 2px blue"}} href="https://shop-ee.web.app">Shop-ee</a></h3>
                         <p>MERN stack web application which replicates a full-on e-com website.</p>
                         <h4>Languages and tools used :</h4>
                         <div class="GridClassTwo" style={{width:"50%"}}>
                                     <p class="ProjectsP">React.js</p>
                                     <p class="ProjectsP">Node.js</p>
                                     <p class="ProjectsP">Express.js</p>
                                     <p class="ProjectsP">MongoDB</p>
                         </div>
                     </center>
                 </div>
             </Carousel.Item>
             <Carousel.Item>
                 <div class="ProjectCarouselDiv" style={{color:"white",backgroundColor:"rgb(77, 184, 192)"}}>
                     <center>
                         <h1>Library Management System</h1>
                         <p>A Web application to cater both library users and administators. Functionalities include viewing,listing,purchasing and renting of books.</p>
                         <h4>Languages and tools used :</h4>
                         <div class="GridClassTwo" style={{width:"50%"}}>
                                     <p class="ProjectsP">HTML/CSS</p>
                                     <p class="ProjectsP">PHP</p>
                                     <p class="ProjectsP">JavaScript</p>
                                     <p class="ProjectsP">MySQL</p>
                         </div>
                     </center>
                 </div>
             </Carousel.Item>
             <Carousel.Item>
             <div class="ProjectCarouselDiv" style={{backgroundColor:"#D6F8B8",color:"black"}}>
                     <center>
                         <h1>Image captioning by Asking Questions</h1>
                         <p>A Machine Learning based project that utilises Computer Vision and Natural Language Processing to summarise and caption images.</p>
                         <h4>Languages and tools used :</h4>
                         <div class="GridClassTwo" style={{width:"50%"}}>
                                     <p class="ProjectsP">Python</p>
                                     <p class="ProjectsP">Tensorflow</p>
                                     <p class="ProjectsP">Pandas</p>
                                     <p class="ProjectsP">Numpy</p>
                         </div>
                     </center>
                 </div>
             </Carousel.Item>
 
         </Carousel>
     </div>*/
}


export default ProjectsPage;
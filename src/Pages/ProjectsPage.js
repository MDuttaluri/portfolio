import { Carousel } from "react-bootstrap";
import css from '../asset/css.png';
import html from '../asset/html.png';
import js from '../asset/js.png';


function ProjectsPage(props){
    return <div id={props.id} class="ProjectsDiv">
        <center>
        <h1>Manyu Duttaluri</h1>
        <p>Full Stack Developer</p>
        <h1>Projects</h1><br/>
        </center>
        <Carousel interval="3000" className="carousel">
            <Carousel.Item>
                <div className="ProjectCarouselDiv">
                    <center>
                        <h1>HTML Editor</h1>
                        <h3>Live URL : <a style={{color:"white",textShadow:"2px 2px 2px red"}} target="blank" href="https://htmleditor.web.app">Online Editor</a></h3>
                        <p>A Web application that enables users to write and check their HTML, CSS and JavaScript code in their browser. Additional features like 'Hot-render' and code downloading is also included.</p>
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
    </div>
}


export default ProjectsPage;
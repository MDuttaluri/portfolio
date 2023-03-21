import { useEffect } from "react";
import ContactPage from "./ContactPage";
import ExperiencePage from "./ExpPage";
import ProjectsPage from "./ProjectsPage";
import IntroPage from './IntroPage';
import BackToTop from "../components/BackToTop/BackToTop";
function LandingPage(props){

    useEffect(()=>{
       // fetch('https://portfolio-mailer.azurewebsites.net/')
    },[])

    const id = props.id
    return <div>
        <div  id={id} class="LandingPageDiv">
            <IntroPage id={"Intro"}/>
            <ProjectsPage id="Projects"/>
            <ExperiencePage id="Experience"/>
           
            <ContactPage id="Contact"/>
           
    </div>
                    <BackToTop/>

        </div>
}


export default LandingPage;
import { useEffect } from "react";
import ContactPage from "./ContactPage";
import ExperiencePage from "./ExpPage";
import HomePage from "./forms/streamPage";
import StoryCard from "./StoryCard";
import TechStack from "./TechStack";
import ProjectsPage from "./ProjectsPage";
import IntroPage from './IntroPage';
function LandingPage(props){

  
    const id = props.id
    return <div  id={id} class="LandingPageDiv">
            <IntroPage id={"Intro"}/>
            <ProjectsPage id="Projects"/>
            <ExperiencePage id="Experience"/>
           
            <ContactPage id="Contact"/>

           
    </div>
}


export default LandingPage;
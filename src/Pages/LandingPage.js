import { useEffect } from "react";
import ContactPage from "./ContactPage";
import ExperiencePage from "./ExpPage";
import HomePage from "./forms/streamPage";
import StoryCard from "./StoryCard";
import TechStack from "./TechStack";
import ProjectsPage from "./ProjectsPage";

function LandingPage(props){

  
    const id = props.id
    return <div  id={id} class="LandingPageDiv">
            <ProjectsPage id="Projects"/>
            <ExperiencePage id="Experience"/>
            <HomePage id="Tech Stack"/>
            <ContactPage id="Contact"/>
           
    </div>
}


export default LandingPage;
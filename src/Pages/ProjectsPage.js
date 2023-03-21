import ProjectsMobileTable from "../components/ProjectsTable/ProjectsMobileTable";
import ProjectsTable from "../components/ProjectsTable/ProjectsTable";

function ProjectsPage(props) {

    return <div id={props.id} className="ProjectsDiv">
        <div className="projectsHeaderMain">
            <h1>Projects</h1>
            <p>Some of my recent works are placed in the below table.</p>
        </div>
        <ProjectsTable />
        <ProjectsMobileTable />
        <div className="displaySmall">
            
        </div>
        
    </div>
    
}


export default ProjectsPage;
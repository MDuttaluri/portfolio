import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Pages/header";
import LandingPage from "./Pages/LandingPage";

import HomePage from "./Pages/forms/streamPage";
function App() {
  return (
   
    <div id="Main" class="Main" >
       <Header/>
       <LandingPage id="landingPage"/>
    </div>
  );
}

export default App;

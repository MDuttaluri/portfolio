import logo from './logo.svg';
import './App.css';
import { motion } from "framer-motion"
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from "./Pages/forms/streamPage";
function App() {
  return (
    <div style={{backgroundColor:"black" ,overflow:"auto"}}>
      <HomePage/>
    </div>
  );
}

export default App;

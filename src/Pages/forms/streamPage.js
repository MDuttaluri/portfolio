import { motion } from "framer-motion"
import Card from "./Player";
import {Row,Col, Container} from "react-bootstrap";
import 'semantic-ui-css/semantic.min.css'
import Auxillary from "./Auxillary";
import { useEffect, useState } from "react";

function HomePage(props){

    const [stage,setStage] = useState(<></>);

    useEffect(()=>{
        setStage(<Card nextCard={setStage}/>);
    },[]);




    return <div id={props.id} class="StreamPageMainDiv" >

        <motion.div  
        
        animate={{ x:[-500,0] ,transition:{duration:0.5}}}
        transition={{ ease: "easeOut", duration: 0.5 }}
        whileHover={{ scale: 2.5 }}
        whileTap={{ scale: 0.9 , transition:{duration:0.5}}}
        children={
                <div style={{margin:"10px"}}>
                    <h3 style={{textAlign:"center"}}><h1 style={{display:"inline",color:"orange"}}>T</h1>ech <h1 style={{display:"inline",color:"#e016a3"}}>S</h1>tack</h3>
                </div>
            }
        />
        
        <center>
                <motion.div
                    animate={{scale:[0,1],transition:{duration:2}}}
                >
                    {stage}
                </motion.div>
        </center>
    </div>;
}




export default HomePage;
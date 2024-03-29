import { useState } from "react";
import Auxillary from "./Auxillary";
import { Container,Row,Col,Button,Jumbotron, Image } from "react-bootstrap";
import monitor from '../../asset/monitor.png';
import DeviceCard from '../DeviceCard';
import { motion } from "framer-motion"

import reactLogo from "../../asset/logo192.png";
import html from "../../asset/html.png";
import js from "../../asset/js.png";
import css from "../../asset/css.png";
import front_end from "../../asset/front_end.png";
import Middleware from "../Middleware";


function Card(props){


    return <div class="MonitorOuterDiv">
        <div class="MonitorInnerDiv">
            <Jumbotron style={{backgroundColor:"#77DD77"}} fluid>
                <h1 style={{display:"inline",color:"black"}}>Front-End </h1>
                <Image src={front_end} style={{width:"5%"}}></Image>
            </Jumbotron>
            <Container fluid="true">
            <Row noGutters md="2" sm="1" xs="1" xl="2" lg="2">
                <Col>
                <motion.div
                   
                    whileHover={{scale:1.1}}
                    children={<DeviceCard color="orange" image={html} header="HTML"/>}>
                </motion.div>
                </Col>
                <Col>
                <motion.div
                   
                    whileHover={{scale:1.1}}
                    children={<DeviceCard color="#16d0e0" image={css} header="CSS"/>}>
                </motion.div>
                </Col>
            </Row>
            <Row noGutters md="2" sm="1" xs="1" xl="2" lg="2">
            <Col>
            <motion.div
                   
                    whileHover={{scale:1.1}}
                    children={<DeviceCard color="#e016a3" image={js} header="JavaScript"/>}>
                </motion.div>
               
                </Col>
                <Col>
                <motion.div
                   
                   whileHover={{scale:1.1}}
                   children={<DeviceCard color="#ffffff" image={reactLogo} fontColor="black" header="React.js"/>}>
               </motion.div>
                
                </Col>
            </Row>
           
            </Container>
        </div>
        <div class="DeviceHomeButton">
               <div class="DeviceHomeButtonInner"/>
           </div>
        <div class="MonitorBaseDiv"/>
    </div>;
}


export default Card;

/*
 <Row>
<Col>
<Button style={{backgroundColor:"black",outlineColor:"black"}} onClick={()=>props.nextCard(<Middleware/>)}>Next</Button>
</Col>
</Row>*/
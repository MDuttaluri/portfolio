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


function Card(){


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
                <DeviceCard color="#16d0e0" image={css} header="CSS"/>
                </Col>
            </Row>
            <Row noGutters md="2" sm="1" xs="1" xl="2" lg="2">
            <Col>
                <DeviceCard color="#e016a3" image={js} header="JavaScript"/>
                </Col>
                <Col>
                <DeviceCard color="#ffffff" fontColor="black" image={reactLogo} header="React.js"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <Button style={{backgroundColor:"black",outlineColor:"black"}}>Next</Button>
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
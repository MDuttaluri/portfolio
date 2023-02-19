import moment from 'moment';
import { useEffect, useState } from 'react';
import resume from '../asset/Resume-Manyu Duttauri.pdf';
import firebase from 'firebase';
import Book from '../components/Book/Book';
import Tiles from '../components/Tiles/Tiles';
import ProjectsTable from '../components/ProjectsTable/ProjectsTable';
import publicIp from 'public-ip';

const firebaseConfig = {
    apiKey: "AIzaSyAwOSQKuHei4KGV9x0v3cv1yUGt00sevEM",
    authDomain: "dmt-portfolio.firebaseapp.com",
    projectId: "dmt-portfolio",
    storageBucket: "dmt-portfolio.appspot.com",
    messagingSenderId: "479756051240",
    appId: "1:479756051240:web:216cb153fd55395fcce61d",
    measurementId: "G-YD3GJV9Z6E"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();
  const analytics = firebase.analytics();
  
  async function getIP(){
      const userIP = await publicIp.v4();
      return userIP;
  }

  async function logUserEntry(){
    const userIP = await getIP();
    let storageRef = storage.ref("/logs/"+userIP).child(moment().format()+".txt");
    
    try{
        storageRef.putString("IP Address : "+userIP+"\n Timestamp : "+moment().format());
    }catch(err){}
  }

function ContactPage(props){
    const[lockSubmit,setLockSubmit] = useState(false);
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    useEffect(()=>{
        logUserEntry();
        let x = localStorage.getItem("mailSent")
        if(x !== null){
            if(x === "yes"){
                let timestamp = localStorage.getItem("mailTimestamp")
                if(timestamp === null)
                    return
                let timeDiff = moment(timestamp).diff(moment())
                if(timeDiff < -86400000){
                    localStorage.removeItem("mailTimestamp")
                    localStorage.removeItem("mailSent")
                    return
                }
                setLockSubmit(true);
            }
        }
    },[])


    return <div id={props.id} class="ContactDiv">
        <center>
            <h1 style={{fontSize:"2rem"}}>Contact</h1>
            <div style={{width:"50%"}} class="HorizontalLineBlack"></div>
            <div className="mailDiv">
                <h3>Have something to say?</h3>
                <form>
                    <div className="grid--threeCol">
                        <span>Name</span>
                        <label>:</label>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text"/>
                    </div>
                    <div className="grid--threeCol">
                        <span>Subject</span>
                        <label>:</label>
                        <input onChange={(e)=>{setSubject(e.target.value)}}  type="text"/>
                    </div>
                    <div className="grid--threeCol">
                        <span>Message</span>
                        <label>:</label>
                        <textarea onChange={(e)=>{setMessage(e.target.value)}}  className="textarea"/>
                    </div>
                    <button onClick={()=>{
                        localStorage.setItem("mailSent","yes");
                        localStorage.setItem("mailTimestamp",moment().format());
                        let storageRef = storage.ref().child(name+"-"+moment().format()+".txt")
                        //let blob = new Blob(["Name: "+name+", Subject:"+subject+", Message:"+message],{type:"text/plain"})
                        try{
                        storageRef.putString("Name: "+name+", Subject:"+subject+", Message:"+message)
                        }catch(err){}

                        setLockSubmit(true)}
                    } className={"button " + (lockSubmit?"buttonDisabled":"")} disabled={lockSubmit}>Send</button>
                    <p hidden={lockSubmit}>Please do not include any sensitive information.</p>
                    <p hidden={!lockSubmit} style={{marginTop:"10px"}}>Message sent! </p>
                    <p hidden={!lockSubmit}>Thank you for your interest. I will get back to you as soon as possible.</p>
                    <p hidden={!lockSubmit}>Only one message can be sent in a day as a measure to avoid spamming. </p>
                </form>
            </div>
            
           <div style={{marginTop:"15px"}}>
                <h1>More</h1>
                <div style={{width:"50%"}} class="HorizontalLineBlack"></div>
                <p>Resume link : <a className="hoverText" href={resume} target="blank">View</a>&ensp;<a className="hoverText" href={resume} download>Download</a></p>
                <p>LinkedIn Profile : <a className="hoverText" target="blank" href="https://www.linkedin.com/in/manyu-duttaluri">Manyu Duttaluri</a></p>
                <p>Page developed using React.js and hosted on Firebase. </p>
           </div>
        
        </center>
    </div>
}

export default ContactPage;
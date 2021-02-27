import { useState } from "react";
import { Image } from "react-bootstrap";


function DeviceCard(props){
    const [color,setColor] = useState(props.color);
    const [header,setHeader] = useState(props.header);
    const [fontColor,setfontColor] = useState(props.fontColor)
    const [image,setImage] = useState(props.image)

    return <div style={{backgroundColor:color}} class="DeviceCard">
        <h5 style={{display:"inline",color:fontColor}}>{header}</h5>
        <Image style={{width:"20%"}} src={image}></Image>
    </div>
}


export default DeviceCard;
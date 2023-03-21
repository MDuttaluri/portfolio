import React, { useEffect, useState } from 'react'
import {FiArrowDown} from 'react-icons/fi';
function IntroPage({id}) {
    const [counter, setCounter] = useState(0)
    const [items, setItems] = useState([])
    const [data, setData] = useState(["Hello!","This is,","Manyu Duttaluri","And I'm a,"])
    const [intervals, setIntervals] = useState([800,1000,1800,1300,2100])
    const [titles, setTitles] = useState(["","Ex-MNC Employee","Full Stack Developer", "CS Student."])
    const [navButtonOpacity, setNavButtonOpacity] = useState("0")
    const highlightIdx = 2;

    function getPromise(interval){
        return new Promise(resolve => setTimeout(resolve,interval))
    }

    async function loaded(){
        let i = -1
        for(;i<data.length;i++){
            setItems(getItems(i))
            //if(i>0)
                await getPromise(intervals[i])
        }
    
        let erased = false
        let placed = true
        while(i<=(data.length + titles.length-1)){
            setItems(getItems(i,erased))
            if(i === data.length + titles.length - 2){
                //alert(i)
                return
            }
            if(placed && erased){
                i++
            }
            erased = !erased;
            
            await getPromise(1000)
        }
        
        

        
    }

    async function loadNavButton(){
        await getPromise(1000)
        setNavButtonOpacity("1");
    }

    useEffect(async()=>{
        await loaded()
        loadNavButton()
        
    },[])

    useEffect(()=>{
        setItems(getItems())
    },[counter])


    function getItems(count,eraseMode=false){
        let items = []
        //let data = 
        let bound = Math.min(count,data.length-1)
        //alert(bound)

        for(let i =0;i<=bound;i++){
            items.push(<div className="introDiv__item"><p style={{animation:count>i?"none":`animText ${intervals[i]}ms steps(40, end) forwards,animText__cursor 0.8s infinite`, fontWeight:i == highlightIdx? 'bolder':'normal'}} className={count>i?"animText noAnim":"animText"}>{data[i]}</p></div>)
        }
        // console.log(count);
        let i = count - data.length;
        if(i >= 0){
        
            if(eraseMode)
                items.push(<div className="introDiv__item"><p style={{fontSize:"40px",animation:`animText--rev ${1000}ms steps(40, end) forwards,animText__cursor 0.8s infinite`}} className={"animText"}>{titles[i+1]}</p></div>)
            else
                items.push(<div className="introDiv__item"><p style={{fontSize:"40px",animation:`animText ${1000}ms steps(40, end) forwards,animText__cursor 0.8s infinite`}} className={"animText"}>{titles[i+1]}</p></div>)
        }

        return items
    }

    function moveToProjects(){
        let headerHeight = document.getElementById("Header").offsetHeight;
        window.scroll({behavior:"smooth",top : document.getElementById("Projects").offsetTop - headerHeight})
    }

    return (
    
        <div id={id} className="IntroDiv">
            <div className="introDiv__itemsDiv">
                {items}
                <div  onClick={()=>{moveToProjects()}} ><FiArrowDown className="IntroButtonNav" style={{opacity:navButtonOpacity}} size="40px" /></div>
                </div>
               
        </div>
    )
}

export default IntroPage

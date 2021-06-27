function ContactPage(props){
    return <div id={props.id} class="ContactDiv">
        <center>
            <h1 style={{fontSize:"2rem"}}>Contact</h1>
            <div style={{width:"50%"}} class="HorizontalLineBlack"></div>
            <div>
                <h3>Drop a mail at : </h3>
                <a  href="mailto:off.manyu@gmail.com"><h1>off.manyu@gmail.com</h1></a><br/>
            </div>
            <h2>Timings : </h2>
            <div style={{display:"grid",gridTemplateColumns:"50% 50%"}}>
                <div>                
                <h3>Week Days:</h3>
                <h1> 6:00 PM to 9:00 PM </h1>
                </div>
                <div>
                <h3>Week Ends:</h3>
                <h1> 10:00 AM to 9:00 PM</h1>
                </div>
            </div>
            <div>
                <h3>Call : </h3>
                <a  href="tel:1234567890"><h1>+91 123-456-7890</h1></a><br/>
            </div>
        </center>
    </div>
}

export default ContactPage;
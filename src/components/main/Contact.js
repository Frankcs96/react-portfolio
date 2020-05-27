import React from "react";
import linkedin from '../../assets/linkedin.png';
import mail from '../../assets/mail.png';


const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <hr/>
            <div className="contactContent">
            <img style={{borderRadius: "50%"}} src={linkedin} alt="linkedin" width="20%" onClick={() => window.open("http://www.linkedin.com/in/francisco-carmona-458bb6195","_blank")}/>
            <img style={{borderRadius: "50%"}} src={mail} alt="linkedin" width="20%" onClick={() => window.location.href = "mailto:fcsuarez96@gmail.com"}/>
            </div>
        </div>
    );
}



export default Contact
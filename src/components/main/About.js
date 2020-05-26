import React from "react";
import aboutPhoto from "../../assets/about-photo.jpg";


const About = () => {

    return (
        <div className="about">
            <h1>About me</h1>
            <hr/>
            <div className="aboutContent">

                <p>Hi! I'm Francisco Carmona a Enthusiastic Software Developer <br/> at the moment living in Spain. <br/><br/>
                I'm always discovering new technologies and learning from other people. <br/>
                My favourite stack is backend but I'm always trying to improve my frontend skills <br/><br/>
                My programming language of choice for backend is Java, but also have <br/>
                some experience with python and C++. <br/> <br/>

                <p>for the frontend my favourite framework is React</p>

                </p>


                <img style={{marginLeft: "30px"}} src={aboutPhoto} alt="aboutPhoto" width="500px" height="320px"/>

            </div>

        </div>
    );
}


export default About
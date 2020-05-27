import React from "react";



const Card = (props) => {

    return (
        <div className="cardContainer">


            <div className="card">
                <div className="card-head">
                    <img src={props.attributes.photo} alt="" height="200px" width="350px"/>
                </div>
                <div className="card-body">
                    <h1>{props.attributes.title}</h1>
                    <p>{props.attributes.desc}</p>
                    <br/>
                    <h3>What I learned</h3>
                    {props.attributes.skills.map(skill => {
                        return <h4 key={skill}>{skill}</h4>
                    })}

                </div>
                <div className="button1">
                    <a href={props.attributes.link} target="_blank" rel="noopener noreferrer">View Source Code</a>
                </div>
            </div>
        </div>

    );
}

export default Card

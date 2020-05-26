import React from "react";
import Card from "./Card";
import wowImg from "../../assets/wow-guild.png";
import conwayImg from "../../assets/conway.png";


const Projects = () => {

    const wowGuildManager = {
        photo: wowImg,
        title: "WoW Guild Manager",
        desc: "Crud application with login for managing your guild in World of warcraft (no framework)",
        skills: ["-Servlets","-Filters","-JDBC","-Basic auth","-MVC"],
        link: "https://github.com/Frankcs96/WoW-Guild-Manager"
    }

    const conway = {
        photo: conwayImg,
        title: "Conway's Game of Life",
        desc: "The famous Conway's Game of Life with java swing",
        skills: ["-Swing","-Render Graphics"],
        link: "https://github.com/Frankcs96/Conway-s-Game-of-Life-with-UI"
    }



    return (
        <div className="projects">
            <h1>Projects</h1>
            <hr/>
            <div className="projectsContent">
                <Card attributes = {wowGuildManager}/>
                <Card attributes = {conway}/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    );
}



export default Projects
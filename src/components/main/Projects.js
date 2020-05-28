import React from "react";
import Card from "./Card";
import wowImg from "../../assets/wow-guild.png";
import conwayImg from "../../assets/conway.png";
import weatherImg from "../../assets/weather.png";
import mazeImg from "../../assets/maze.png";
import ushortImg from "../../assets/ushort.png";


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

    const weather = {
        photo: weatherImg,
        title: "Weather app",
        desc: "Basic weather app with Node js",
        skills: ["-Node","-Fetch api","-API","-JS","-Heroku"],
        link: "https://github.com/Frankcs96/First-nodejs-app-Weather"
    }

    const maze = {
        photo: mazeImg,
        title: "Maze Runner",
        desc: "Pacman based game with libgdx (java)",
        skills: ["-Game dev","-Libgdx","-OOP"],
        link: "https://github.com/Frankcs96/maze-runner"
    }

    const ushort = {
        photo: ushortImg,
        title: "U-short",
        desc: "URL shortener service",
        skills: ["-API REST","-Spring framework","-Base62","-React","-MySQL"],
        link: "https://github.com/Frankcs96/Ushort"
    }




    return (
        <div className="projects">
            <h1>Projects</h1>
            <hr/>
            <div className="projectsContent">
                <Card attributes = {wowGuildManager}/>
                <Card attributes = {ushort}/>
                <Card attributes = {maze}/>
                <Card attributes = {conway}/>
                <Card attributes = {weather}/>

            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>

    );
}



export default Projects
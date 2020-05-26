import React from "react";
import './Header.css';
import background from "../../assets/background-header.jpg";
import profilePhoto from '../../assets/profile.jpg';


const Header = () => {


    return (
        <header>
            <div id='header' style={{backgroundImage: "url("+background+")"}}>
                <div className="header-content">
                <img width="200px" src={profilePhoto} alt="profile"/>
                <h2>Francisco Carmona</h2>
                <p>Software developer</p>
                </div>
            </div>
        </header>
    );
}


export default Header;
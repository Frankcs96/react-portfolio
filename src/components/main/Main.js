import React, {useState} from "react";
import SectionPicker from "./SectionPicker";
import './Main.css'
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";


const Main = () => {

    const [selected, setSelected] = useState(0);

    function sectionPickerHandler (index) {
        setSelected(index)
    }

    function haveToRender(state) {
        if(state === 0){
            return <About/>
        }
        if(state === 1){
            return <Projects/>
        }
        if(state === 2){
            return <Contact/>
        }
    }



    return (
        <main>
            <SectionPicker selected = {selected} sectionPickerHandler = {sectionPickerHandler}/>
            <div className="mainContent">
            {haveToRender(selected)}
            </div>

        </main>

    );
}


export default Main;
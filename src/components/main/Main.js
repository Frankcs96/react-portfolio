import React, {useState} from "react";
import SectionPicker from "./SectionPicker";
import './Main.css'


const Main = () => {

    const [selected, setSelected] = useState(0);

    function sectionPickerHandler (index) {
        setSelected(index)
    }

    return (
        <main>
            <SectionPicker selected = {selected} sectionPickerHandler = {sectionPickerHandler}/>
        </main>

    );
}


export default Main;
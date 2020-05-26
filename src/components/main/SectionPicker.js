import React from "react";


const SectionPicker = (props) => {

    const categories = ["About me","Projects","Contact"]



    return (
        <div className="sectionPicker">

            {categories.map((category,index) => {
                if (props.selected === index) {
                    return <h2 onClick={() => props.sectionPickerHandler(index)} key={index} className="selected">{category}</h2>
                } else {
                    return <h2 onClick={() => props.sectionPickerHandler(index)} key={index}>{category}</h2>
                }
            })}



        </div>

    );
}


export default SectionPicker;
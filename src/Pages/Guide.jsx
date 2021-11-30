import { useState } from "react";
import { GuideForm } from "../Components/Guide/Guide"

function Guide(props) {
    
    return (
        <div>
            <GuideForm setList={props.setList} listData={props.listData}/>
        </div>
    )
}

export default Guide;
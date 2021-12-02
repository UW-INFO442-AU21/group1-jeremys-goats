import { useState } from "react";
import { GuideForm } from "../Components/Guide/Guide"
import '../Components/Guide/guide.css';

function Guide(props) {
    const [type, setType] = useState([]);
    
    return (
        <div>
            <GuideForm setList={props.setList} listData={props.listData} type={setType}/>
            <TypeGuide type={type}/>
        </div>
    )
}
function TypeGuide(props) {
    let type = props.type;
    if (type === 'sell by') {
        type = 'According to the USDA, "sell by" date tells the store \
        how long to display the product for sale for inventory \
        management. It is not a safety date.';
    }
    if (type === 'use by'){
        type = 'According to the USDA, "use by" date is the last date \
        recommended for the use of the product while at peak quality. \
        It is not a safety date.'
    }
    if (type === 'best by') {
        type = 'According to the USDA, "best by" date indicates when \
        a product will be of best flavor or quality.  It is not a \
        purchase or safety date.'
    }
    return (
        <p>{type} Learn more about labels at the <a target='_blank' href='https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/food-product-dating'>
            USDA site</a>.
        </p>
    );
}

export default Guide;